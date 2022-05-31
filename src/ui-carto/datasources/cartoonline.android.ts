import { CartoOnlineTileDataSourceOptions } from './cartoonline';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class CartoOnlineTileDataSource extends DataSource<com.carto.datasources.CartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: CartoOnlineTileDataSourceOptions) {
        return new com.carto.datasources.CartoOnlineTileDataSource(options.source);
    }
}
