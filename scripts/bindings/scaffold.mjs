import { existsSync, readFileSync } from 'node:fs';
import * as path from 'node:path';
import { TYPINGS_DIR } from '../typings/config.mjs';
import { enumHome, inferConverter } from './converters.mjs';
import { BINDINGS_DIR } from './emit.mjs';
import { convertersOf, sdkChain } from './migrate.mjs';
import { nativeListener } from './native.mjs';
import { accessors, buildModel, uncapitalize } from './parse.mjs';

const androidTypings = () => readFileSync(path.join(TYPINGS_DIR, 'massifmaps.android.d.ts'), 'utf8');
const iosTypings = () => readFileSync(path.join(TYPINGS_DIR, 'massifmaps.ios.d.ts'), 'utf8');
/** the plugin's own java/swift additions, which may not have been generated yet */
const readIfPresent = (file) => {
    try {
        return readFileSync(path.join(TYPINGS_DIR, file), 'utf8');
    } catch {
        return '';
    }
};

/** the body of the first declaration `re` matches, braces balanced */
function grab(src, re) {
    const m = src.match(re);
    if (!m) return '';
    const start = src.indexOf('{', m.index + m[0].length - 1);
    let depth = 0;
    let i = start;
    for (;;) {
        if (src[i] === '{') depth++;
        else if (src[i] === '}') {
            depth--;
            if (depth === 0) break;
        }
        i++;
    }
    return src.slice(start, i);
}

/**
 * The constructors are the one part a generator cannot decide: android takes
 * `new X(a, b)` while iOS takes `X.alloc().initWithAB(a, b)`, and which overload the
 * plugin should expose depends on the options object. So they are emitted as a comment
 * for the author to pick from, and everything else is filled in.
 */
function constructorsFor(name) {
    const aBody = grab(androidTypings(), new RegExp(`export class ${name}(?: extends [\\w.]+)?[^{]*\\{`));
    const iBody = grab(iosTypings(), new RegExp(`declare class MSF${name}(?: extends \\w+)?[^{]*\\{`));

    return {
        android: [...String(aBody).matchAll(/\n\s*public constructor\(([^)]*)\);/g)].map((m) => `new ${name}(${m[1]})`),
        ios: [...String(iBody).matchAll(/\n\s*(initWith\w*)\(([^)]*)\)/g)].map((m) => `MSF${name}.alloc().${m[1]}(${m[2]})`)
    };
}

function bindingImportPath(pkg) {
    return `../bindings/${pkg.split('.').join('/')}`;
}

/** the TypeScript spelling of a native type, degrading an enum with no home to `number` */
function tsType(nativeType) {
    const info = inferConverter(nativeType);
    if (info.kind === 'enum' && !enumHome(info.enumName)) return 'number';
    return info.type;
}

/**
 * The imports the listener signatures need. A callback returning `VectorElementDragResult`
 * does not compile on its own, and the scaffold is worth less than nothing if the author's
 * first job is chasing down where an enum lives.
 *
 * The paths assume the file ends up in `src/ui-massifmaps/<pkg>/` - one level shallower
 * than the generated bindings, which is why this cannot reuse emit.mjs's version.
 */
function typeImports(pkg, nativeTypes) {
    const up = '../'.repeat(pkg.split('.').length);
    const core = new Set();
    const local = new Map();
    for (const t of nativeTypes) {
        const info = inferConverter(t);
        for (const n of info.imports?.['@nativescript/core'] ?? []) core.add(n);
        if (info.plugin) {
            const from = up + info.plugin.module;
            if (!local.has(from)) local.set(from, new Set());
            for (const n of info.plugin.names) local.get(from).add(n);
        }
        if (info.kind === 'enum') {
            const home = enumHome(info.enumName);
            if (!home) continue;
            const from = up + home;
            if (!local.has(from)) local.set(from, new Set());
            local.get(from).add(info.enumName);
        }
    }
    const lines = [];
    if (core.size) lines.push(`import { ${[...core].sort().join(', ')} } from '@nativescript/core';`);
    for (const [from, names] of [...local].sort()) {
        lines.push(`import { ${[...names].sort().join(', ')} } from '${from}';`);
    }
    return lines;
}

const simpleName = (nativeType) => nativeType.split('.').pop();

/**
 * The listeners a class hands out: `setXEventListener(<an SDK listener class>)`.
 *
 * These cannot be forwarded like any other setter. The SDK listener is an abstract
 * native class, so both platforms need a subclass - `com.nativescript.massifmaps.additions.X`
 * on android, `NSMSFX` on iOS - and the JS side hands the caller a plain object instead
 * of a native instance. That glue is the same shape every time, which is why it can be
 * scaffolded; only the marshalling of each callback's arguments is left to the author.
 */
function listenersOf(cls, model) {
    const byName = new Map(cls.methods.map((m) => [m.name, m]));
    const out = [];
    for (const m of cls.methods) {
        if (!m.name.startsWith('set') || m.arity !== 1) continue;
        const native = m.params[0];
        const name = simpleName(native);
        if (!name.endsWith('Listener')) continue;
        const listener = model.get(name);
        // a listener is all callbacks: if anything here is a getter, this is a different animal
        if (!listener || !listener.methods.length || !listener.methods.every((c) => c.name.startsWith('on'))) continue;

        const getter = `get${m.name.slice(3)}`;
        out.push({
            name,
            native,
            pkg: listener.pkg,
            setter: m.name,
            getter: byName.has(getter) ? getter : null,
            /** the accessor `bindNative` would otherwise synthesise from the get/set pair */
            accessor: byName.has(getter) ? uncapitalize(m.name.slice(3)) : null,
            callbacks: listener.methods.map((c) => ({
                name: c.name,
                params: c.params,
                returns: c.returns
            }))
        });
    }
    return out;
}

/** does `com.nativescript.massifmaps.additions.<name>` exist, with its inner Listener interface? */
function androidAddition(name) {
    const src = readIfPresent('ns.massifmaps.android.d.ts');
    return new RegExp(`export class ${name} extends com\\.massifmaps\\.`).test(src);
}

/**
 * The iOS subclass and the names it overrides. The swift additions rename each callback
 * `<name>Threaded`, so the override cannot be guessed from the SDK method alone.
 */
function iosAddition(name) {
    const src = readIfPresent('ns.massifmaps.ios.d.ts');
    const body = grab(src, new RegExp(`declare class NSMSF${name} extends MSF${name}[^{]*\\{`));
    if (!body) return null;
    return { overrides: new Set([...body.matchAll(/\n\s*(\w+)\s*\(/g)].map((m) => m[1])) };
}

const TODO_MARSHAL = 'TODO marshal the native arguments into the shape the listener interface declares';

/** the plain TS interface a caller implements, as it belongs in the `.d.ts` */
function listenerInterface(listener) {
    const lines = [`/** what a caller implements to hear about ${listener.name.replace(/EventListener$|Listener$/, '').toLowerCase()} events */`];
    lines.push(`export interface ${listener.name} {`);
    for (const cb of listener.callbacks) {
        const args = cb.params.map((t, i) => `arg${i}: ${tsType(t)}`).join(', ');
        const note = cb.params.filter((t) => tsType(t) === 'any').map(simpleName);
        lines.push(`    /** TODO name the arguments${note.length ? ` - natively ${note.join(', ')}` : ''} */`);
        lines.push(`    ${cb.name}(${args}): ${tsType(cb.returns)};`);
    }
    lines.push('}');
    return lines;
}

/** android: an additions subclass fed a JS object; iOS: an NSMSF subclass overriding *Threaded */
function listenerGlue(listener, platform, clsName) {
    const isAndroid = platform === 'android';
    const iface = `I${listener.name}`;
    const field = `m${listener.name}`;
    const nField = `n${listener.name}`;
    const lines = [];

    if (isAndroid) {
        const additions = `com.nativescript.massifmaps.additions.${listener.name}`;
        if (!androidAddition(listener.name)) {
            lines.push(`    // TODO ${additions} does not exist yet: copy`);
            lines.push('    // platforms/android/java/com/nativescript/massifmaps/additions/RasterTileEventListener.java,');
            lines.push('    // rename it, and rebuild the demo so the additions typings pick it up.');
        }
        lines.push(`    ${field}?: ${iface};`);
        lines.push(`    ${nField}?: ${additions};`);
        lines.push(`    ${listener.setter}(listener: ${iface}) {`);
        lines.push(`        this.${field} = listener;`);
        lines.push('        if (listener) {');
        lines.push(`            if (!this.${nField}) {`);
        lines.push(`                this.${nField} = new ${additions}(`);
        lines.push(`                    new ${additions}.Listener({`);
        lines.push(listener.callbacks.map((c) => `                        ${c.name}: this.${c.name}.bind(this)`).join(',\n'));
        lines.push('                    })');
        lines.push('                );');
        lines.push('            }');
        lines.push(`            this.getNative().${listener.setter}(this.${nField});`);
        lines.push('        } else {');
        lines.push(`            this.${nField} = null;`);
        lines.push(`            this.getNative().${listener.setter}(null);`);
        lines.push('        }');
        lines.push('    }');
        for (const cb of listener.callbacks) {
            const args = cb.params.map((t, i) => `arg${i}: ${t}`).join(', ');
            lines.push(`    ${cb.name}(${args}) {`);
            lines.push(`        if (!this.${field}?.${cb.name}) {`);
            lines.push(`            return ${cb.returns === 'boolean' ? 'false' : 'undefined'};`);
            lines.push('        }');
            lines.push(`        // ${TODO_MARSHAL}`);
            lines.push(`        return this.${field}.${cb.name}.call(this.${field}${cb.params.map((_, i) => `, arg${i} as any`).join('')})${cb.returns === 'boolean' ? ' || false' : ''};`);
            lines.push('    }');
        }
        return lines;
    }

    // iOS: the delegate is a class of its own, so the wrapper only builds and installs it
    lines.push(`    ${field}?: ${iface};`);
    lines.push(`    ${nField}?: MSF${listener.name};`);
    lines.push(`    ${listener.setter}(listener: ${iface}) {`);
    lines.push(`        this.${field} = listener;`);
    lines.push(`        this.${nField} = listener ? MSF${listener.name}Impl.initWithOwner(new WeakRef(listener), new WeakRef(this as any as ${clsName})) : null;`);
    lines.push(`        this.getNative().${listener.setter}(this.${nField});`);
    lines.push('    }');
    return lines;
}

/** the iOS delegate class, emitted above the wrapper it belongs to */
function iosDelegate(listener, clsName) {
    const iface = `I${listener.name}`;
    const additions = iosAddition(listener.name);
    const lines = [];
    if (!additions) {
        lines.push(`// TODO NSMSF${listener.name} does not exist yet: copy`);
        lines.push('// platforms/ios/src/NSMSFRasterTileEventListener.swift, rename it, and run');
        lines.push('// `npm run typings.ios` so the additions typings pick it up.');
    }
    lines.push(`export class MSF${listener.name}Impl extends NSMSF${listener.name} {`);
    lines.push(`    private _owner: WeakRef<${iface}>;`);
    lines.push(`    private _wrapper: WeakRef<${clsName}>;`);
    lines.push(`    public static initWithOwner(owner: WeakRef<${iface}>, wrapper: WeakRef<${clsName}>): MSF${listener.name}Impl {`);
    lines.push(`        const delegate = MSF${listener.name}Impl.new() as MSF${listener.name}Impl;`);
    lines.push('        delegate._owner = owner;');
    lines.push('        delegate._wrapper = wrapper;');
    lines.push('        return delegate;');
    lines.push('    }');
    for (const cb of listener.callbacks) {
        // the swift additions rename every callback; fall back to the convention when the
        // class is not there yet to say otherwise
        const override = additions ? ([...additions.overrides].find((o) => o.startsWith(cb.name)) ?? `${cb.name}Threaded`) : `${cb.name}Threaded`;
        const args = cb.params.map((t, i) => `arg${i}: MSF${simpleName(t)}`).join(', ');
        lines.push(`    public ${override}(${args}) {`);
        lines.push('        const owner = this._owner?.get();');
        lines.push(`        if (!owner?.${cb.name}) {`);
        lines.push(`            return ${cb.returns === 'boolean' ? 'false' : 'undefined'};`);
        lines.push('        }');
        lines.push(`        // ${TODO_MARSHAL}`);
        lines.push(`        return owner.${cb.name}(${cb.params.map((_, i) => `arg${i} as any`).join(', ')})${cb.returns === 'boolean' ? ' || false' : ''};`);
        lines.push('    }');
    }
    lines.push('}');
    return lines;
}

/**
 * The SDK ancestors that carry members of their own, most specific first.
 *
 * A binding table only lists what its own SDK class declares, and a scaffolded wrapper
 * extends `BaseNative` rather than a plugin ancestor, so without these every inherited
 * member - `position`, `color`, `visible` on a celestial object - is missing at runtime
 * AND at compile time. `--migrate` attaches the same set to classes already in src/.
 */
function ancestorTables(cls, model) {
    return sdkChain(cls.name, model)
        .slice(1)
        .filter((a) => existsSync(path.join(BINDINGS_DIR, ...a.pkg.split('.'), `${a.name}.ts`)));
}

/**
 * The declaration leg. The platform files are what runs; this is what everyone importing
 * the plugin actually sees, and leaving it out is why a scaffolded class ends up with no
 * `XOptions` type at all.
 */
export function scaffoldDts(cls, listeners, ancestors = []) {
    const opts = `${cls.name}Options`;
    const parent = cls.extends && !cls.extends.startsWith('java.') ? simpleName(cls.extends) : null;
    const hidden = listeners.flatMap((l) => [l.setter, l.getter].filter(Boolean));

    const lines = [
        '// SCAFFOLD - generated starting point, review before use.',
        `// com.massifmaps.${cls.pkg}.${cls.name} / MSF${cls.name}`,
        '',
        `import { BaseNative } from '../BaseNative';`,
        `import { Accessors, Methods } from '${bindingImportPath(cls.pkg)}/${cls.name}';`,
        ...ancestors.map((a) => `import { Accessors as Acc_${a.name}, Methods as Met_${a.name} } from '${bindingImportPath(a.pkg)}/${a.name}';`),
        ...typeImports(
            cls.pkg,
            listeners.flatMap((l) => l.callbacks.flatMap((c) => [...c.params, c.returns]))
        ),
        ''
    ];

    lines.push(parent ? `/** TODO extend ${parent}Options - the wrapper for ${cls.extends} - once you know it exists */` : '/** TODO whatever createNative() needs to build the native instance */');
    lines.push(`export interface ${opts} {}`);
    lines.push('');

    for (const l of listeners) {
        lines.push(...listenerInterface(l));
        lines.push('');
    }

    lines.push('/** the generated forwarders, so they are visible to TypeScript */');
    lines.push(
        hidden.length ? `export interface ${cls.name} extends Accessors, Omit<Methods, ${hidden.map((h) => `'${h}'`).join(' | ')}> {}` : `export interface ${cls.name} extends Accessors, Methods {}`
    );
    lines.push(`export class ${cls.name} extends BaseNative<any, ${opts}> {`);
    for (const l of listeners) {
        lines.push(`    ${l.setter}(listener: ${l.name}): void;`);
    }
    lines.push('}');
    for (const a of ancestors) {
        lines.push(`export interface ${cls.name} extends Acc_${a.name}, Met_${a.name} {}`);
    }
    return lines.join('\n') + '\n';
}

export function scaffoldClass(cls, platform, listeners = [], ancestors = []) {
    const isAndroid = platform === 'android';
    const native = isAndroid ? `com.massifmaps.${cls.pkg}.${cls.name}` : `MSF${cls.name}`;
    const props = accessors(cls.methods);
    const converters = props.map((p) => [p.key, inferConverter(p.nativeType)]).filter(([, i]) => i.converter);

    const ctors = constructorsFor(cls.name)[platform];
    const opts = `${cls.name}Options`;
    const isCallback = cls.methods.length > 0 && cls.methods.every((m) => m.name.startsWith('on'));

    const lines = ['// SCAFFOLD - generated starting point, review before use.', `// ${native}`];
    if (isCallback) {
        lines.push('//');
        lines.push('// Every member is a callback, so this is an interface the SDK calls back INTO, not');
        lines.push('// something to construct. It is normally not wrapped at all: the class that takes it');
        lines.push('// declares a plain TS interface and installs the native subclass itself - see the');
        lines.push("// listener glue in that class's scaffold.");
    }
    lines.push('');
    lines.push(`import { BaseNative } from '../BaseNative';`);
    lines.push(`import { bindNative } from '../nativeclass.common';`);
    lines.push(`import { ACCESSORS, Accessors, METHODS, SELECTORS } from '${bindingImportPath(cls.pkg)}/${cls.name}';`);
    for (const a of ancestors) {
        lines.push(
            `import { ACCESSORS as ACC_${a.name}, Accessors as Acc_${a.name}, METHODS as MET_${a.name}, Methods as Met_${a.name}, SELECTORS as SEL_${a.name} } from '${bindingImportPath(a.pkg)}/${a.name}';`
        );
    }
    // the declaration leg is written beside this file as `<name>.d.ts`, so it is always
    // where XOptions and the listener interfaces live
    const fromDts = [opts, ...listeners.map((l) => `${l.name} as I${l.name}`)];
    lines.push(`import { ${fromDts.join(', ')} } from './${cls.name}';`);
    const ancestorConverters = ancestors.map((a) => [a, convertersOf(a.name, a.pkg)]);
    const converterNames = [...new Set([...converters.map(([, i]) => i.converter), ...ancestorConverters.flatMap(([, c]) => c.map(([, name]) => name))])].sort();
    if (converterNames.length) {
        lines.push(`import { ${converterNames.join(', ')} } from '..';`);
    }
    lines.push('');

    if (!isAndroid) {
        for (const l of listeners) {
            lines.push(...iosDelegate(l, cls.name));
            lines.push('');
        }
    }

    lines.push('/** the generated accessors, so they are visible to TypeScript */');
    lines.push(`export interface ${cls.name} extends Accessors {}`);
    lines.push('');
    lines.push(`export class ${cls.name} extends BaseNative<${native}, ${opts}> {`);
    if (ctors.length) {
        lines.push('    // available native constructors:');
        for (const c of ctors.slice(0, 6)) {
            lines.push(`    //   ${c}`);
        }
    }
    lines.push(`    createNative(options: ${opts}) {`);
    lines.push(`        return ${isAndroid ? `new ${native}()` : `${native}.alloc().init()`}; // TODO pick the right overload`);
    lines.push('    }');
    for (const l of listeners) {
        lines.push('');
        lines.push(...listenerGlue(l, platform, cls.name));
    }
    lines.push('}');
    lines.push('');

    const bind = ['selectors: SELECTORS'];
    if (converters.length) {
        bind.push(`converters: { ${converters.map(([k, i]) => `${k}: ${i.converter}`).join(', ')} }`);
    }
    // the get/set pair would otherwise become a plain accessor that hands the native
    // setter an unwrapped JS object, quietly bypassing the glue above
    const exclude = listeners.flatMap((l) => [l.accessor, l.setter, l.getter].filter(Boolean));
    if (exclude.length) {
        bind.push(`exclude: [${exclude.map((e) => `'${e}'`).join(', ')}]`);
    }
    lines.push(`bindNative(${cls.name}, METHODS, ACCESSORS, { ${bind.join(', ')} });`);
    // the ancestors' tables, the way --migrate would attach them: a scaffolded class
    // extends BaseNative, so nothing else installs what the SDK parent declares
    for (const [a, conv] of ancestorConverters) {
        const opts = [`selectors: SEL_${a.name}`];
        if (conv.length) opts.push(`converters: { ${conv.map(([k, c]) => `${k}: ${c}`).join(', ')} }`);
        lines.push('');
        lines.push(`export interface ${cls.name} extends Acc_${a.name}, Met_${a.name} {}`);
        lines.push(`bindNative(${cls.name}, MET_${a.name}, ACC_${a.name}, { ${opts.join(', ')} });`);
    }
    return lines.join('\n') + '\n';
}

export function scaffold(names) {
    const { model } = buildModel();
    const wanted = names?.length ? names : [...model.keys()];
    const out = [];
    for (const n of wanted) {
        const cls = model.get(n);
        if (!cls) {
            out.push({ name: n, error: 'not in the model - is it android-only?' });
            continue;
        }
        const listeners = listenersOf(cls, model);
        const ancestors = ancestorTables(cls, model);
        out.push({
            name: n,
            pkg: cls.pkg,
            listeners: listeners.map((l) => ({
                name: l.name,
                // the java/ObjC halves, unless the plugin already ships them
                shipped: { android: androidAddition(l.name), ios: !!iosAddition(l.name) },
                files: nativeListener(l, { android: androidAddition(l.name), ios: !!iosAddition(l.name) })
            })),
            dts: scaffoldDts(cls, listeners, ancestors),
            android: scaffoldClass(cls, 'android', listeners, ancestors),
            ios: scaffoldClass(cls, 'ios', listeners, ancestors)
        });
    }
    return out;
}
