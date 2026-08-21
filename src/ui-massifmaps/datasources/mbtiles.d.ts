import { DataSource, TileDataSource, TileDataSourceOptions } from '.';
import { Accessors as Acc_MBTilesTileDataSource } from '../bindings/datasources/MBTilesTileDataSource';
import { Methods as Met_MBTilesTileDataSource } from '../bindings/datasources/MBTilesTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';

export enum MBTilesScheme {
    MBTILES_SCHEME_TMS,
    MBTILES_SCHEME_XYZ
}

export interface MBTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
    scheme?: MBTilesScheme;
}
export class MBTilesTileDataSource extends TileDataSource<any, MBTilesTileDataSourceOptions> {}

export interface MBTilesTileDataSource extends Acc_MBTilesTileDataSource, Met_MBTilesTileDataSource {}

export interface MBTilesTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getDataExtent' | 'getMaxZoom' | 'getMetaData' | 'getMinZoom' | 'loadTile'> {}
