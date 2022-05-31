import { HTTPTileDataSourceOptions } from './http';
import { TileDataSource } from '.';
import { nativeProperty } from '..';

export class HTTPTileDataSource extends TileDataSource<NTHTTPTileDataSource, HTTPTileDataSourceOptions> {
    @nativeProperty({
        nativeGetterName: 'isTMSScheme'
    })
    TMSScheme: boolean;
    @nativeProperty maxAgeHeaderCheck: boolean;
    @nativeProperty baseUrl: string;
    @nativeProperty timeout: number;
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
