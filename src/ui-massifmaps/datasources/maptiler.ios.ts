import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class MapTilerOnlineTileDataSource extends DataSource<MSFMapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return MSFMapTilerOnlineTileDataSource.alloc().initWithKey(options.key);
    }
}
