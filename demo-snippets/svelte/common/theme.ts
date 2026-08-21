import { Application } from '@nativescript/core';

/** the one accent of the demo look, also handed to the material themer at install time */
export const ACCENT_COLOR = '#8ab4f8';

/**
 * The demo look, as a string rather than an `app.css`.
 *
 * The host apps (demo-svelte, demo-vue) are submodules, so the snippets cannot own a
 * file in them - and every rule here belongs to the shell the snippets provide anyway.
 * `Application.addCss` appends to whatever the app already loaded, so these rules come
 * after the theme's and win without `!important`.
 *
 * The few element selectors at the top (Page, ActionBar, Button) are what carries the
 * look over to the host app's own screens - its demo list is a plain stack of buttons.
 */
export const DEMO_CSS = `
Page {
    background-color: #101418;
    color: #e6e9ef;
}

ActionBar {
    background-color: #1f2a37;
    color: #ffffff;
}

Button {
    font-size: 15;
    color: #e6e9ef;
    background-color: #1b2129;
    border-width: 0;
    border-radius: 10;
    padding: 14 16;
    margin: 4 12;
    text-align: left;
    text-transform: none;
    android-elevation: 0;
    android-dynamic-elevation-offset: 0;
}

Button:highlighted {
    background-color: #262d37;
}

.page {
    background-color: #101418;
}

/* --- readout and floating controls over the map ----------------------------------- */

.status {
    font-size: 12;
    color: #e6e9ef;
    background-color: #cc101418;
    padding: 6 10;
}

.overlay {
    margin: 8;
}

.overlay-button {
    font-size: 12;
    color: #e6e9ef;
    background-color: #cc1f2a37;
    border-radius: 18;
    padding: 8 14;
    margin: 0 0 6 0;
}

/* --- bottom sheet ----------------------------------------------------------------- */

.sheet {
    background-color: #1b2129;
    border-top-left-radius: 16;
    border-top-right-radius: 16;
}

.sheet-handle {
    padding: 6 0 4 0;
}

.sheet-grabber {
    height: 4;
    width: 40;
    border-radius: 2;
    background-color: #4a5361;
    horizontal-align: center;
    margin-bottom: 4;
}

.sheet-title {
    font-size: 11;
    text-transform: uppercase;
    letter-spacing: 0.1;
    color: #7b8494;
    horizontal-align: center;
}

.sheet-content {
    padding: 4 14 16 14;
}

/* --- drawer ----------------------------------------------------------------------- */

.drawer-panel {
    background-color: #1b2129;
    padding: 0 12 12 12;
}

.drawer-title {
    font-size: 11;
    text-transform: uppercase;
    letter-spacing: 0.1;
    color: #7b8494;
    padding: 16 4 8 4;
}

/* --- settings rows ---------------------------------------------------------------- */

.setting-row {
    margin-bottom: 6;
}

.setting-label {
    font-size: 14;
    color: #e6e9ef;
}

.setting-value {
    font-size: 13;
    color: #8ab4f8;
}

.setting-hint {
    font-size: 11;
    color: #7b8494;
}

.section-content {
    margin: 0 0 8 6;
}

.section-title {
    font-size: 11;
    text-transform: uppercase;
    letter-spacing: 0.1;
    color: #7b8494;
    margin: 10 0 2 0;
}

/* the material slider derives track and thumb from color, background is the track */
Slider {
    color: #8ab4f8;
    background-color: #39414d;
    ripple-color: #8ab4f8;
}

Switch {
    color: #8ab4f8;
}

/* --- segmented choice ------------------------------------------------------------- */

/* the selected-* pair is what the iOS bar paints with; android paints the item itself */
.segment {
    background-color: #262d37;
    selected-background-color: #8ab4f8;
    selected-text-color: #101418;
    border-radius: 8;
    padding: 2;
    margin-top: 2;
}

/*
 * items are material buttons on android, so this has to undo both Button rules above -
 * hence the parent class, which outweighs the .sheet-content Button descendant rule
 */
.segment .segment-item {
    font-size: 13;
    color: #9aa3b0;
    background-color: transparent;
    padding: 6 12;
    margin: 0;
    border-radius: 6;
    text-align: center;
    text-transform: none;
    android-elevation: 0;
    android-dynamic-elevation-offset: 0;
}

.segment .segment-item.selected {
    color: #101418;
    background-color: #8ab4f8;
}

/* buttons INSIDE the panels are secondary actions, not list rows */
.sheet-content Button,
.drawer-panel Button {
    font-size: 13;
    background-color: #2d3743;
    border-radius: 8;
    padding: 8 12;
    margin: 6 0 0 0;
    text-align: center;
}
`;

let applied = false;

/** idempotent: the host app may call installPlugin more than once (HMR) */
export function applyDemoTheme() {
    if (applied) {
        return;
    }
    applied = true;
    Application.addCss(DEMO_CSS);
}
