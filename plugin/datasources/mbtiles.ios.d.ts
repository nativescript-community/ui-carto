import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from './datasource';
export declare class MBTilesTileDataSource extends TileDataSource<NTMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions): NTMBTilesTileDataSource;
}
