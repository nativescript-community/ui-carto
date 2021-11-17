import { TileDataSource, TileDataSourceOptions } from '.';

export interface MapTilerOnlineTileDataSourceOptions extends TileDataSourceOptions {
    key: string;
}
export class MapTilerOnlineTileDataSource extends TileDataSource<any, MapTilerOnlineTileDataSourceOptions> {}
