import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';

export class MBTilesTileDataSource extends TileDataSource<MSFMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return MSFMBTilesTileDataSource.alloc().initWithMinZoomMaxZoomPathScheme(
                options.minZoom || 0,
                options.maxZoom || 24,
                options.databasePath, (options.scheme || MSFMBTilesScheme.T_MBTILES_SCHEME_TMS) as any
            );
        } else {
            return MSFMBTilesTileDataSource.alloc().initWithPath(options.databasePath);
        }
    }
}
