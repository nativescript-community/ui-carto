import { HTTPTileDataSourceOptions } from './http';
import { DataSource } from '.';
import { nativeProperty } from '../carto.common';

export class HTTPTileDataSource extends DataSource<NTHTTPTileDataSource, HTTPTileDataSourceOptions> {
    @nativeProperty({
        nativeGetterName: 'isTMSScheme'
    })
    TMSScheme: boolean;
    @nativeProperty maxAgeHeaderCheck: boolean;
    @nativeProperty baseUrl: string;
    createNative(options: HTTPTileDataSourceOptions) {
        return NTHTTPTileDataSource.alloc().initWithMinZoomMaxZoomBaseURL(options.minZoom, options.maxZoom, options.url);
    }
    // set autoHD(value: boolean) {
    //     this.native.setAutoHD(value);
    // }
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
