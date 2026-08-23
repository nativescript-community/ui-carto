import { ImageAsset, ImageSource, Observable } from '@nativescript/core';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, MapPosVectorVector } from './core';
import { Geometry } from './geometry';
import { FeatureCollection } from './geometry/feature';
import { BaseVectorElementStyleBuilder } from './vectorelements';

/**
 * The surface API - the SDK's id/handle + JSON facade, typed from the SDK's own property table.
 *
 * Namespaced because it lives ALONGSIDE the object API below rather than replacing it, and both
 * spell a layer `MassifLayer` and a map `MassifMap`:
 *
 * ```ts
 * import { api } from '@nativescript-community/ui-massifmaps';
 *
 * const map = api.attach(mapView, { projection: 'EPSG:4326' });
 * map.addLayer('base', { type: 'vector', source: 'osm', style: 'streets' });
 * map.fog().set('rangeStart', 2.5);
 * map.on('map.clicked', (e) => console.log(e.getPos('clickPos')));
 * ```
 *
 * See `api/index.ts` for the whole surface.
 */
export * as api from './api';

export function getMassifBitmap(src: string | ImageSource | ImageAsset): any;

// type BaseInterface<T> = {
//     [K in keyof T]: T[K];
// };
// interface BaseNative<T, U> extends BaseInterface<U> {}
export abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    native: T;

    duringInit: boolean;
    constructor(options?: U, native?: T);
    initNativeView(native: T, options: U): void;
    getNative(): T;
    dispose();
}
export interface NativePropertyOptions {
    converter?: {
        fromNative: Function;
        toNative: Function;
    };
    defaultValue?: any;
    nativeGetterName?: string;
    nativeSetterName?: string;
    getConverter?: Function;
    ios?: {
        nativeGetterName?: string;
        nativeSetterName?: string;
    };
    android?: {
        nativeGetterName?: string;
        nativeSetterName?: string;
    };
}

export declare function nativeProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeProperty(...args);

export declare function mapPosVectorFromArgs<T = DefaultLatLonKeys>(positions: MapPosVector<T> | GenericMapPos<T>[], ignoreAltitude?: boolean): any;
export declare function featureCollectionFromArgs<T = DefaultLatLonKeys>(positions: FeatureCollection<T>): any;
export function styleFromArgs(style: BaseVectorElementStyleBuilder<any, any>): any;
export declare function geometryFromArgs<T = DefaultLatLonKeys>(geometry: Geometry<T>): any;
export declare function mapPosVectorVectorFromArgs<T = DefaultLatLonKeys>(positions: MapPosVectorVector<T> | GenericMapPos<T>[][], ignoreAltitude?: boolean): any;

export declare function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeColorProperty(...args);

export declare function nativeNColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeNColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeNColorProperty(...args);

export declare function nativeFontProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeFontProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeFontProperty(...args);

export declare function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeEnumProperty(...args);

export declare function nativeAndroidEnumProperty(enumClass, options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;

export declare function nativeMassifImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeMassifImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeMassifImageProperty(...args);

export declare function nativeImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeImageProperty(...args);

export declare function nativeMapVecProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeMapVecProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeMapVecProperty(...args);

import { NativeConverter } from './nativeclass.common';
/** shared by the @native*Property decorators and by bindNative() */
export declare const colorConverter: NativeConverter;
export declare const massifImageConverter: NativeConverter;
export declare const mapVecConverter: NativeConverter;
export declare const mapRangeConverter: NativeConverter;
export declare const stringListConverter: NativeConverter;
