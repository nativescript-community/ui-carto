import { PMTilesTileDataSourceOptions } from './pmtiles';
import { TileDataSource } from '.';

export class PMTilesTileDataSource extends TileDataSource<com.carto.datasources.PMTilesTileDataSource, PMTilesTileDataSourceOptions> {
    createNative(options: PMTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return new com.carto.datasources.PMTilesTileDataSource(options.minZoom || 0, options.maxZoom || 24, options.databasePath);
        } else {
            return new com.carto.datasources.PMTilesTileDataSource(options.databasePath);
        }
    }
}
