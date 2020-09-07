import { DataSource, TileDataSource, TileDataSourceOptions } from '.';

export interface MBTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
}
export class MBTilesTileDataSource extends DataSource<any, MBTilesTileDataSourceOptions> {}
