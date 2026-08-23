import { File, Folder, knownFolders, path } from '@nativescript/core';
import type { SourceSpec, StyleSpec } from '@nativescript-community/ui-massifmaps/api';

/**
 * What every ported example needs, in one place.
 *
 * These are the NativeScript equivalents of the constants the Android examples share. Where the
 * two differ it is noted - the only real difference is the style projects, which the Android app
 * ships as zipped assets and this one writes to disk (see `styleProject`).
 */

/**
 * OSM's tile usage policy REQUIRES an identifying User-Agent; without one the server answers 403
 * and every tile comes back as an error image.
 */
export const UA = 'MassifMapsExamples/1.0 (+https://github.com/massif-maps/MassifMaps)';

/** OpenStreetMap's raster tiles - what most of the basics examples sit on. */
export function osmRaster(): SourceSpec {
    return {
        type: 'http',
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxZoom: 19,
        HTTPHeaders: { 'User-Agent': UA }
    };
}

/** OpenFreeMap's planet vector tiles, in the OpenMapTiles schema. */
export function vectorTiles(): SourceSpec {
    return {
        type: 'http',
        url: 'https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf',
        maxZoom: 14,
        HTTPHeaders: { 'User-Agent': UA }
    };
}

/** Open DEM tiles, terrarium-encoded - `encoding` is what picks the elevation decoder. */
export function demTiles(): SourceSpec {
    return {
        type: 'http',
        url: 'https://tiles.mapterhorn.com/{z}/{x}/{y}.webp',
        minZoom: 1,
        maxZoom: 16,
        encoding: 'terrarium'
    };
}

/**
 * A CartoCSS style for the OpenMapTiles schema, as an inline string.
 *
 * The Android examples load a zipped style PROJECT out of the app's assets. A plain string is the
 * NativeScript equivalent for everything that does not need a project - see `styleProject` for
 * the one example that does.
 */
export function alpineStyle(): StyleSpec {
    return {
        type: 'mbvt',
        cartocss: {
            type: 'cartocss',
            css: [
                'Map { background-color: #f4f1ec; }',
                '#water { polygon-fill: #9cc3e0; }',
                '#landcover { polygon-fill: #dbe8cc; polygon-opacity: 0.5; }',
                '#landuse { polygon-fill: #dddddd; polygon-opacity: 0.35; }',
                '#building { polygon-fill: #d9d0c9; line-color: #c3b8ae; line-width: 0.6; }',
                '#transportation { line-color: #ffffff; line-width: linear([view::zoom], (10, 0.6), (16, 5)); line-join: round; line-cap: round; }',
                "#transportation['class'='motorway'] { line-color: #f6c667; line-width: linear([view::zoom], (8, 1.2), (16, 8)); }",
                '#waterway { line-color: #9cc3e0; line-width: 1.2; }',
                '#place::labels { text-name: [name]; text-face-name: "sans-serif"; text-size: 12; text-fill: #33302c; text-halo-fill: #ffffffcc; text-halo-radius: 1.5; }',
                '#mountain_peak::labels { text-name: [name]; text-face-name: "sans-serif"; text-size: 11; text-fill: #6b4a2f; text-halo-fill: #ffffffcc; text-halo-radius: 1.5; }'
            ].join('\n')
        }
    };
}

/** The same, with no background of its own, so it can be drawn over imagery or terrain. */
export function overlayStyle(): StyleSpec {
    return {
        type: 'mbvt',
        cartocss: {
            type: 'cartocss',
            css: [
                '#transportation { line-color: #ffffffcc; line-width: linear([view::zoom], (10, 0.5), (16, 4)); line-join: round; line-cap: round; }',
                '#place::labels { text-name: [name]; text-face-name: "sans-serif"; text-size: 12; text-fill: #ffffff; text-halo-fill: #00000099; text-halo-radius: 2; }',
                '#mountain_peak::labels { text-name: [name]; text-face-name: "sans-serif"; text-size: 12; text-fill: #ffffff; text-halo-fill: #00000099; text-halo-radius: 2; }'
            ].join('\n')
        }
    };
}

/**
 * Writes a CartoCSS style PROJECT to disk and returns the folder, for `{ type: 'dir' }`.
 *
 * A raw CartoCSS string cannot declare `param::` values, and a project is a folder of files -
 * the Android app ships one zipped in its assets, which a NativeScript plugin has nowhere to put.
 * Writing it out costs two small files once and keeps the example self-contained; the SDK does
 * not care where a project came from.
 */
export function styleProject(name: string, files: { [file: string]: string }): string {
    const folder = Folder.fromPath(path.join(knownFolders.temp().path, 'massif-style', name));
    for (const file of Object.keys(files)) {
        File.fromPath(path.join(folder.path, file)).writeTextSync(files[file]);
    }
    return folder.path;
}
