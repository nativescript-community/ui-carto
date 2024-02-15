import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';

export class MBTilesTileDataSource extends TileDataSource<NTMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return NTMBTilesTileDataSource.alloc().initWithMinZoomMaxZoomPathScheme(
                options.minZoom || 0,
                options.maxZoom || 24,
                options.databasePath, (options.scheme || NTMBTilesScheme.T_MBTILES_SCHEME_TMS) as any
            );
        } else {
            return NTMBTilesTileDataSource.alloc().initWithPath(options.databasePath);
        }
    }
}
