import { PMTilesTileDataSourceOptions } from './pmtiles';
import { TileDataSource } from '.';

export class PMTilesTileDataSource extends TileDataSource<MSFPMTilesTileDataSource, PMTilesTileDataSourceOptions> {
    createNative(options: PMTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return MSFPMTilesTileDataSource.alloc().initWithMinZoomMaxZoomPath(options.minZoom || 0, options.maxZoom || 24, options.databasePath);
        } else {
            return MSFPMTilesTileDataSource.alloc().initWithPath(options.databasePath);
        }
    }
}
