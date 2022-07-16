import { BaseNative } from '..';
import { Projection } from '../projections';
import { FeatureCollection } from '../geometry/feature';

export interface DataSourceOptions {
    minZoom?: number;
    maxZoom?: number;
}
export interface TileDataSourceOptions extends DataSourceOptions {
    maxOverzoomLevel?: number;
}
export abstract class DataSource<T, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection(): Projection;
}
export class TileDataSource<T, U extends TileDataSourceOptions> extends DataSource<T, U> {
    minZoom?: number;
    maxZoom?: number;
    maxOverzoomLevel: number;

    loadTile(x, y, z): any;
}

export interface OrderedTileDataSourceOptions extends TileDataSourceOptions {
    dataSources: TileDataSource<any, any>[];
}
export interface CombinedTileDataSourceOptions extends TileDataSourceOptions {
    dataSources: TileDataSource<any, any>[];
    zoomLevel: number;
}
export interface MultiTileDataSourceOptions extends TileDataSourceOptions {
    maxOpenedPackages?: number;
}
export class OrderedTileDataSource<T, U extends OrderedTileDataSourceOptions> extends TileDataSource<T, U> {}

export interface MergedMBVTTileDataSourceOptions extends TileDataSourceOptions {
    dataSources: TileDataSource<any, any>[];
}
export class MergedMBVTTileDataSource<T, U extends MergedMBVTTileDataSourceOptions> extends TileDataSource<T, U> {}
export class CombinedTileDataSource<T, U extends CombinedTileDataSourceOptions> extends TileDataSource<T, U> {}
export class MultiTileDataSource<T, U extends MultiTileDataSourceOptions> extends TileDataSource<T, U> {
    add(source: TileDataSource<any, any>, tileMask?: string);
    remove(source: TileDataSource<any, any>);
}

export interface GeoJSONVectorTileDataSourceOptions extends TileDataSourceOptions {
    simplifyTolerance?: number;
    defaultLayerBuffer?: number;
}
export class GeoJSONVectorTileDataSource extends TileDataSource<any, GeoJSONVectorTileDataSourceOptions> {
    simplifyTolerance: number;
    defaultLayerBuffer: number;
    createLayer(name: string): number;
    deleteLayer(index: number);
    setLayerFeatureCollection(layerIndex: number, projection: Projection, featureCollection: FeatureCollection);
    setLayerGeoJSON(layerIndex: number, geoJSON: Object);
    setLayerGeoJSONString(layerIndex: number, geoJSON: string);
}
