import { HTTPTileDataSourceOptions } from './http';
import { DataSource } from './datasource';
export declare class HTTPTileDataSource extends DataSource<com.akylas.carto.additions.AKHTTPTileDataSource, HTTPTileDataSourceOptions> {
    createNative(options: HTTPTileDataSourceOptions): com.akylas.carto.additions.AKHTTPTileDataSource;
    autoHD: boolean;
    httpHeaders: {
        [k: string]: string;
    };
    subdomains: string;
}
