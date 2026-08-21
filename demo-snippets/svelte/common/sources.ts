import { HTTPTileDataSource } from '@nativescript-community/ui-massifmaps/datasources/http';
import { PersistentCacheTileDataSource } from '@nativescript-community/ui-massifmaps/datasources/cache';
import { knownFolders, path } from '@nativescript/core';

/**
 * Shared tile sources for the demos. Everything here is deliberately the same set the
 * native MassifDemo app uses (see DemoConfig.java), so a demo that misbehaves can be
 * compared side by side.
 */

const UA = { 'User-Agent': 'ui-massifmaps-demo' };

function cachePath(name: string) {
    return path.join(knownFolders.documents().path, name);
}

function cached(source: HTTPTileDataSource, database: string, capacityMb: number) {
    const cache = new PersistentCacheTileDataSource({
        dataSource: source,
        databasePath: cachePath(database)
    });
    cache.capacity = capacityMb * 1024 * 1024;
    return cache;
}

/**
 * One instance per source, for the whole process.
 *
 * Two PersistentCacheTileDataSource on the same database file fight over it, and the DEM
 * in particular is asked for by the terrain, the hillshade layer and the composite slot
 * at once - which is why the native demo keeps a single shared elevation source too.
 */
const shared: Record<string, any> = {};
function once<T>(key: string, build: () => T): T {
    if (!shared[key]) {
        shared[key] = build();
    }
    return shared[key];
}

/** plain OSM raster, good enough for anything that just needs a backdrop */
export function rasterSource(useCache = true) {
    return once(`raster-${useCache}`, () => {
        const source = new HTTPTileDataSource({
            minZoom: 0,
            maxZoom: 19,
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
            httpHeaders: UA
        });
        return useCache ? cached(source, 'massif_raster_cache.db', 200) : source;
    });
}

/**
 * OpenMapTiles-schema vector tiles (France). The base map, the peak labels and the
 * composite demo all read from this one - it is the master source of the native demo.
 */
export function vectorSource(useCache = true) {
    return once(`vector-${useCache}`, () => {
        const source = new HTTPTileDataSource({
            minZoom: 0,
            maxZoom: 14,
            url: 'https://tiles.akylas.fr/data/france/{z}/{x}/{y}.pbf',
            httpHeaders: UA
        });
        return useCache ? cached(source, 'massif_vector_cache.db', 200) : source;
    });
}

/** pre-baked contour vector tiles (layer 'contour', fields 'ele' + 'div'), zooms 11..14 */
export function contourSource(useCache = true) {
    return once(`contour-${useCache}`, () => {
        const source = new HTTPTileDataSource({
            minZoom: 11,
            maxZoom: 14,
            url: 'https://tiles.akylas.fr/data/contours/{z}/{x}/{y}.pbf',
            httpHeaders: UA
        });
        return useCache ? cached(source, 'massif_contours_cache.db', 100) : source;
    });
}

/**
 * Terrarium-encoded DEM. Terrain, hillshade, contours and the peak finder all read
 * elevation from this, so it is cached on disk - re-downloading a DEM tile per demo
 * makes the terrain visibly pop in. One terrain view asks for a whole pyramid of
 * elevation tiles, hence the much larger cache than the other sources.
 */
export function demSource(useCache = true) {
    return once(`dem-${useCache}`, () => {
        const source = new HTTPTileDataSource({
            minZoom: 1,
            maxZoom: 16,
            url: 'https://tiles.mapterhorn.com/{z}/{x}/{y}.webp',
            httpHeaders: UA
        });
        source.encoding = 'terrarium';
        return useCache ? cached(source, 'massif_dem_cache.db', 600) : source;
    });
}

/** somewhere with actual relief, so terrain demos are not a flat plain */
export const ALPS = { latitude: 45.1885, longitude: 6.4075 };
export const GRENOBLE = { latitude: 45.187362, longitude: 5.718957 };
/** the native demo's peak-finder viewpoint: Belledonne seen from the Grenoble valley */
export const PEAK_FINDER_VIEWPOINT = { latitude: 45.2185, longitude: 5.8815 };
