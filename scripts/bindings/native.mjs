import { existsSync, readFileSync, readdirSync } from 'node:fs';
import * as path from 'node:path';
import { PACKAGE_DIR, TYPINGS_DIR } from '../typings/config.mjs';

/**
 * The java and ObjC halves of a listener.
 *
 * The TypeScript scaffold assumes `com.nativescript.massifmaps.additions.X` and `NSMSFX`
 * exist, because every listener the plugin already exposes has them. They are there for
 * one reason: the SDK calls back on a worker thread, and a JS callback has to run on the
 * main one. That marshalling is identical in every listener - the only thing that varies
 * is the callbacks' signatures - so the whole file can be written out.
 *
 * The signatures come from different places per platform. Java takes them from the
 * android typings, which is what the model already parsed. ObjC needs the real selector,
 * labels included, and that only exists in the framework header - `onElementModify` is
 * `onElementModify:geometry:`, and an override that misses a label silently never fires.
 */

const SCAFFOLD_NOTE = 'SCAFFOLD - generated starting point, review before use.';

const iosTypings = () => readFileSync(path.join(TYPINGS_DIR, 'massifmaps.ios.d.ts'), 'utf8');

/** the SDK's own ObjC header for a class, out of whichever xcframework slice has it */
function sdkHeader(name) {
    const base = path.join(PACKAGE_DIR, 'platforms', 'ios', 'MassifMaps.xcframework');
    if (!existsSync(base)) return '';
    for (const slice of readdirSync(base)) {
        const file = path.join(base, slice, 'Headers', 'MassifMaps', `MSF${name}.h`);
        if (existsSync(file)) return readFileSync(file, 'utf8');
    }
    return '';
}

/**
 * `-(BOOL)onCelestialObjectClicked: (MSFClickInfo*)clickInfo celestialObject: (MSFCelestialObject*)obj;`
 * becomes `{ returns: 'BOOL', parts: [{label, type, param}, ...] }`. A zero-argument
 * callback has one part carrying only the label.
 */
function objcMethods(header) {
    const out = new Map();
    for (const m of header.matchAll(/^-\(([^)]+)\)\s*([^;]+);/gm)) {
        const returns = m[1].trim();
        const rest = m[2].trim();
        const parts = [...rest.matchAll(/(\w+)\s*:\s*\(([^)]+)\)\s*(\w+)/g)].map((p) => ({
            label: p[1],
            type: p[2].trim(),
            param: p[3]
        }));
        const name = parts.length ? parts[0].label : rest;
        if (!/^on[A-Z]/.test(name) || /SwigExplicit/.test(name)) continue;
        // SWIG declares the plain selector and a SwigExplicit twin; keep the first, plain one
        if (!out.has(name)) out.set(name, { name, returns, parts });
    }
    return out;
}

/** ObjC spells a pointer `MSFClickInfo *clickInfo` and a value type `MSFVectorElementDragResult x` */
const objcParam = (p) => (p.type.endsWith('*') ? `(${p.type.slice(0, -1).trim()} *)${p.param}` : `(${p.type.replace(/^enum\s+/, '')})${p.param}`);

/** the same spacing on the return type, so the file reads like the hand-written ones */
const objcReturn = (t) => (t.endsWith('*') ? `${t.slice(0, -1).trim()} *` : t);

const objcSelector = (method, suffix = '') => {
    if (!method.parts.length) return method.name + suffix;
    return method.parts.map((p, i) => `${i === 0 ? p.label + suffix : p.label}:${objcParam(p)}`).join(' ');
};

/** what a `Threaded` stub returns before the author fills it in */
function objcDefault(returns) {
    const t = returns.replace(/^enum\s+/, '').trim();
    if (t === 'void') return null;
    if (t === 'BOOL') return 'NO';
    if (t.endsWith('*')) return 'nil';
    if (/^(int|long|long long|float|double|NSInteger|NSUInteger|CGFloat)$/.test(t)) return '0';
    // a SWIG enum: the typings carry its members with the MSF prefix stripped
    const body = iosTypings().match(new RegExp(`declare const enum ${t}\\s*\\{([^}]*)\\}`));
    const first = body?.[1].match(/(F_\w+)\s*=/)?.[1];
    return first ? `MS${first}` : `/* TODO a ${t} */ 0`;
}

export function objcHeader(listener) {
    const methods = objcMethods(sdkHeader(listener.name));
    const cls = `NSMSF${listener.name}`;
    const lines = [`// ${SCAFFOLD_NOTE}`, '', '#import <MassifMaps/MassifMaps.h>', '', `@interface ${cls} : MSF${listener.name}`, '', '@property (nonatomic, assign) BOOL runOnMainThread;', ''];
    if (!methods.size) {
        lines.push(`// TODO MSF${listener.name}.h was not found in the xcframework - declare the`);
        lines.push('// callbacks by hand, one `<name>Threaded` per SDK callback.');
    }
    for (const m of methods.values()) {
        lines.push(`- (${objcReturn(m.returns)})${objcSelector(m, 'Threaded')};`);
    }
    lines.push('', '@end', '');
    return lines.join('\n');
}

export function objcImpl(listener) {
    const methods = objcMethods(sdkHeader(listener.name));
    const cls = `NSMSF${listener.name}`;
    const lines = [
        `// ${SCAFFOLD_NOTE}`,
        '',
        `#import "${cls}.h"`,
        '',
        `@implementation ${cls}`,
        '@synthesize runOnMainThread;',
        '',
        '-(id)init {',
        '    if (self = [super init]) {',
        '        self.runOnMainThread = true;',
        '    }',
        '    return self;',
        '}',
        ''
    ];

    // the stubs the JS delegate overrides; they are what runs when nothing does
    for (const m of methods.values()) {
        const def = objcDefault(m.returns);
        lines.push(`- (${objcReturn(m.returns)})${objcSelector(m, 'Threaded')} {`);
        if (def) lines.push(`    return ${def};`);
        lines.push('}');
        lines.push('');
    }

    // the real override: hop to the main thread, then call the stub
    for (const m of methods.values()) {
        const def = objcDefault(m.returns);
        const args = m.parts.length ? m.parts.map((p, i) => `${i === 0 ? p.label + 'Threaded' : p.label}:${p.param}`).join(' ') : `${m.name}Threaded`;
        lines.push(`- (${objcReturn(m.returns)})${objcSelector(m)} {`);
        lines.push('    if (self.runOnMainThread) {');
        if (def) {
            lines.push(`        __block ${m.returns.replace(/^enum\s+/, '')} result = ${def};`);
            lines.push('        dispatch_sync(dispatch_get_main_queue(), ^{');
            lines.push(`            result = [self ${args}];`);
            lines.push('        });');
            lines.push('        return result;');
            lines.push('    } else {');
            lines.push(`        return [self ${args}];`);
        } else {
            lines.push('        dispatch_sync(dispatch_get_main_queue(), ^{');
            lines.push(`            [self ${args}];`);
            lines.push('        });');
            lines.push('    } else {');
            lines.push(`        [self ${args}];`);
        }
        lines.push('    }');
        lines.push('}');
        lines.push('');
    }
    lines.push('@end', '');
    return lines.join('\n');
}

/** `com.massifmaps.ui.ClickInfo` -> `ClickInfo`, plus the import that makes it resolve */
const javaSimple = (t) => (t.includes('.') ? t.split('.').pop() : t);

/** the java default a callback returns when no JS listener is attached */
function javaDefault(returns) {
    if (returns === 'void') return null;
    if (returns === 'boolean') return 'false';
    if (returns === 'number') return '0';
    return 'null';
}

/** `number` is whatever the SDK's java signature actually says, which the typings lost */
const javaType = (t) => (t === 'number' ? 'double /* TODO int/float/double - check the SDK javadoc */' : javaSimple(t));

export function javaListener(listener) {
    const cls = listener.name;
    const imports = new Set();
    for (const cb of listener.callbacks) {
        for (const t of [...cb.params, cb.returns]) {
            if (t.includes('.')) imports.add(t);
        }
    }

    const lines = [`// ${SCAFFOLD_NOTE}`, 'package com.nativescript.massifmaps.additions;', '', 'import android.os.Handler;', ''];
    for (const i of [...imports].sort()) lines.push(`import ${i};`);
    if (imports.size) lines.push('');
    lines.push(`public class ${cls} extends ${listener.native} {`);
    lines.push('    Handler mainHandler = null;');
    lines.push('');
    lines.push('    public interface Listener {');
    for (const cb of listener.callbacks) {
        const args = cb.params.map((t, i) => `final ${javaType(t)} arg${i}`).join(', ');
        lines.push(`        ${javaType(cb.returns)} ${cb.name}(${args});`);
    }
    lines.push('    }');
    lines.push('');
    lines.push('    protected Listener listener = null;');
    lines.push('');
    lines.push('    public void setListener(Listener listener) {');
    lines.push('        this.listener = listener;');
    lines.push('    }');
    lines.push('');
    lines.push(`    public ${cls}(Listener listener) {`);
    lines.push('        super();');
    lines.push('        setListener(listener);');
    lines.push('    }');

    for (const cb of listener.callbacks) {
        const def = javaDefault(cb.returns);
        const decl = cb.params.map((t, i) => `final ${javaType(t)} arg${i}`).join(', ');
        const call = cb.params.map((_, i) => `arg${i}`).join(', ');
        lines.push('');
        lines.push('    @Override');
        lines.push(`    public ${javaType(cb.returns)} ${cb.name}(${decl}) {`);
        lines.push('        if (MapView.RUN_ON_MAIN_THREAD) {');
        lines.push('            if (mainHandler == null) {');
        lines.push('                mainHandler = new Handler(android.os.Looper.getMainLooper());');
        lines.push('            }');
        if (def) {
            lines.push('            final Object[] arr = new Object[1];');
            lines.push('            SynchronousHandler.postAndWait(mainHandler, new Runnable() {');
            lines.push('                @Override');
            lines.push('                public void run() {');
            lines.push('                    if (listener != null) {');
            lines.push(`                        arr[0] = listener.${cb.name}(${call});`);
            lines.push('                    } else {');
            lines.push(`                        arr[0] = ${cls}.super.${cb.name}(${call});`);
            lines.push('                    }');
            lines.push('                }');
            lines.push('            });');
            lines.push(`            return arr[0] != null ? (${javaBox(cb.returns)}) arr[0] : ${def};`);
        } else {
            lines.push('            SynchronousHandler.postAndWait(mainHandler, new Runnable() {');
            lines.push('                @Override');
            lines.push('                public void run() {');
            lines.push('                    if (listener != null) {');
            lines.push(`                        listener.${cb.name}(${call});`);
            lines.push('                    } else {');
            lines.push(`                        ${cls}.super.${cb.name}(${call});`);
            lines.push('                    }');
            lines.push('                }');
            lines.push('            });');
        }
        lines.push('        } else {');
        lines.push('            if (listener != null) {');
        lines.push(`                ${def ? 'return ' : ''}listener.${cb.name}(${call});`);
        lines.push('            } else {');
        lines.push(`                ${def ? 'return ' : ''}super.${cb.name}(${call});`);
        lines.push('            }');
        lines.push('        }');
        lines.push('    }');
    }
    lines.push('}');
    return lines.join('\n') + '\n';
}

/** the cast that unboxes what the Runnable stashed in `arr[0]` */
function javaBox(returns) {
    if (returns === 'boolean') return 'Boolean';
    if (returns === 'number') return 'Double';
    return javaSimple(returns);
}

/**
 * Both native halves of one listener, as files relative to the scaffold root. `exists`
 * says the plugin already ships it, so it can be reported and skipped rather than
 * overwriting something hand-tuned.
 */
export function nativeListener(listener, { android, ios }) {
    const files = [];
    if (!android) {
        files.push({
            path: path.join('platforms', 'android', 'java', 'com', 'nativescript', 'massifmaps', 'additions', `${listener.name}.java`),
            source: javaListener(listener)
        });
    }
    if (!ios) {
        files.push({ path: path.join('platforms', 'ios', 'src', `NSMSF${listener.name}.h`), source: objcHeader(listener) });
        files.push({ path: path.join('platforms', 'ios', 'src', `NSMSF${listener.name}.mm`), source: objcImpl(listener) });
    }
    return files;
}
