import { DataSource, TileDataSourceOptions } from './datasource';

export interface CartoOnlineTileDataSourceOptions extends TileDataSourceOptions {
    source: string;
}
export class CartoOnlineTileDataSource extends DataSource<any, CartoOnlineTileDataSourceOptions> {}