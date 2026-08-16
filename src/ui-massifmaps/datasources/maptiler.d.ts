import { TileDataSource, TileDataSourceOptions } from '.';

export interface MapTilerOnlineTileDataSourceOptions extends TileDataSourceOptions {
    key: string;
    timeout?: number;
}
export class MapTilerOnlineTileDataSource extends TileDataSource<any, MapTilerOnlineTileDataSourceOptions> {}
