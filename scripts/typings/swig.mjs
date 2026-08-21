/**
 * Strip SWIG plumbing out of generated NativeScript typings.
 *
 * What counts as plumbing, and what deliberately does NOT:
 *   - dropped: *ModuleJNI classes, SWIGTYPE_p_* opaque pointer classes and every
 *     member that mentions one, getCPtr/swigGetRawPtr/swigGetDirectorObject/
 *     swigGetClassName/swigCreatePolymorphicInstance, delete()/finalize(),
 *     the `constructor(cPtr, cMemoryOwn)` pointer constructor, and on iOS the
 *     *SwigExplicit* director variants plus initWithCptrSwigOwnCObject.
 *   - KEPT on purpose: `alloc()` / `new()` / `initWith*` on iOS are the real ObjC
 *     constructors and every createNative() uses them.
 *   - KEPT on purpose: `swigValue()` / `swigToEnum()` on android. They look like
 *     plumbing but they are the only way to convert SWIG enums, and the plugin
 *     calls them (see nativeAndroidEnumProperty).
 *   - KEPT on purpose: `hashInternal()` / `isEqualInternal()` on iOS - the only
 *     equality bridge SWIG exposes, used by core/index.ios.ts.
 *
 * `strict: true` drops those last two groups as well. Expect compile errors until
 * the call sites are rewritten.
 */

const ANDROID_CLASS_DROP = [/ModuleJNI$/, /^SWIGTYPE_p_/, /^SwigNext$/];
const IOS_CLASS_DROP = [/^SWIGTYPE_p_/];

const ANDROID_MEMBER_DROP = [
    /\bstatic getCPtr\s*\(/,
    /\bswigGetRawPtr\s*\(/,
    /\bswigGetDirectorObject\s*\(/,
    /\bswigGetClassName\s*\(/,
    /\bswigCreatePolymorphicInstance\s*\(/,
    /\bswigReleaseOwnership\s*\(/,
    /\bswigTakeOwnership\s*\(/,
    /\bdelete\s*\(\s*\)\s*:/,
    /\bfinalize\s*\(\s*\)\s*:/,
    /\bconstructor\s*\(\s*cPtr\s*:\s*number\s*,\s*cMemoryOwn\s*:\s*boolean\s*\)/
];
const ANDROID_MEMBER_DROP_STRICT = [/\bswigValue\s*\(/, /\bswigToEnum\s*\(/];

const IOS_MEMBER_DROP = [/SwigExplicit/, /\binitWithCptrSwigOwnCObject\b/, /\bswigGetRawPtr\b/, /\bgetCptr\b/];
// `hashInternal` / `isEqualInternal` look like plumbing but they are the only equality
// bridge SWIG exposes on iOS, and the plugin calls isEqualInternal (core/index.ios.ts).
const IOS_MEMBER_DROP_STRICT = [/\bhashInternal\b/, /\bisEqualInternal\b/];

const CONTAINER = /^\s*(?:declare\s+)?(?:export\s+)?(?:module|namespace)\s/;
const CLASS_LINE = /^\s*(?:declare\s+)?(?:export\s+)?(?:abstract\s+)?class\s+([A-Za-z0-9_$]+)/;
/** a line ending in `{` only opens a real block if it declares one */
const DECL_OPEN = /\b(?:namespace|module|class|interface|enum)\s+[A-Za-z0-9_$]/;

function indentOf(line) {
    return line.match(/^\s*/)[0];
}

function braceDelta(text) {
    return (text.match(/\{/g) || []).length - (text.match(/\}/g) || []).length;
}

/**
 * dts-generator wraps inline interface implementations across several lines:
 *
 *   public constructor(implementation: {
 *       loadAsset(param0: string): com.massifmaps.core.BinaryData;
 *   });
 *
 * That opening `{` is not a block, so fold these back into one logical line
 * before doing anything brace-aware.
 */
function joinContinuations(lines) {
    const out = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const t = line.trim();
        if (!t.endsWith('{') || DECL_OPEN.test(t)) {
            out.push(line);
            continue;
        }
        let depth = braceDelta(t);
        const parts = [t];
        while (depth > 0 && ++i < lines.length) {
            const nt = lines[i].trim();
            depth += braceDelta(nt);
            parts.push(nt);
        }
        out.push(indentOf(line) + parts.join(' '));
    }
    return out;
}

function buildTree(lines) {
    const root = { children: [] };
    const stack = [root];
    for (const raw of lines) {
        const t = raw.trim();
        if (t === '}' || t === '};') {
            if (stack.length > 1) {
                stack.pop();
            }
            continue;
        }
        if (t.endsWith('{')) {
            const node = { header: raw, children: [] };
            stack[stack.length - 1].children.push(node);
            stack.push(node);
            continue;
        }
        stack[stack.length - 1].children.push({ line: raw });
    }
    return root;
}

function collectSwigTypes(text, classDrop) {
    const names = new Set();
    const re = /(?:declare\s+|export\s+)?class\s+([A-Za-z0-9_$]+)/g;
    let m;
    while ((m = re.exec(text))) {
        if (classDrop.some((p) => p.test(m[1]))) {
            names.add(m[1]);
        }
    }
    return names;
}

function render(node, out, opts, stats) {
    const kept = [];
    for (const child of node.children) {
        if (child.line !== undefined) {
            const t = child.line.trim();
            if (!t) {
                kept.push(child);
                continue;
            }
            if (opts.memberDrop.some((p) => p.test(t))) {
                stats.members++;
                continue;
            }
            if (opts.swigTypes.size && [...opts.swigTypes].some((n) => t.includes(n))) {
                stats.swigTypeRefs++;
                continue;
            }
            kept.push(child);
            continue;
        }

        const header = child.header.trim();
        const cls = header.match(CLASS_LINE);
        if (cls && opts.classDrop.some((p) => p.test(cls[1]))) {
            stats.classes++;
            continue;
        }

        const sub = [];
        render(child, sub, opts, stats);
        const hasContent = sub.some((l) => l.trim());
        // an emptied namespace/module wrapper is noise; an emptied class is still
        // a real (if useless) declaration, so keep it rather than break `extends`
        if (!hasContent && CONTAINER.test(child.header)) {
            stats.emptyContainers++;
            continue;
        }
        kept.push({ header: child.header, body: sub });
    }

    let lastBlank = false;
    for (const child of kept) {
        if (child.line !== undefined) {
            const blank = !child.line.trim();
            if (blank && lastBlank) {
                continue;
            }
            lastBlank = blank;
            out.push(child.line);
            continue;
        }
        lastBlank = false;
        out.push(child.header);
        out.push(...child.body);
        out.push(`${indentOf(child.header)}}`);
    }
    while (out.length && !out[out.length - 1].trim()) {
        out.pop();
    }
}

export function stripSwig(source, platform, { strict = false } = {}) {
    const isAndroid = platform === 'android';
    const classDrop = isAndroid ? ANDROID_CLASS_DROP : IOS_CLASS_DROP;
    const memberDrop = isAndroid
        ? [...ANDROID_MEMBER_DROP, ...(strict ? ANDROID_MEMBER_DROP_STRICT : [])]
        : [...IOS_MEMBER_DROP, ...(strict ? IOS_MEMBER_DROP_STRICT : [])];

    const swigTypes = collectSwigTypes(source, [/^SWIGTYPE_p_/]);
    const stats = { classes: 0, members: 0, swigTypeRefs: 0, emptyContainers: 0 };

    // drop the `/// <reference .../>` line; our typings are wired up via references.d.ts
    const lines = source
        .split('\n')
        .filter((l) => !l.startsWith('/// <reference'))
        .map((l) => l.replace(/\t/g, '    '));

    const tree = buildTree(joinContinuations(lines));
    const out = [];
    render(tree, out, { classDrop, memberDrop, swigTypes }, stats);

    return { text: out.join('\n'), stats };
}

const TOP_LEVEL_DECL = /^(?:declare\s+)?(?:abstract\s+)?(?:class|interface|const enum|enum|var|let|const|function|type|namespace|module)\s+([A-Za-z0-9_$]+)/;

/**
 * Split a flat iOS .d.ts into its top-level declarations, keyed by declared name.
 * A name can appear more than once (`interface X` + `declare var X: {...}` is how
 * the metadata generator models a Swift protocol), so values are arrays.
 */
export function topLevelBlocks(text) {
    const lines = text.split('\n');
    const blocks = [];
    let i = 0;
    while (i < lines.length) {
        const m = lines[i].match(TOP_LEVEL_DECL);
        if (!m) {
            i++;
            continue;
        }
        const start = i;
        let depth = 0;
        do {
            depth += braceDelta(lines[i]);
            i++;
        } while (i < lines.length && depth > 0);
        blocks.push({ name: m[1], lines: lines.slice(start, i) });
    }
    return blocks;
}

// prettier-ignore
const RESERVED = [
    'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete',
    'do', 'else', 'enum', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if',
    'import', 'in', 'instanceof', 'new', 'null', 'return', 'super', 'switch', 'this', 'throw',
    'true', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
];

/**
 * The iOS metadata generator happily emits ObjC selector parts as parameter names,
 * including reserved words - `initWithVar(var: MSFVariant)`. That is not valid
 * TypeScript. dts-generator already does this for android ("Appending _ to reserved
 * JS keyword"); we have to do it ourselves for iOS.
 *
 * Only parameter positions are touched. `constructor(o: { var: X })` is a type-literal
 * property name, which is legal, and is left alone.
 */
export function fixReservedParams(text) {
    const re = new RegExp(`([(,]\\s*)(${RESERVED.join('|')})(\\s*[:?])`, 'g');
    let out = text;
    let prev;
    do {
        prev = out;
        out = out.replace(re, '$1$2_$3');
    } while (out !== prev);
    return out;
}

/** `export module X {` is deprecated syntax; dts-generator still emits it. */
export function modulesToNamespaces(text) {
    return text.replace(/^(\s*(?:declare|export)\s+)module(\s+[A-Za-z0-9_$]+\s*\{)/gm, '$1namespace$2');
}
