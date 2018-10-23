import { CartoOnlineTileDataSourceOptions } from './cartoonline.common';
import { DataSource } from './datasource';
export declare class CartoOnlineTileDataSource extends DataSource<com.carto.datasources.CartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    createNative(options: CartoOnlineTileDataSourceOptions): com.carto.datasources.CartoOnlineTileDataSource;
}
