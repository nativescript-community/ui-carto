import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';

export class MapTilerOnlineTileDataSource extends DataSource<NTMapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return NTMapTilerOnlineTileDataSource.alloc().initWithKey(options.key);
    }
}
