import { TileDataSource } from '../datasources';
import { VectorTileLayer } from './vector';

/**
 * Stub: MSFCompositeVectorTileLayer exists but this binding was never written. Methods warn once
 * instead of throwing; use `api.createLayer(id, { type: 'composite-vector', ... })` on iOS.
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
