import { HTTPTileDataSourceOptions } from './http';
import { DataSource } from './datasource';

export class HTTPTileDataSource extends DataSource<AKHTTPTileDataSource, HTTPTileDataSourceOptions> {
    createNative(options: HTTPTileDataSourceOptions) {
        return AKHTTPTileDataSource.alloc().initWithMinZoomMaxZoomBaseURL(options.minZoom, options.maxZoom, options.url);
    }
    set autoHD(value: boolean) {
        this.native.setAutoHD(value);
    }
    set httpHeaders(value: { [k: string]: string }) {
        const map = NTStringMap.alloc().init();
        for (const key in value) {
            map.setX(key, value[key]);
        }
        this.native.setHTTPHeaders(map);
    }
    set subdomains(value: string) {
        const array = value.split('');
        const vector = NTStringVector.alloc().init();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setSubdomains(vector);
    }
}
