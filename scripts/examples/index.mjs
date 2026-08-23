#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Rebuilds the demo gallery's metadata from the SDK's own example manifest.
 *
 * The Android gallery, this one and the website all read `docs/examples/examples.json`, so a
 * title, a description, a section or an order can only be changed in ONE place - the example's
 * @ExampleInfo annotation - and the three galleries cannot drift.
 *
 * What is NOT generated is the example itself: the Java is Java and the Svelte is Svelte. This
 * script pairs them by id and REPORTS what has no component rather than dropping it silently.
 *
 * A screenshot is a LINK to the SDK repo, not a copy. 1.6 MB of PNG has no business in an npm
 * package that most consumers never open the gallery of, and a copy would have to be re-synced
 * every time one is recaptured. It also means the grid needs no image rule in the host app's
 * bundler - a NativeScript <image src> takes a URL.
 */

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SNIPPETS = path.join(ROOT, 'demo-snippets', 'svelte', 'examples');

/** Where the SDK keeps the captures. `master` because that is the branch the gallery ships from. */
const DEFAULT_IMAGE_BASE = 'https://raw.githubusercontent.com/massif-maps/MassifMaps/master/docs/examples';

const USAGE = `
Regenerate the example gallery metadata from the SDK's example manifest.

  node scripts/examples/index.mjs [--manifest <examples.json>] [--image-base <url>]

The manifest is looked up in this order:
  --manifest
  $MASSIF_SDK_HOME/docs/examples/examples.json
  ../../docs/examples/examples.json     (this plugin checked out inside the SDK)

Writes demo-snippets/svelte/examples/generated.ts. Screenshots are LINKED, not copied:
  --image-base   what to prefix the manifest's screenshot path with. Defaults to
                 ${DEFAULT_IMAGE_BASE}
`;

const opts = { manifest: undefined, imageBase: DEFAULT_IMAGE_BASE };
const argv = process.argv.slice(2);
for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--manifest') opts.manifest = argv[++i];
    else if (argv[i] === '--image-base') opts.imageBase = argv[++i].replace(/\/$/, '');
    else if (argv[i] === '-h' || argv[i] === '--help') {
        console.log(USAGE);
        process.exit(0);
    } else {
        console.error(`unknown argument: ${argv[i]}`);
        console.log(USAGE);
        process.exit(1);
    }
}

function findManifest() {
    const candidates = [
        opts.manifest,
        process.env.MASSIF_SDK_HOME && path.join(process.env.MASSIF_SDK_HOME, 'docs', 'examples', 'examples.json'),
        path.resolve(ROOT, '..', '..', 'docs', 'examples', 'examples.json')
    ].filter(Boolean);
    const found = candidates.find((c) => existsSync(c));
    if (!found) {
        throw new Error(`examples.json not found. Pass --manifest <path> or set MASSIF_SDK_HOME.\ntried:\n  ${candidates.join('\n  ')}`);
    }
    return found;
}

/** `display-a-map` -> `DisplayAMap.svelte`, which is what a component file is called. */
function componentName(id) {
    return id
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
}

const manifestFile = findManifest();
const manifest = JSON.parse(readFileSync(manifestFile, 'utf8'));
console.log(`manifest: ${manifestFile}`);

mkdirSync(SNIPPETS, { recursive: true });

const present = new Set(readdirSync(SNIPPETS).filter((f) => f.endsWith('.svelte')));
const missing = [];
const noShot = [];
const sections = [];
let count = 0;

for (const section of manifest.sections) {
    const entries = [];
    for (const example of section.examples) {
        const file = `${componentName(example.id)}.svelte`;
        if (!present.has(file)) {
            missing.push(`${example.id} -> ${file}`);
            continue;
        }
        // `screenshot` is relative to the manifest (`screenshots/<id>.png` beside it), which is
        // also its path under docs/examples in the repo - so the base URL simply prefixes it.
        const image = example.hasScreenshot && example.screenshot ? `${opts.imageBase}/${example.screenshot}` : null;
        if (!image) {
            noShot.push(example.id);
        }
        entries.push({ id: example.id, title: example.title, description: example.description, image, file });
        count++;
    }
    if (entries.length) {
        sections.push({ id: section.id, title: section.title, description: section.description, entries });
    }
}

const lines = [];
lines.push('// GENERATED FILE - do not edit by hand.');
lines.push("// Regenerate with `npm run examples` (scripts/examples), which reads the SDK's");
lines.push('// docs/examples/examples.json - the same manifest the Android gallery and the');
lines.push('// website build from, so the three cannot drift.');
lines.push('');
lines.push('export interface ExampleEntry {');
lines.push('    id: string;');
lines.push('    title: string;');
lines.push('    description: string;');
lines.push('    /**');
lines.push('     * The screenshot, as a URL into the SDK repo, or null when the example has none.');
lines.push('     *');
lines.push('     * LINKED rather than bundled: a NativeScript <image src> takes a URL, so the grid');
lines.push("     * needs no asset rule in the host app's bundler, the package carries no megabytes");
lines.push('     * of PNG, and a recaptured screenshot needs no resync. The cost is that the grid');
lines.push('     * wants the network the first time it is opened.');
lines.push('     */');
lines.push('    image: string | null;');
lines.push('    /** Loaded on demand: opening the gallery must not evaluate every example. */');
lines.push('    readonly component: any;');
lines.push('}');
lines.push('');
lines.push('export interface ExampleSection {');
lines.push('    id: string;');
lines.push('    title: string;');
lines.push('    description: string;');
lines.push('    examples: ExampleEntry[];');
lines.push('}');
lines.push('');
lines.push('function entry(id: string, title: string, description: string, image: string | null, load: () => any): ExampleEntry {');
lines.push('    return {');
lines.push('        id,');
lines.push('        title,');
lines.push('        description,');
lines.push('        image,');
lines.push('        get component() {');
lines.push('            return load().default;');
lines.push('        }');
lines.push('    };');
lines.push('}');
lines.push('');
lines.push('export const exampleSections: ExampleSection[] = [');
for (const section of sections) {
    lines.push(`    {`);
    lines.push(`        id: ${JSON.stringify(section.id)},`);
    lines.push(`        title: ${JSON.stringify(section.title)},`);
    lines.push(`        description: ${JSON.stringify(section.description)},`);
    lines.push(`        examples: [`);
    for (const e of section.entries) {
        lines.push(`            entry(${JSON.stringify(e.id)}, ${JSON.stringify(e.title)}, ${JSON.stringify(e.description)}, ${JSON.stringify(e.image)}, () => require('./${e.file}')),`);
    }
    lines.push(`        ]`);
    lines.push(`    },`);
}
lines.push('];');
lines.push('');

writeFileSync(path.join(SNIPPETS, 'generated.ts'), lines.join('\n'));

console.log(`generated.ts   ${count} examples over ${sections.length} sections`);
console.log(`screenshots    linked from ${opts.imageBase}`);
if (missing.length) {
    console.log(`  ${missing.length} in the manifest with no component here:`);
    for (const m of missing) console.log(`    ${m}`);
}
if (noShot.length) {
    console.log(`  ${noShot.length} with no screenshot: ${noShot.join(', ')}`);
}
