import { HTTPTileDataSourceOptions } from './http';
import { TileDataSource } from '.';
import { nativeProperty } from '..';

export class HTTPTileDataSource extends TileDataSource<com.massifmaps.datasources.HTTPTileDataSource, HTTPTileDataSourceOptions> {
    @nativeProperty({
        nativeGetterName: 'isTMSScheme'
    })
    TMSScheme: boolean;
    @nativeProperty maxAgeHeaderCheck: boolean;
    @nativeProperty baseUrl: string;
    @nativeProperty timeout: number;
    createNative(options: HTTPTileDataSourceOptions) {
        return new com.massifmaps.datasources.HTTPTileDataSource(options.minZoom, options.maxZoom, options.url);
    }
    // set autoHD(value: boolean) {
    //     this.native.setAutoHD(value);
    // }
    set httpHeaders(value: { [k: string]: string }) {
        const map = new com.massifmaps.core.StringMap();
        for (const key in value) {
            map.set(key, value[key]);
        }
        this.native.setHTTPHeaders(map);
    }
    set subdomains(value: string | string[]) {
        const array = Array.isArray(value) ? value : value.split('');
        const vector = new com.massifmaps.core.StringVector();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setSubdomains(vector);
    }
}
