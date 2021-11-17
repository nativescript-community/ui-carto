import { TileDataSource, TileDataSourceOptions } from '.';
export interface HTTPTileDataSourceOptions extends TileDataSourceOptions {
    url: string;
    httpHeaders?: { [k: string]: string };
    // autoHD?: boolean;
    subdomains?: string;
}
export class HTTPTileDataSource extends TileDataSource<any, HTTPTileDataSourceOptions> {}
