import { VectorTileLayer, VectorTileLayerOptions } from './vector';
import { TileDataSource } from '../datasources';

/**
 * What an external source is drawn as, at the position of its style slot.
 *
 * `RASTER` paints the tiles (a satellite slot), `HILLSHADE` shades the DEM they carry (the
 * elevation decoder is resolved from the source's `encoding`), and `VECTOR` merges the
 * source's own layers into the master tile - which is what a contour source wants, and
 * what `addVectorDataSource` is shorthand for.
 */
export const CompositeSourceType: {
    COMPOSITE_SOURCE_TYPE_RASTER: any;
    COMPOSITE_SOURCE_TYPE_HILLSHADE: any;
    COMPOSITE_SOURCE_TYPE_VECTOR: any;
};

export interface CompositeVectorTileLayerOptions extends VectorTileLayerOptions {
    /** single-pass segmented rendering; the A/B switch of the composite renderer */
    singlePassRenderingEnabled?: boolean;
}

/**
 * One vector tile layer fed by SEVERAL sources, each woven into the style's own layer
 * order instead of stacking as a separate map layer.
 *
 * A SLOT is the position of a style layer carrying the source's name: attaching a source
 * called `hillshade` draws it where the style's `#hillshade` rule sits - under the roads,
 * over the landcover - which stacking layers cannot do. If the style declares no such
 * layer the source is registered and never drawn, and the SDK only warns in the log; use
 * `getExternalDataSourceNames()` against the decoder's `getStyleLayerNames()` to tell the
 * two apart. A COMPILED Mapnik XML style carries these slots too - the parser and the
 * generator both handle the hillshade/raster/contour config symbolizers - so a missing slot
 * means the style does not NAME that layer, not that the format cannot express it.
 *
 * THIS WRAPPER is android only: its iOS half is an unimplemented stub whose source methods
 * are no-ops that warn, so the map draws without the woven sources. That is a gap in this
 * object API, not in the SDK - MSFCompositeVectorTileLayer does exist, and the surface API
 * (`api.createLayer(id, { type: 'composite-vector', ... })`) reaches it on both platforms.
 */
export class CompositeVectorTileLayer extends VectorTileLayer {
    constructor(options: CompositeVectorTileLayerOptions, native?: any);
    /** true where the composite class actually exists (android) */
    readonly supported: boolean;
    singlePassRenderingEnabled: boolean;
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
