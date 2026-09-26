import { TileDataSource } from '../datasources';
import { VectorTileLayer } from './vector';

/**
 * iOS fallback: a plain VectorTileLayer, so the base map draws but the external sources are
 * not woven into it. Every composite method warns once rather than throwing, so the same
 * demo code runs on both platforms.
 *
 * NOT because the class is missing - MSFCompositeVectorTileLayer is in the generated iOS
 * metadata, with the whole external-source API on it. This binding was simply never written,
 * and the ObjC selectors differ (addExternalDataSourceDataSourceType), which is what it
 * would have to bridge. Code that needs the slots on iOS today goes through the surface API:
 * `api.createLayer(id, { type: 'composite-vector', ... })`, which reaches the C++ directly.
 */

export const CompositeSourceType = {
    COMPOSITE_SOURCE_TYPE_RASTER: 0,
    COMPOSITE_SOURCE_TYPE_HILLSHADE: 1,
    COMPOSITE_SOURCE_TYPE_VECTOR: 2
};

let warned = false;
function unsupported(method: string) {
    if (!warned) {
        warned = true;
        console.warn(`CompositeVectorTileLayer is android only - ${method} does nothing on iOS`);
    }
}

export class CompositeVectorTileLayer extends VectorTileLayer {
    readonly supported = false;

    addExternalDataSource(name: string, dataSource: TileDataSource<any, any>, type: any) {
        unsupported('addExternalDataSource');
    }
    addVectorDataSource(name: string, dataSource: TileDataSource<any, any>) {
        unsupported('addVectorDataSource');
    }
    removeExternalDataSource(name: string) {
        unsupported('removeExternalDataSource');
        return false;
    }
    getExternalDataSourceNames(): string[] {
        return [];
    }
    setExternalDataSourceZoomLevelBias(name: string, bias: number) {
        unsupported('setExternalDataSourceZoomLevelBias');
    }
    getExternalDataSourceZoomLevelBias(name: string) {
        return 0;
    }
    clearExternalDataSourceZoomLevelBias(name: string) {
        unsupported('clearExternalDataSourceZoomLevelBias');
    }
    setExternalDataSourceMaxOverzoomLevel(name: string, level: number) {
        unsupported('setExternalDataSourceMaxOverzoomLevel');
    }
}
