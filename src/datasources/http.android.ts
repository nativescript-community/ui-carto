import { HTTPTileDataSourceOptions } from './http';
import { DataSource } from './datasource';

export class HTTPTileDataSource extends DataSource<com.akylas.carto.additions.AKHTTPTileDataSource, HTTPTileDataSourceOptions> {
    createNative(options: HTTPTileDataSourceOptions) {
        return new com.akylas.carto.additions.AKHTTPTileDataSource(options.minZoom, options.maxZoom, options.url);
    }
    set autoHD(value: boolean) {
        this.native.setAutoHD(value);
    }
    set httpHeaders(value: { [k: string]: string }) {
        const map = new com.carto.core.StringMap();
        for (const key in value) {
            map.set(key, value[key]);
        }
        this.native.setHTTPHeaders(map);
    }
    set subdomains(value: string) {
        const array = value.split('');
        const vector = new com.carto.core.StringVector();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setSubdomains(vector);
    }
}
