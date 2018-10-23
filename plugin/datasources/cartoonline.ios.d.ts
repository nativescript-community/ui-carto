import { CartoOnlineTileDataSourceOptions } from './cartoonline.common';
import { DataSource } from './datasource';
export declare class CartoOnlineTileDataSource extends DataSource<NTCartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    createNative(options: CartoOnlineTileDataSourceOptions): NTCartoOnlineTileDataSource;
}
