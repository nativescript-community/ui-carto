import { Observable } from 'tns-core-modules/data/observable';
import { MapPos, MapPosVector, MapPosVectorVector } from './core/core';
import { Projection } from './projections/projection';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';

export abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    native: T;
    constructor(options?: U, native?: T);
    initNativeView(native: T, options: U): void;
    getNative(): T;
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

export declare function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], projection?: Projection): any;
export declare function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], projection?: Projection): any;

export declare function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeColorProperty(...args);
export declare function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeEnumProperty(...args);

export declare function nativeCartoImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeCartoImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeCartoImageProperty(...args);

export declare function nativeImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export declare function nativeImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export declare function nativeImageProperty(...args);

