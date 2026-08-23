import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';
import DrawerElement from '@nativescript-community/ui-drawer/svelte';
import { install } from '@nativescript-community/gesturehandler';
import { themer } from '@nativescript-community/ui-material-core';
import { SegmentedBar } from '@nativescript-community/ui-material-segmentedbar';
import { Slider as MaterialSlider } from '@nativescript-community/ui-material-slider';
import { ACCENT_COLOR, applyDemoTheme } from './common/theme';
import { exampleSections } from './examples/generated';

export function installPlugin() {
    install(true);
    registerNativeViewElement('massifmap', () => MassifMap);
    // The demo shell is a right drawer (layers) over a persistent bottom sheet (settings).
    // Both need the gesture handler installed, and both are registered here rather than
    // through their own `/svelte` helpers, which import from a bare 'svelte-native'.
    DrawerElement.register();
    registerNativeViewElement('bottomsheet', () => require('@nativescript-community/ui-persistent-bottomsheet').PersistentBottomSheet);
    // The settings rows are material: the slider is the only one with a native `stepSize`,
    // and the segmented bar is a real button group, so its choices get the touch events a
    // plain label inside the bottom sheet never saw.
    // Registered here rather than through `ui-material-slider` (which ships no svelte
    // helper) and `ui-material-segmentedbar/svelte` (whose item resolver is android-only).
    registerNativeViewElement('mdslider', () => MaterialSlider);
    registerNativeViewElement('mdsegmentedbar', () => SegmentedBar);
    themer.setPrimaryColor(ACCENT_COLOR);
    themer.setAccentColor(ACCENT_COLOR);
    // the host apps are submodules, so the demo look ships with the snippets rather than
    // living in their app.css
    applyDemoTheme();
}

/**
 * One entry per file so a demo can be opened, broken and fixed on its own.
 * Anything marked android-only uses an SDK class that is in the android typings but
 * has no MSF equivalent in the iOS metadata we generate from.
 *
 * `component` is a getter, so a demo's module - and the slice of the plugin it pulls in -
 * is only evaluated when that demo is opened. A plain `import X from './X.svelte'` ran
 * every demo's imports at app start, which is a lot of work for the one screen that shows
 * a list of names.
 */
export interface DemoEntry {
    name: string;
    path: string;
    /** One line under the title in grid mode. Empty for a plugin demo. */
    description: string;
    /** Screenshot URL - linked from the SDK repo, not bundled. Null for a plugin demo. */
    image: string | null;
    readonly component: any;
}

export interface DemoSection {
    id: string;
    title: string;
    description: string;
    demos: DemoEntry[];
}

/**
 * `component` is a getter, so a demo's module - and the slice of the plugin it pulls in - is only
 * evaluated when that demo is opened. A plain `import X from './X.svelte'` ran every demo's
 * imports at app start, which is a lot of work for the one screen that shows a list of names.
 *
 * A generated example passes its component straight through; a plugin demo loads a module.
 */
function demo(name: string, path: string, load: () => any, description = '', image: string | null = null): DemoEntry {
    return {
        name,
        path,
        description,
        image,
        get component() {
            const loaded = load();
            return loaded?.default ?? loaded;
        }
    };
}

const pluginDemos = [
    demo('Basic Raster', 'raster', () => require('./BasicRaster.svelte')),
    demo('Interactions', 'interactions', () => require('./Interactions.svelte')),
    demo('Map events', 'mapevents', () => require('./MapEvents.svelte')),
    demo('Vector elements', 'vector-elements', () => require('./VectorElements.svelte')),
    demo('Clusters', 'clusters', () => require('./Clusters.svelte')),
    demo('Terrain + fog', 'terrain', () => require('./Terrain.svelte')),
    demo('Sky', 'sky', () => require('./Sky.svelte')),
    demo('Daylight + shadows', 'daylight', () => require('./Daylight.svelte')),
    demo('Hillshade + contours', 'hillshade', () => require('./HillshadeContours.svelte')),
    demo('Custom terrain shader', 'custom-shader', () => require('./CustomShader.svelte')),
    demo('Peak finder', 'peak-finder', () => require('./PeakFinder.svelte')),
    demo('Composite layers (android)', 'composite', () => require('./CompositeLayers.svelte')),
    demo('Celestial (android)', 'celestial', () => require('./Celestial.svelte')),
    demo('Maneuvers', 'maneuvers', () => require('./Maneuvers.svelte'))
];

/**
 * The gallery, as the host app's menu reads it.
 *
 * Two kinds of entry, and the menu renders a GRID when it sees the second:
 *
 *  - the SDK's own examples, generated from `docs/examples/examples.json` so this gallery, the
 *    Android one and the website are the same list in the same order, with the same titles,
 *    descriptions, sections and screenshots. They are written against the SURFACE API and are
 *    the reference for what an app should look like;
 *  - the plugin demos below, which exercise the object API and the capabilities the SDK gallery
 *    does not cover (terrain shaders, celestial, clusters, routing).
 */
export const sections: DemoSection[] = [
    ...exampleSections.map((section) => ({
        id: section.id,
        title: section.title,
        description: section.description,
        demos: section.examples.map((example) => demo(example.title, example.id, () => example.component, example.description, example.image))
    })),
    {
        id: 'plugin',
        title: 'Plugin demos',
        description: 'The object API, and the capabilities the SDK gallery does not cover yet.',
        demos: pluginDemos
    }
];

/** Flat, in section order - what a menu with no grid mode shows. */
export const demos = sections.flatMap((section) => section.demos);
