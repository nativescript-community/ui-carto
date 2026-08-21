import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';
import { nativeProperty } from '..';
import {
    ACCESSORS as ACC_MapTilerOnlineTileDataSource,
    Accessors as Acc_MapTilerOnlineTileDataSource,
    METHODS as MET_MapTilerOnlineTileDataSource,
    Methods as Met_MapTilerOnlineTileDataSource,
    SELECTORS as SEL_MapTilerOnlineTileDataSource
} from '../bindings/datasources/MapTilerOnlineTileDataSource';
import { bindNative } from '../nativeclass.common';
import { ACCESSORS as ACC_TileDataSource, Accessors as Acc_TileDataSource, METHODS as MET_TileDataSource, Methods as Met_TileDataSource, SELECTORS as SEL_TileDataSource } from '../bindings/datasources/TileDataSource';

export class MapTilerOnlineTileDataSource extends DataSource<MSFMapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return MSFMapTilerOnlineTileDataSource.alloc().initWithKey(options.key);
    }
}

export interface MapTilerOnlineTileDataSource extends Acc_MapTilerOnlineTileDataSource, Met_MapTilerOnlineTileDataSource {}
bindNative(MapTilerOnlineTileDataSource, MET_MapTilerOnlineTileDataSource, ACC_MapTilerOnlineTileDataSource, { selectors: SEL_MapTilerOnlineTileDataSource });

export interface MapTilerOnlineTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'getProjection' | 'loadTile'> {}
bindNative(MapTilerOnlineTileDataSource, MET_TileDataSource, ACC_TileDataSource, { selectors: SEL_TileDataSource });
