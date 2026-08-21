import { RELIEF_PALETTE } from './shaders';

/**
 * The CartoCSS the demos feed to MBVectorTileDecoder, ported from the native MassifDemo
 * (DemoStyles.java). A raw CartoCSS string cannot declare `param::` parameters or use a
 * bundled font, so anything needing those is left out; everything else is verbatim.
 *
 * The layer names and fields are OpenMapTiles, which is what `vectorSource()` serves.
 */

export interface BaseStyleOptions {
    /** style-driven sun/shadow/fog, expressed IN the style rather than on LightOptions */
    lighting?: boolean;
    /** background plus the composite slots only - no vector geometry */
    minimal?: boolean;
    labels?: boolean;
    buildings3D?: boolean;
    backgroundColor?: string;
    /** composite slots are cheap to leave in: a source's draw order IS its first rule's position */
    hillshadeSlot?: boolean;
    satelliteSlot?: boolean;
    contourSlot?: boolean;
}

/**
 * The base map style. The `#hillshade` / `#satellite` / `#contour` blocks are the
 * COMPOSITE SLOTS: with a CompositeVectorTileLayer an external source named `hillshade`
 * is woven into the draw order at the position of its `#hillshade` rule, instead of
 * stacking as a separate map layer. They are harmless when no such source is attached.
 */
export function baseStyle(options: BaseStyleOptions = {}) {
    const { backgroundColor = '#f4f1ec', buildings3D = true, contourSlot = true, hillshadeSlot = true, labels = true, lighting = true, minimal = false, satelliteSlot = true } = options;

    const map = [
        `Map { background-color: ${backgroundColor};`,
        lighting
            ? [
                  ' terrain-lighting: 1;',
                  ' sun-azimuth: 250;',
                  ' sun-altitude: linear([view::zoom], (11, 55), (15, 12));',
                  ' sun-intensity: 1;',
                  ' ambient-intensity: 0.4;',
                  ' building-light-intensity: 1;',
                  ' building-ambient: 0.35;',
                  ' shadow-strength: 0.8;',
                  ' shadow-softness: 1;',
                  ' fog-color: #b8c6d8;',
                  ' fog-start-distance: 1500;',
                  ' fog-distance: linear([view::zoom], (11, 60000), (15, 12000));'
              ].join('')
            : '',
        ' }'
    ].join('');

    const satellite = satelliteSlot ? '#satellite[zoom>=0] { raster-opacity: 1; raster-comp-op: src-over; }' : '';
    const hillshade = hillshadeSlot
        ? ['#hillshade[zoom>=4][zoom<=19] {', '  hillshade-illumination-direction: 315;', '  hillshade-shadow-color: #4d5a6e;', '}'].join('\n')
        : '';
    const contour = contourSlot ? ['#contour[zoom>=11] {', '  line-color: #C56008;', contourWidthByDiv(), '  contour-base-interval: 100;', '}'].join('\n') : '';

    if (minimal) {
        return [map, satellite, hillshade, contour].filter(Boolean).join('\n');
    }

    return [
        map,
        '#water { polygon-fill: #9cc3e0; }',
        // Ground-shaped fills stay translucent so the hillshade and the contours under them read through
        '#landuse { polygon-fill: #dddddd; polygon-opacity: 0.35; }',
        '#landcover { polygon-fill: #dbe8cc; polygon-opacity: 0.35; }',
        satellite,
        hillshade,
        contour,
        '#transportation { line-color: #ffffff; line-width: 3; }',
        "#transportation['class'='motorway'] { line-color: #e27d60; line-width: 5; }",
        labels ? ['#transportation_name {', '  text-name: [name];', '  text-fill: #000000;', '  text-spacing: 10;', '  text-placement: line;', '  text-size: 10;', '  text-max-distance: 2000;', '}'].join('\n') : '',
        labels ? ['#place[zoom>=8] {', '  text-name: [name];', '  text-fill: #333333;', '  text-halo-fill: #ffffff;', '  text-halo-radius: 1.5;', '  text-size: 12;', '}'].join('\n') : '',
        buildings3D ? '#building[zoom>=14] { building-fill: #d9cfc4; building-height: 1; }' : '#building[zoom>=14] { polygon-fill: #d9cfc4; }'
    ]
        .filter(Boolean)
        .join('\n');
}

/**
 * Which contours are VISIBLE, per CAMERA zoom. This has to be a WIDTH ramp, not a
 * filter: a CartoCSS filter is evaluated per tile at decode time, so it cannot see the
 * camera, while [view::zoom] is evaluated every frame and a width of 0 draws nothing.
 */
function contourWidthByDiv() {
    return [
        '  line-opacity: 0.75;',
        '  line-width: 0;',
        '  [div>=10]  { line-width: linear([view::zoom], (14, 0), (14.5, 0.5)); line-opacity: linear([view::zoom], (14, 0), (14.5, 1)); }',
        '  [div>=50]  { line-width: linear([view::zoom], (13, 0), (13.5, 0.7)); line-opacity: linear([view::zoom], (13, 0), (13.5, 1)); }',
        '  [div>=100] { line-width: linear([view::zoom], (11.5, 0), (12, 1)); line-opacity: 0.9; }',
        '  [div>=500] { line-width: 1.3; line-opacity: 0.9; }'
    ].join('\n');
}

/** Style of the PRE-BAKED contour tile layer (`contourSource()`). */
export function contourTilesStyle() {
    return ['#contour {', '  line-color: #226600;', contourWidthByDiv(), '}'].join('\n');
}

export interface PeaksStyleOptions {
    dark?: boolean;
    minZoom?: number;
    textSize?: number;
    /** rotation of the label text off its leader line, degrees */
    textAngle?: number;
    /** all labels pinned to a row near the top, rather than a band lower down */
    pinTop?: boolean;
    /** how far below the top of the screen that row sits, as a fraction of the screen height */
    topOffset?: number;
    band?: number;
    minDistance?: number;
    maxRows?: number;
    maxDistance?: number;
}

/**
 * Summit names as callout labels: the label is lifted to a band near the top of the
 * screen and joined back to the summit by a leader line, and a label that would collide
 * moves one row instead of being dropped ('callout' placement).
 *
 * The leader line always meets the FIRST letter of the name, which is also the point held
 * over the summit. What changes with the mode is the CORNER the row is aligned on: pinned
 * to the top the labels hang from their top right corner so the text stays under the
 * screen edge; in a band lower down they line up on the bottom left corner they are
 * anchored by, and read up and to the right.
 *
 * Layer name and fields are OpenMapTiles ('mountain_peak', name/ele/class).
 */
export function peaksStyle(options: PeaksStyleOptions = {}) {
    const { band = 0.25, dark = false, maxDistance = 0, maxRows = 1, minDistance = 14, minZoom = 8, pinTop = true, textAngle = 55, textSize = 16, topOffset = 0.03 } = options;
    const palette = dark ? RELIEF_PALETTE.dark : RELIEF_PALETTE.light;
    const align = pinTop ? 'top-right' : 'bottom-left';
    return [
        `#mountain_peak['class'='peak'][zoom>=${minZoom}] {`,
        '  text-name: [name];',
        // the elevation as a second run of text: same label, same plate, smaller font
        "  text-secondary-name: [ele]+'m';",
        '  text-secondary-scale: 0.62;',
        '  text-secondary-fill: #6b7280;',
        '  text-secondary-dx: 3;',
        '  text-secondary-dy: 0;',
        `  text-size: ${textSize};`,
        `  text-fill: ${palette.ink};`,
        `  text-halo-fill: ${palette.paper};`,
        '  text-halo-radius: 1.5;',
        // the plate behind the name; it follows the palette so the names stay readable in both
        `  text-background-fill: ${dark ? palette.paper : '#ffffff'};`,
        '  text-background-opacity: 0.85;',
        '  text-background-radius: 6;',
        '  text-background-padding-x: 5;',
        '  text-background-padding-y: 2;',
        '  text-placement: callout;',
        // the higher summit claims the row: without this the winner is whichever label the
        // tile order happened to offer first, and a 700 m hill hides a 2000 m one behind it
        '  text-placement-priority: [ele];',
        minDistance > 0 ? `  text-min-distance: ${minDistance};` : '',
        // ...and the nearer of two summits of the same height wins the slot. '0 - x', not
        // '-x': in CartoCSS a leading minus in front of a field is read as a literal '-'.
        '  text-rank: [ele] + [view::distance]/100;',
        `  text-orientation: ${textAngle};`,
        '  text-callout-line-anchor: bottom-left;',
        `  text-callout-align: ${align};`,
        `  text-callout-screen-anchor: ${pinTop ? topOffset : band};`,
        '  text-callout-offset: 10;',
        // pinned to the top there is no room above the row, so the extra rows go DOWN
        `  text-callout-step: ${pinTop ? -26 : 26};`,
        `  text-callout-max-rows: ${maxRows};`,
        '  text-callout-persist: 2;',
        '  text-callout-line-width: 1;',
        maxDistance > 0 ? `  text-max-distance: ${maxDistance};` : '',
        '}'
    ]
        .filter(Boolean)
        .join('\n');
}

export interface PoiStyleOptions {
    /** let the culler put the name on whichever side of the icon is free */
    anchors?: boolean;
    /** ...and keep the icon alone when no side fits */
    textOptional?: boolean;
    fontIcon?: boolean;
    bitmapIcon?: boolean;
    textPlate?: boolean;
    iconPlate?: boolean;
    plateRadius?: number;
    platePadding?: number;
    plateBorder?: number;
    /** gap between the icon and the name, px */
    textDx?: number;
}

/** PUA glyphs of the style project's fonts/osm.ttf, as the real style's 'param::osm-*' have them */
const ICON = { dot: '\ue934', peak: '\uea04', restaurant: '\ue919', hotel: '\ue9d6', cafe: '\ue990' };

function shieldCommon(icon: string, fill: string, size: number, options: PoiStyleOptions) {
    const { anchors = true, bitmapIcon = false, fontIcon = true, iconPlate = false, plateBorder = 0, platePadding = 4, plateRadius = 6, textDx = 4, textOptional = true, textPlate = true } = options;
    const lines = [`  shield-face-name: 'DIN Pro Medium';`, `  shield-size: ${size};`, `  shield-fill: ${fill};`, '  shield-halo-fill: #ffffff;', '  shield-halo-radius: 1.5;', `  shield-text-dx: ${textDx};`];
    if (bitmapIcon) {
        lines.push('  shield-file: url(shields/place.svg);');
    }
    if (fontIcon) {
        lines.push(`  shield-icon-name: '${icon}';`, `  shield-icon-face-name: 'osm';`, `  shield-icon-size: ${size + 4};`, `  shield-icon-fill: ${fill};`);
    }
    if (textPlate) {
        lines.push('  shield-background-fill: #ffffff;', '  shield-background-opacity: 0.85;', `  shield-background-radius: ${plateRadius};`, `  shield-background-padding-x: ${platePadding};`, `  shield-background-padding-y: ${platePadding * 0.6};`);
        if (plateBorder > 0) {
            lines.push(`  shield-background-border-fill: ${fill};`, `  shield-background-border-width: ${plateBorder};`);
        }
    }
    if (iconPlate) {
        lines.push('  shield-icon-background-fill: #ffffff;', '  shield-icon-background-opacity: 0.9;', '  shield-icon-background-radius: 20;', `  shield-icon-background-padding-x: ${platePadding};`, `  shield-icon-background-padding-y: ${platePadding};`);
    }
    if (anchors) {
        lines.push(`  shield-anchors: 'right,left,top,bottom';`, `  shield-text-optional: ${textOptional};`);
    }
    return lines.join('\n');
}

/**
 * The shield test style: an ICON that stays on the feature and a NAME the culler puts on
 * whichever side is free, falling back to the icon alone when none is.
 *
 * The icon is a GLYPH of the style project's fonts/osm.ttf - the same font the real style
 * uses - so it costs one atlas cell and no bitmap. That is why this style needs an asset
 * package for its FONTS even though the CartoCSS itself is written here: a bare CartoCSS
 * string carries none.
 *
 * Deliberately dense - every POI and every place carries one, which is what makes the side
 * selection visible.
 */
export function poiTestStyle(options: PoiStyleOptions = {}) {
    return [
        'Map { background-color: #f4f1ec; }',
        '#water { polygon-fill: #9cc3e0; }',
        '#landcover { polygon-fill: #dbe8cc; }',
        '#landuse { polygon-fill: #e7e3dc; }',
        '#transportation { line-color: #ffffff; line-width: linear([view::zoom], (12, 0.6), (18, 4.0)); }',
        "#transportation['class'='motorway'] { line-color: #e8b48a; line-width: linear([view::zoom], (12, 1.5), (18, 9.0)); }",
        '#building[zoom>=15] { polygon-fill: #ded8d0; }',
        // cities and towns: the low-zoom test - a screen full of them, all competing
        '#place[class=city][zoom>=4],',
        '#place[class=town][zoom>=8],',
        '#place[class=village][zoom>=11] {',
        '  shield-name: [name];',
        shieldCommon(ICON.dot, '#333333', 12, options),
        '  shield-placement-priority: 10;',
        '}',
        // one rule per class rather than nested filter blocks: a nested block builds a
        // symbolizer of its own, which is a CartoCSS question this test has no reason to ask
        '#poi[zoom>=14][class=restaurant],',
        '#poi[zoom>=14][class=fast_food] {',
        '  shield-name: [name];',
        shieldCommon(ICON.restaurant, '#b5651d', 11, options),
        '}',
        '#poi[zoom>=14][class=lodging] {',
        '  shield-name: [name];',
        shieldCommon(ICON.hotel, '#2a6f97', 11, options),
        '}',
        '#poi[zoom>=14][class=cafe] {',
        '  shield-name: [name];',
        shieldCommon(ICON.cafe, '#7d5a3c', 11, options),
        '}',
        '#poi[zoom>=14][class!=restaurant][class!=fast_food][class!=lodging][class!=cafe] {',
        '  shield-name: [name];',
        shieldCommon(ICON.cafe, '#4a4a4a', 11, options),
        '}',
        // peaks: the 3D test - these sit on the terrain, so their icons ride the relief
        '#mountain_peak[zoom>=11] {',
        '  shield-name: [name];',
        shieldCommon(ICON.peak, '#6b4f2a', 11, options),
        '}'
    ].join('\n');
}

/** the route line itself: a casing under a fill, both scaled with the camera */
export function routeStyle(color = '#2f6fdb', casingColor = '#12386f', width = 7, casingWidth = 11) {
    const byZoom = (w: number) => `linear([view::zoom], (10, ${w * 0.5}), (16, ${w}))`;
    return [
        `#route::case { line-color: ${casingColor}; line-width: ${byZoom(casingWidth)}; line-join: round; line-cap: round; }`,
        `#route::fill { line-color: ${color}; line-width: ${byZoom(width)}; line-join: round; line-cap: round; }`
    ].join('\n');
}

export interface ManeuverStyleOptions {
    color?: string;
    casingColor?: string;
    width?: number;
    casingWidth?: number;
    arrowWidth?: number;
    arrowLength?: number;
}

/**
 * Navigation maneuver arrows. Whole SHAFT first, then the head over it, each part in its
 * own attachment - an attachment is drawn at the position of its FIRST rule. The head
 * paints over the line so it keeps its outline where it lands on its own shaft (a U-turn
 * once the map is zoomed out), and `line-arrow-only` cuts a slot one line width wide out
 * of the head's base so the two read as a single polygon.
 *
 * Everything scales with the camera: the widths are interpolated over [view::zoom] - the
 * LIVE camera zoom, re-evaluated every frame - and the head is a multiple of the width,
 * so the arrow keeps its shape instead of swallowing the junction.
 */
export function maneuverStyle(options: ManeuverStyleOptions = {}) {
    const { arrowLength = 2, arrowWidth = 2.5, casingColor = '#ffffff', casingWidth = 13, color = '#1f57c3', width = 8 } = options;
    const byZoom = (w: number) => `linear([view::zoom], (12, ${w * 0.45}), (16, ${w}))`;
    // The casing's arrow numbers are read against ITS wider line, so they need scaling back
    // or the border comes out twice too thick. For a triangle, growing by (casing - fill)/2
    // is the same shape scaled about its incenter.
    const a = (arrowWidth * width) / 2;
    const l = arrowLength * width;
    const inradius = (a * l) / (a + Math.hypot(a, l));
    const scale = casingWidth > width ? ((inradius + (casingWidth - width) / 2) / inradius) * (width / casingWidth) : 1;
    const arrow = (w: number, len: number) => ` line-join: round; line-cap: round; line-end-arrow: true; line-arrow-only: true; line-arrow-width: ${w}; line-arrow-length: ${len};`;
    return [
        casingWidth > 0 ? `#maneuver::case { line-color: ${casingColor}; line-width: ${byZoom(casingWidth)}; line-join: round; line-cap: round; }` : '',
        `#maneuver::fill { line-color: ${color}; line-width: ${byZoom(width)}; line-join: round; line-cap: round; }`,
        casingWidth > 0 ? `#maneuver::headcase { line-color: ${casingColor}; line-width: ${byZoom(casingWidth)};${arrow(arrowWidth * scale, arrowLength * scale)} }` : '',
        `#maneuver::head { line-color: ${color}; line-width: ${byZoom(width)};${arrow(arrowWidth, arrowLength)} }`
    ]
        .filter(Boolean)
        .join('\n');
}
