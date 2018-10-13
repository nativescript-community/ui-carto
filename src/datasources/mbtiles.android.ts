import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from './datasource';

export class MBTilesTileDataSource extends TileDataSource<com.akylas.carto.additions.AKMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        return new com.akylas.carto.additions.AKMBTilesTileDataSource(options.minZoom, options.maxZoom, options.databasePath);
    }
}
