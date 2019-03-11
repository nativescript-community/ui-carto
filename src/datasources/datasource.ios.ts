import { BaseNative } from '../carto.common';
import { DataSourceOptions, MergeTileDataSourceOptions, OrderedTileDataSourceOptions, TileDataSourceOptions } from './datasource';

export abstract class DataSource<T extends NTTileDataSource, U extends DataSourceOptions> extends BaseNative<T, U> {}
export abstract class TileDataSource<T extends NTTileDataSource, U extends TileDataSourceOptions> extends BaseNative<T, U> {}

export class OrderedTileDataSource extends TileDataSource<NTOrderedTileDataSource, OrderedTileDataSourceOptions> {
    createNative(options: OrderedTileDataSourceOptions) {
        const dataSources: NTTileDataSource[] = options.dataSources.map(d => d.getNative());
        // const array = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
        // options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
        return NTOrderedTileDataSource.alloc().initWithDataSource1DataSource2(dataSources[0], dataSources[1]);
    }
}

// export class MergeTileDataSource extends TileDataSource<NTMergedMBVTTileDataSource, MergeTileDataSourceOptions> {
//     createNative(options: MergeTileDataSourceOptions) {
//         const array = Array.create(com.carto.datasources.TileDataSource, options.dataSources.length);
//         options.dataSources.forEach((d, i) => (array[i] = d.getNative()));
//         return new NTMergeTileDataSource(array);
//     }
// }
