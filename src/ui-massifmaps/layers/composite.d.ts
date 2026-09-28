import { VectorTileLayer, VectorTileLayerOptions } from './vector';
import { TileDataSource } from '../datasources';

/**
 * `RASTER` paints the tiles, `HILLSHADE` shades their DEM (decoder from the source's `encoding`),
 * `VECTOR` merges the source's layers into the master tile (e.g. contours).
 */
export const CompositeSourceType: {
    COMPOSITE_SOURCE_TYPE_RASTER: any;
    COMPOSITE_SOURCE_TYPE_HILLSHADE: any;
    COMPOSITE_SOURCE_TYPE_VECTOR: any;
};

export interface CompositeVectorTileLayerOptions extends VectorTileLayerOptions {}

/**
 * Each source draws where the style layer named after it sits; with no such layer it is never
 * drawn (the SDK only logs a warning). Android only: on iOS the source methods are warning no-ops -
 * use `api.createLayer(id, { type: 'composite-vector', ... })` there.
 */
export class CompositeVectorTileLayer extends VectorTileLayer {
    constructor(options: CompositeVectorTileLayerOptions, native?: any);
    /** true where the composite class actually exists (android) */
    readonly supported: boolean;
    addExternalDataSource(name: string, dataSource: TileDataSource<any, any>, type: any): void;
    /** shorthand for an external source of type VECTOR */
    addVectorDataSource(name: string, dataSource: TileDataSource<any, any>): void;
    removeExternalDataSource(name: string): boolean;
    getExternalDataSourceNames(): string[];
    setExternalDataSourceZoomLevelBias(name: string, bias: number): void;
    getExternalDataSourceZoomLevelBias(name: string): number;
    clearExternalDataSourceZoomLevelBias(name: string): void;
    setExternalDataSourceMaxOverzoomLevel(name: string, level: number): void;
}
