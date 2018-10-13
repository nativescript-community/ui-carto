import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from './datasource';

export class MBTilesTileDataSource extends TileDataSource<NTMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        return NTMBTilesTileDataSource.alloc().initWithMinZoomMaxZoomPath(options.minZoom, options.maxZoom, options.databasePath);
    }
}
