import { HTTPTileDataSourceOptions } from './http';
import { DataSource } from './datasource';
export declare class HTTPTileDataSource extends DataSource<AKHTTPTileDataSource, HTTPTileDataSourceOptions> {
    createNative(options: HTTPTileDataSourceOptions): AKHTTPTileDataSource;
    autoHD: boolean;
    httpHeaders: {
        [k: string]: string;
    };
    subdomains: string;
}
