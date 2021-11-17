import { CartoOnlineTileDataSourceOptions } from './cartoonline';
import { DataSource } from '.';

export class CartoOnlineTileDataSource extends DataSource<com.carto.datasources.CartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    createNative(options: CartoOnlineTileDataSourceOptions) {
        return new com.carto.datasources.CartoOnlineTileDataSource(options.source);
    }
}
