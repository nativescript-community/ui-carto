import { TileDataSource, TileDataSourceOptions } from '.';
import { Accessors as Acc_MapTilerOnlineTileDataSource, Methods as Met_MapTilerOnlineTileDataSource } from '../bindings/datasources/MapTilerOnlineTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';

export interface MapTilerOnlineTileDataSourceOptions extends TileDataSourceOptions {
    key: string;
    timeout?: number;
}
export class MapTilerOnlineTileDataSource extends TileDataSource<any, MapTilerOnlineTileDataSourceOptions> {}

export interface MapTilerOnlineTileDataSource extends Acc_MapTilerOnlineTileDataSource, Met_MapTilerOnlineTileDataSource {}

export interface MapTilerOnlineTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'loadTile'> {}
