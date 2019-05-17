import { BaseNative } from '../carto.common';
import { DataSourceOptions, MergedMBVTTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';

export abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {
    createNative(options) {
        return null;
    }
}

export class OrderedTileDataSource extends TileDataSource<NTOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map(d => d.getNative());
        return NTOrderedTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

export class MergedMBVTTileDataSource extends TileDataSource<NTMergedMBVTTileDataSource, MergedMBVTTileDataSourceOptions> {
    createNative(options: MergedMBVTTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map(d => d.getNative());
        return NTMergedMBVTTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}
