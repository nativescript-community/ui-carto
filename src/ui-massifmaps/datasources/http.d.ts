import { Accessors as HTTPTileDataSourceAccessors } from '../bindings/datasources/HTTPTileDataSource';
import { TileDataSource, TileDataSourceOptions } from '.';
import { Accessors as Acc_HTTPTileDataSource, Methods as Met_HTTPTileDataSource } from '../bindings/datasources/HTTPTileDataSource';
import { Accessors as Acc_TileDataSource, Methods as Met_TileDataSource } from '../bindings/datasources/TileDataSource';
export interface HTTPTileDataSourceOptions extends TileDataSourceOptions {
    url: string;
    httpHeaders?: { [k: string]: string };
    // autoHD?: boolean;
    subdomains?: string;
    timeout?: number;
}
export interface HTTPTileDataSource extends Omit<HTTPTileDataSourceAccessors, 'httpHeaders' | 'subdomains'> {}
export class HTTPTileDataSource extends TileDataSource<any, HTTPTileDataSourceOptions> {
    /** @deprecated the native accessor is getBaseURL/setBaseURL - use `baseURL` */
    baseUrl: string;
    TMSScheme: boolean;
    httpHeaders: { [k: string]: string };
    subdomains: string | string[];
}

export interface HTTPTileDataSource extends Omit<Acc_HTTPTileDataSource, 'httpHeaders' | 'subdomains'>, Met_HTTPTileDataSource {}

export interface HTTPTileDataSource extends Acc_TileDataSource, Omit<Met_TileDataSource, 'loadTile'> {}
