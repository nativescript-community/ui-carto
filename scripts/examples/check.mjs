#!/usr/bin/env node
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Typechecks the example gallery's Svelte scripts, without a Svelte compiler.
 *
 * A `<script lang="ts">` block is ordinary TypeScript, so it is written out as a `.ts` and run
 * through tsc against the real plugin typings. That catches the whole of what these files are -
 * spec keys, property paths, camera calls, event payloads - which is exactly the thing this API
 * exists to check and the one thing a demo app cannot verify until it is on a device.
 *
 * `.svelte` imports resolve to `any` through a shim, so the component wiring is NOT checked. The
 * host contract lives in `host.ts` for that reason.
 */

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const EXAMPLES = path.join(ROOT, 'demo-snippets', 'svelte', 'examples');
const OUT = path.join(ROOT, 'scripts', 'examples', '.check');

const SCRIPT = /<script(?![^>]*context=)[^>]*lang=["']ts["'][^>]*>([\s\S]*?)<\/script>/;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

writeFileSync(
    path.join(OUT, 'shims.d.ts'),
    ['// A .svelte module is a component; nothing here checks the component wiring.', "declare module '*.svelte' {", '    const component: any;', '    export default component;', '}', ''].join('\n')
);

writeFileSync(
    path.join(OUT, 'tsconfig.json'),
    JSON.stringify(
        {
            compilerOptions: {
                target: 'es2020',
                module: 'esnext',
                moduleResolution: 'node',
                strict: false,
                strictNullChecks: true,
                noEmit: true,
                skipLibCheck: true,
                lib: ['es2020', 'dom'],
                baseUrl: '.',
                paths: {
                    '@nativescript-community/ui-massifmaps': ['../../../src/ui-massifmaps'],
                    '@nativescript-community/ui-massifmaps/*': ['../../../src/ui-massifmaps/*'],
                    '@nativescript/core': ['./stubs/nativescript-core'],
                    '@nativescript-community/svelte-native': ['./stubs/svelte-native'],
                    svelte: ['./stubs/svelte']
                }
            },
            include: ['**/*.ts', '**/*.d.ts']
        },
        null,
        4
    )
);

mkdirSync(path.join(OUT, 'stubs'), { recursive: true });
writeFileSync(
    path.join(OUT, 'stubs', 'nativescript-core.d.ts'),
    [
        'export interface EventData { eventName: string; object: any; }',
        'export declare class Observable {',
        '    addEventListener(eventNames: string, callback: (data: EventData) => void, thisArg?: any, once?: boolean): void;',
        '    removeEventListener(eventNames: string, callback?: any, thisArg?: any): void;',
        '    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;',
        '    off(eventNames: string, callback?: any, thisArg?: any): void;',
        '    once(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void;',
        '    notify<T extends Partial<EventData>>(data: T): void;',
        '    hasListeners(eventName: string): boolean;',
        '}',
        'export declare class File { static fromPath(p: string): File; writeTextSync(text: string): void; }',
        'export declare class Folder { static fromPath(p: string): Folder; readonly path: string; }',
        'export declare const knownFolders: { temp(): Folder; documents(): Folder; currentApp(): Folder };',
        'export declare const path: { join(...parts: string[]): string };',
        ''
    ].join('\n')
);
writeFileSync(path.join(OUT, 'stubs', 'svelte-native.d.ts'), 'export declare function goBack(): void;\nexport declare function navigate(options: any): void;\n');
writeFileSync(path.join(OUT, 'stubs', 'svelte.d.ts'), 'export declare function onDestroy(fn: () => void): void;\nexport declare function onMount(fn: () => void): void;\n');

const files = readdirSync(EXAMPLES).filter((f) => f.endsWith('.svelte'));
let extracted = 0;
for (const file of files) {
    const source = readFileSync(path.join(EXAMPLES, file), 'utf8');
    const match = SCRIPT.exec(source);
    if (!match) {
        console.log(`  ${file}: no <script lang="ts"> block, skipped`);
        continue;
    }
    // The imports are relative to the example folder, which is two levels up from .check.
    const body = match[1].replace(/(from\s+['"])\.\//g, `$1${path.relative(OUT, EXAMPLES).split(path.sep).join('/')}/`);
    writeFileSync(path.join(OUT, `${file.replace('.svelte', '')}.ts`), `// extracted from ${file}\n${body}\n`);
    extracted++;
}

console.log(`extracted ${extracted} of ${files.length} example scripts`);

const tsc = path.join(ROOT, 'node_modules', '.bin', 'tsc');
let output = '';
try {
    output = execFileSync(process.env.TSC ?? tsc, ['-p', path.join(OUT, 'tsconfig.json')], { encoding: 'utf8' });
} catch (e) {
    output = `${e.stdout ?? ''}${e.stderr ?? ''}`;
}

/*
 * The plugin's own sources come in through `import { api } from '...'`, and a few of them do not
 * pass under strictNullChecks - the project's own tsconfig does not enable it. Those are reported
 * as a count rather than mixed in, so a real example error is never buried under them.
 */
const lines = output.split('\n').filter(Boolean);
const mine = [];
let inherited = 0;
for (const line of lines) {
    if (/^(scripts[\\/]examples[\\/]\.check|demo-snippets)/.test(line)) mine.push(line);
    else if (/^\S+\.tsx?\(\d+,\d+\)/.test(line)) inherited++;
    else if (mine.length)
        mine.push(line); // a continuation of the last error
    else inherited++;
}

if (inherited) {
    console.log(`(${inherited} pre-existing errors in the plugin's own sources, ignored)`);
}
if (mine.length) {
    console.error(mine.join('\n'));
    process.exit(1);
}
console.log('examples typecheck OK');
