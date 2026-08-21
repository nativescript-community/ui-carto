import { DataSource, TileDataSource, TileDataSourceOptions } from '.';
import { Accessors as Acc_PMTilesTileDataSource, Methods as Met_PMTilesTileDataSource } from '../bindings/datasources/PMTilesTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';

export enum PMTilesScheme {
    PMTILES_SCHEME_TMS,
    PMTILES_SCHEME_XYZ
}

export interface PMTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
    scheme?: PMTilesScheme;
}
export class PMTilesTileDataSource extends TileDataSource<any, PMTilesTileDataSourceOptions> {}

export interface PMTilesTileDataSource extends Acc_PMTilesTileDataSource, Met_PMTilesTileDataSource {}

export interface PMTilesTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile'> {}
