import { CartoOnlineTileDataSourceOptions } from './cartoonline.common';
import { DataSource } from './datasource';

export class CartoOnlineTileDataSource extends DataSource<com.carto.datasources.CartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    createNative(options: CartoOnlineTileDataSourceOptions) {
        return new com.carto.datasources.CartoOnlineTileDataSource(options.source);
    }
}
