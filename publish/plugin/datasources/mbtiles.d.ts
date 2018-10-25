import { DataSource, TileDataSourceOptions, TileDataSource } from './datasource';

export interface MBTilesTileDataSourceOptions extends TileDataSourceOptions {
    databasePath?: string;
}
export class MBTilesTileDataSource extends DataSource<any, MBTilesTileDataSourceOptions> {}
