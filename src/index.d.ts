/* eslint-disable no-redeclare */
import { Observable } from '@nativescript/core/data/observable';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector, MapPosVectorVector } from './core';
import { FeatureCollection } from './geometry/feature';

export abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    native: T;
    constructor(options?: U, native?: T);
    initNativeView(native: T, options: U): void;
    getNative(): T;
    log(...args);
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
export declare function geometryFromArgs<T = DefaultLatLonKeys>(geometry: Geometry<T>): any;
export declare function mapPosVectorVectorFromArgs<T = DefaultLatLonKeys>(positions: MapPosVectorVector<T> | GenericMapPos<T>[][], ignoreAltitude?: boolean): any;

export declare function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeColorProperty(...args);
export declare function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeEnumProperty(...args);

export declare function nativeAndroidEnumProperty(enumClass, options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;

export declare function nativeCartoImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeCartoImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeCartoImageProperty(...args);

export declare function nativeImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeImageProperty(...args);

export declare function nativeMapVecProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeMapVecProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeMapVecProperty(...args);
