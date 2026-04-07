import { PMTilesTileDataSourceOptions } from './pmtiles';
import { TileDataSource } from '.';

export class PMTilesTileDataSource extends TileDataSource<NTPMTilesTileDataSource, PMTilesTileDataSourceOptions> {
    createNative(options: PMTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return NTPMTilesTileDataSource.alloc().initWithMinZoomMaxZoomPath(options.minZoom || 0, options.maxZoom || 24, options.databasePath);
        } else {
            return NTPMTilesTileDataSource.alloc().initWithPath(options.databasePath);
        }
    }
}
