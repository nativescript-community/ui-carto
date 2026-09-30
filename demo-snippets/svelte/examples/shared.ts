import { File, Folder, Http, knownFolders, path } from '@nativescript/core';
import type { SourceSpec, StyleSpec } from '@nativescript-community/ui-massifmaps/api';

/**
 * What every ported example needs, in one place.
 *
 * These are the NativeScript equivalents of the constants the Android examples share. Where the
 * two differ it is noted - the only real difference is the style projects, which the Android app
 * bundles as a zipped asset and this one fetches (see `massifStyle`).
 */

/** A tile server wants to know who is asking: a real app identifies itself. */
export const UA = 'MassifMapsExamples/1.0 (+https://github.com/massif-maps/MassifMaps)';

/**
 * A persistent tile cache in front of a remote source.
 *
 * Every example that reads from a server goes through one: a demo that gets panned around
 * otherwise re-fetches the same tiles from somebody else's free service on every run.
 */
function cached(name: string, capacityMb: number, source: SourceSpec): SourceSpec {
    return {
        type: 'persistent-cache',
        databasePath: path.join(knownFolders.documents().path, name),
        capacity: capacityMb * 1024 * 1024,
        source
    };
}

/** OpenFreeMap's planet vector tiles, in the OpenMapTiles schema. */
export function vectorTiles(): SourceSpec {
    return cached('openfreemap.db', 100, {
        type: 'http',
        url: 'https://tiles.openfreemap.org/planet/latest/{z}/{x}/{y}.pbf',
        maxZoom: 14,
        HTTPHeaders: { 'User-Agent': UA }
    });
}

/** Esri's world imagery - the raster under the 3D terrain examples. */
export function satelliteTiles(): SourceSpec {
    return cached('world-imagery.db', 200, {
        type: 'http',
        // The {y}/{x} order is this server's; the template substitutes by name, so any order works.
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxZoom: 18,
        HTTPHeaders: { 'User-Agent': UA }
    });
}

/**
 * Open DEM tiles, terrarium-encoded.
 *
 * `metaData.dem_encoding` is what picks the elevation decoder, and it is resolved per TILE - the
 * source stamps its map on every tile it loads, so two encodings can sit behind one wrapper source.
 * Without it the SDK assumes mapbox encoding and every height is wrong.
 */
export function demTiles(): SourceSpec {
    // The encoding stays on the HTTP source, not on the cache in front of it: a wrapper source
    // with no map of its own answers with its wrapped source's.
    return cached('mapterhorn-dem.db', 200, {
        type: 'http',
        url: 'https://tiles.mapterhorn.com/{z}/{x}/{y}.webp',
        minZoom: 1,
        maxZoom: 16,
        metaData: { dem_encoding: 'terrarium' }
    });
}

/** The published Massif CartoCSS project (docs/styles/massif-sdk.md), which the style release keeps current. */
const MASSIF_SITE = 'https://massif-maps.github.io/MassifMaps/styles/massif/carto/';
const MASSIF_VARIANTS = ['streets', 'outdoor', 'topo', 'hybrid', 'eink'];

/**
 * Massif as an `mbvt` style spec for `variant`. The Android and iOS apps bundle the repo's
 * styles/massif/carto; a plugin has nowhere to put it, so the project is fetched once into the app's
 * temp folder, and every variant is a style parameter of it (`style.set('params.variant', 'eink')`).
 */
export async function massifStyle(variant = 'streets'): Promise<StyleSpec> {
    const folder = path.join(knownFolders.temp().path, 'massif-style', 'massif');
    if (!File.exists(path.join(folder, 'project.json'))) {
        const project = await Http.getJSON<any>(MASSIF_SITE + 'project.json');
        const texts = await Promise.all((project.styles as string[]).map((name) => Http.getString(MASSIF_SITE + name)));
        const images = new Set<string>(Object.values(project.styleparameters ?? {}).filter((v) => typeof v === 'string' && /\.(png|jpg|svg)$/.test(v)) as string[]);
        for (const text of texts) {
            for (const match of text.matchAll(/[\w./-]+\.(?:png|jpg|svg)/g)) images.add(match[0]);
        }
        const names = ['project.json', ...MASSIF_VARIANTS.map((v) => `${v}.json`), ...project.styles, ...images, ...(project.fonts ?? []).map((f: string) => `fonts/${f}`)];
        for (const name of names) {
            const target = path.join(folder, name);
            Folder.fromPath(target.slice(0, target.lastIndexOf('/')));
            await Http.getFile(MASSIF_SITE + name, target);
        }
    }
    return { type: 'mbvt', project: { type: 'project', assets: { type: 'dir', path: folder }, name: variant } } as StyleSpec;
}
