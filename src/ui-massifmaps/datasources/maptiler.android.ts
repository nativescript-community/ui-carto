import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class MapTilerOnlineTileDataSource extends DataSource<com.massifmaps.datasources.MapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return new com.massifmaps.datasources.MapTilerOnlineTileDataSource(options.key);
    }
}
