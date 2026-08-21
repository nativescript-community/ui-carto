import { HTTPTileDataSourceOptions } from './http';
import { TileDataSource } from '.';

import {
    ACCESSORS as ACC_HTTPTileDataSource,
    Accessors as Acc_HTTPTileDataSource,
    METHODS as MET_HTTPTileDataSource,
    Methods as Met_HTTPTileDataSource,
    SELECTORS as SEL_HTTPTileDataSource
} from '../bindings/datasources/HTTPTileDataSource';
import { bindNative } from '../nativeclass.common';
import { stringListConverter } from '..';

export class HTTPTileDataSource extends TileDataSource<MSFHTTPTileDataSource, HTTPTileDataSourceOptions> {
    /** @deprecated the native accessor is getBaseURL/setBaseURL - use `baseURL` */
    get baseUrl() {
        return this.baseURL;
    }
    set baseUrl(value: string) {
        this.baseURL = value;
    }
    /** the SDK accessor is isTMSScheme/setTMSScheme, which the table synthesises as `tmsScheme` */
    get TMSScheme(): boolean {
        return this.tmsScheme;
    }
    set TMSScheme(value: boolean) {
        this.tmsScheme = value;
    }
    createNative(options: HTTPTileDataSourceOptions) {
        return MSFHTTPTileDataSource.alloc().initWithMinZoomMaxZoomBaseURL(options.minZoom, options.maxZoom, options.url);
    }
    // set autoHD(value: boolean) {
    //     this.native.setAutoHD(value);
    // }
    set httpHeaders(value: { [k: string]: string }) {
        const map = MSFStringMap.alloc().init();
        for (const key in value) {
            map.setX(key, value[key]);
        }
        this.native.setHTTPHeaders(map);
    }
    set subdomains(value: string | string[]) {
        const array = Array.isArray(value) ? value : value.split('');
        const vector = MSFStringVector.alloc().init();
        for (let index = 0; index < array.length; index++) {
            vector.add(array[index]);
        }
        this.native.setSubdomains(vector);
    }
}

export interface HTTPTileDataSource extends Omit<Acc_HTTPTileDataSource, 'httpHeaders' | 'subdomains'>, Omit<Met_HTTPTileDataSource, 'loadTile'> {}
bindNative(HTTPTileDataSource, MET_HTTPTileDataSource, ACC_HTTPTileDataSource, { selectors: SEL_HTTPTileDataSource, converters: { subdomains: stringListConverter } });
