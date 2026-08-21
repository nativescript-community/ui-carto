import { MBTilesTileDataSourceOptions } from './mbtiles';
import { TileDataSource } from '.';
import {
    ACCESSORS as ACC_MBTilesTileDataSource,
    Accessors as Acc_MBTilesTileDataSource,
    METHODS as MET_MBTilesTileDataSource,
    Methods as Met_MBTilesTileDataSource,
    SELECTORS as SEL_MBTilesTileDataSource
} from '../bindings/datasources/MBTilesTileDataSource';
import { bindNative } from '../nativeclass.common';

export class MBTilesTileDataSource extends TileDataSource<MSFMBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return MSFMBTilesTileDataSource.alloc().initWithMinZoomMaxZoomPathScheme(
                options.minZoom || 0,
                options.maxZoom || 24,
                options.databasePath,
                (options.scheme || MSFMBTilesScheme.F_MBTILES_SCHEME_TMS) as any
            );
        } else {
            return MSFMBTilesTileDataSource.alloc().initWithPath(options.databasePath);
        }
    }
}

export interface MBTilesTileDataSource extends Acc_MBTilesTileDataSource, Omit<Met_MBTilesTileDataSource, 'loadTile'> {}
bindNative(MBTilesTileDataSource, MET_MBTilesTileDataSource, ACC_MBTilesTileDataSource, { selectors: SEL_MBTilesTileDataSource });
