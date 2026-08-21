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

export const MBTilesScheme = {
    get MBTILES_SCHEME_TMS() {
        return com.massifmaps.datasources.MBTilesScheme.MBTILES_SCHEME_TMS;
    },
    get MBTILES_SCHEME_XYZ() {
        return com.massifmaps.datasources.MBTilesScheme.MBTILES_SCHEME_XYZ;
    }
};

export class MBTilesTileDataSource extends TileDataSource<com.massifmaps.datasources.MBTilesTileDataSource, MBTilesTileDataSourceOptions> {
    createNative(options: MBTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return new com.massifmaps.datasources.MBTilesTileDataSource(
                options.minZoom || 0,
                options.maxZoom || 24,
                options.databasePath,
                options.scheme || (com.massifmaps.datasources.MBTilesScheme.MBTILES_SCHEME_TMS as any)
            );
        } else {
            return new com.massifmaps.datasources.MBTilesTileDataSource(options.databasePath);
        }
    }
}

export interface MBTilesTileDataSource extends Acc_MBTilesTileDataSource, Omit<Met_MBTilesTileDataSource, 'loadTile'> {}
bindNative(MBTilesTileDataSource, MET_MBTilesTileDataSource, ACC_MBTilesTileDataSource, { selectors: SEL_MBTilesTileDataSource });
