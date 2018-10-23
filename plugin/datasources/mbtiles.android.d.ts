import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from './datasource';
export declare class MBTilesTileDataSource extends TileDataSource<com.akylas.carto.additions.AKMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions): com.akylas.carto.additions.AKMBTilesTileDataSource;
}
