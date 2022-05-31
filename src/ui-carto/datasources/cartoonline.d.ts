import { DataSource, TileDataSourceOptions } from '.';

export interface CartoOnlineTileDataSourceOptions extends TileDataSourceOptions {
    source: string;
    timeout?: number;
}
export class CartoOnlineTileDataSource extends DataSource<any, CartoOnlineTileDataSourceOptions> {}
