import { PMTilesTileDataSourceOptions } from './pmtiles';
import { TileDataSource } from '.';
import {
    ACCESSORS as ACC_PMTilesTileDataSource,
    Accessors as Acc_PMTilesTileDataSource,
    METHODS as MET_PMTilesTileDataSource,
    Methods as Met_PMTilesTileDataSource,
    SELECTORS as SEL_PMTilesTileDataSource
} from '../bindings/datasources/PMTilesTileDataSource';
import { bindNative } from '../nativeclass.common';

export class PMTilesTileDataSource extends TileDataSource<com.massifmaps.datasources.PMTilesTileDataSource, PMTilesTileDataSourceOptions> {
    createNative(options: PMTilesTileDataSourceOptions) {
        if (options.hasOwnProperty('minZoom') || options.hasOwnProperty('maxZoom')) {
            return new com.massifmaps.datasources.PMTilesTileDataSource(options.minZoom || 0, options.maxZoom || 24, options.databasePath);
        } else {
            return new com.massifmaps.datasources.PMTilesTileDataSource(options.databasePath);
        }
    }
}

export interface PMTilesTileDataSource extends Acc_PMTilesTileDataSource, Omit<Met_PMTilesTileDataSource, 'loadTile'> {}
bindNative(PMTilesTileDataSource, MET_PMTilesTileDataSource, ACC_PMTilesTileDataSource, { selectors: SEL_PMTilesTileDataSource });
