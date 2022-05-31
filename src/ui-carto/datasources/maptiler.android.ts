import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class MapTilerOnlineTileDataSource extends DataSource<com.carto.datasources.MapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return new com.carto.datasources.MapTilerOnlineTileDataSource(options.key);
    }
}
