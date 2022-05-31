import { CartoOnlineTileDataSourceOptions } from './cartoonline';
import { DataSource } from '.';
import { nativeProperty } from '..';

export class CartoOnlineTileDataSource extends DataSource<NTCartoOnlineTileDataSource, CartoOnlineTileDataSourceOptions> {
    @nativeProperty timeout: number;
    createNative(options: CartoOnlineTileDataSourceOptions) {
        return NTCartoOnlineTileDataSource.alloc().initWithSource(options.source);
    }
}
