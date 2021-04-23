import { MapTilerOnlineTileDataSourceOptions } from './maptiler';
import { DataSource } from '.';

export class MapTilerOnlineTileDataSource extends DataSource<com.carto.datasources.MapTilerOnlineTileDataSource, MapTilerOnlineTileDataSourceOptions> {
    createNative(options: MapTilerOnlineTileDataSourceOptions) {
        return new com.carto.datasources.MapTilerOnlineTileDataSource(options.key);
    }
}
