import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
import { registerNativeViewElement } from '@nativescript-community/svelte-native/dom';
import DrawerElement from '@nativescript-community/ui-drawer/svelte';
import { install } from '@nativescript-community/gesturehandler';
import { themer } from '@nativescript-community/ui-material-core';
import { SegmentedBar } from '@nativescript-community/ui-material-segmentedbar';
import { Slider as MaterialSlider } from '@nativescript-community/ui-material-slider';
import { ACCENT_COLOR, applyDemoTheme } from './common/theme';

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
function demo(name: string, path: string, load: () => any) {
    return {
        name,
        path,
        get component() {
            return load().default;
        }
    };
}

export const demos = [
    demo('Basic Raster', 'raster', () => require('./BasicRaster.svelte')),
    demo('Interactions', 'interactions', () => require('./Interactions.svelte')),
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
