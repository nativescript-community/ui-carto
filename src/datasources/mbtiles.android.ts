import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';

export class MBTilesTileDataSource extends TileDataSource<com.carto.datasources.MBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        return new com.carto.datasources.MBTilesTileDataSource(options.databasePath);
        // return new com.carto.datasources.MBTilesTileDataSource(options.minZoom, options.maxZoom, options.databasePath);
    }
}
