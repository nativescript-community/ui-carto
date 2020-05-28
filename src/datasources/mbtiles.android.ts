import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';

export class MBTilesTileDataSource extends TileDataSource<com.carto.datasources.MBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return new com.carto.datasources.MBTilesTileDataSource(options.minZoom, options.maxZoom, options.databasePath);
        } else {
            return new com.carto.datasources.MBTilesTileDataSource(options.databasePath);
        }
    }
}
