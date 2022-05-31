import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class MapTilerOnlineTileDataSource extends DataSource<NTMapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return NTMapTilerOnlineTileDataSource.alloc().initWithKey(options.key);
    }
}
