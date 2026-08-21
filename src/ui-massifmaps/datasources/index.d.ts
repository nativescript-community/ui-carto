import { BaseNative } from '..';
import { Projection } from '../projections';
import { FeatureCollection } from '../geometry/feature';
import { Accessors as Acc_MergedMBVTTileDataSource } from '../bindings/datasources/MergedMBVTTileDataSource';
import { Accessors as Acc_MultiTileDataSource } from '../bindings/datasources/MultiTileDataSource';
import { Methods as Met_MergedMBVTTileDataSource } from '../bindings/datasources/MergedMBVTTileDataSource';
import { Methods as Met_MultiTileDataSource } from '../bindings/datasources/MultiTileDataSource';
import { Accessors as Acc_OrderedTileDataSource, Methods as Met_OrderedTileDataSource } from '../bindings/datasources/OrderedTileDataSource';
import { Accessors as Acc_CombinedTileDataSource, Methods as Met_CombinedTileDataSource } from '../bindings/datasources/CombinedTileDataSource';
import { Accessors as Acc_GeoJSONVectorTileDataSource, Methods as Met_GeoJSONVectorTileDataSource } from '../bindings/datasources/GeoJSONVectorTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';

export interface DataSourceOptions {
    minZoom?: number;
    maxZoom?: number;
}
export interface TileDataSourceOptions extends DataSourceOptions {
    maxOverzoomLevel?: number;
    encoding?: string;
}
export abstract class DataSource<T, U extends DataSourceOptions> extends BaseNative<T, U> {
    getProjection(): Projection;
}
export class TileDataSource<T, U extends TileDataSourceOptions> extends DataSource<T, U> {
    minZoom?: number;
    maxZoom?: number;
    maxOverzoomLevel?: number;
    encoding?: string;

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
    maxOpenedPackages: number;
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
    setLayerGeoJSON(layerIndex: number, geoJSON: object);
    setLayerGeoJSONString(layerIndex: number, geoJSON: string | object);
    addGeoJSONFeature(layerIndex: number, geoJSON: object);
    addGeoJSONStringFeature(layerIndex: number, geoJSON: string | object);
    updateGeoJSONFeature(layerIndex: number, geoJSON: object);
    updateGeoJSONStringFeature(layerIndex: number, geoJSON: string | object);
    removeGeoJSONFeature(layerIndex: number, id: string | number);
}





export interface GeoJSONVectorTileDataSource
    extends Omit<Acc_GeoJSONVectorTileDataSource, 'defaultLayerBuffer' | 'simplifyTolerance'>, Omit<Met_GeoJSONVectorTileDataSource, 'addGeoJSONFeature' | 'addGeoJSONStringFeature' | 'createLayer' | 'deleteLayer' | 'removeGeoJSONFeature' | 'setLayerFeatureCollection' | 'setLayerGeoJSON' | 'setLayerGeoJSONString' | 'updateGeoJSONFeature' | 'updateGeoJSONStringFeature'> {}

export interface TileDataSource<T, U extends TileDataSourceOptions> extends Omit<Acc_TileDataSource, 'encoding' | 'maxOverzoomLevel'>, Omit<Met_TileDataSource, 'loadTile'> {}

export interface GeoJSONVectorTileDataSource extends Omit<Acc_GeoJSONVectorTileDataSource, 'defaultLayerBuffer' | 'simplifyTolerance'>, Omit<Met_GeoJSONVectorTileDataSource, 'addGeoJSONFeature' | 'addGeoJSONStringFeature' | 'createLayer' | 'deleteLayer' | 'removeGeoJSONFeature' | 'setLayerFeatureCollection' | 'setLayerGeoJSON' | 'setLayerGeoJSONString' | 'updateGeoJSONFeature' | 'updateGeoJSONStringFeature'> {}

export interface OrderedTileDataSource<T, U extends OrderedTileDataSourceOptions> extends Acc_OrderedTileDataSource, Met_OrderedTileDataSource {}

export interface CombinedTileDataSource<T, U extends CombinedTileDataSourceOptions> extends Acc_CombinedTileDataSource, Met_CombinedTileDataSource {}

export interface MergedMBVTTileDataSource<T, U extends MergedMBVTTileDataSourceOptions> extends Acc_MergedMBVTTileDataSource, Met_MergedMBVTTileDataSource {}

export interface MultiTileDataSource<T, U extends MultiTileDataSourceOptions> extends Acc_MultiTileDataSource, Omit<Met_MultiTileDataSource, 'add' | 'remove'> {}

export interface OrderedTileDataSource<T, U extends OrderedTileDataSourceOptions> extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile'> {}

export interface CombinedTileDataSource<T, U extends CombinedTileDataSourceOptions> extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile'> {}

export interface MergedMBVTTileDataSource<T, U extends MergedMBVTTileDataSourceOptions> extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMinZoom' | 'loadTile'> {}

export interface GeoJSONVectorTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'loadTile'> {}

export interface MultiTileDataSource<T, U extends MultiTileDataSourceOptions> extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMinZoom' | 'loadTile'> {}
