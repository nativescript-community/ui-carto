import { CartoOnlineTileDataSourceOptions } from './cartoonline';
import { DataSource } from '.';

export class CartoOnlineTileDataSource extends DataSource<NTCartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    createNative(options: CartoOnlineTileDataSourceOptions) {
        return NTCartoOnlineTileDataSource.alloc().initWithSource(options.source);
    }
}
