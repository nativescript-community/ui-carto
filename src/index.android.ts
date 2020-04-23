import { Color } from '@nativescript/core/color';
import { NativePropertyOptions } from '.';
import { BaseNative, _createImageSourceFromSrc, nativeProperty } from './index.common';
import { DefaultLatLonKeys, GenericMapPos, MapPos, MapPosVector, MapPosVectorVector, toNativeMapPos } from './core';
export { BaseNative, nativeProperty };

export function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeColorProperty(...args) {
    const options = args[1] === undefined ? args[0] : undefined;
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    return new Color(value.getARGB() as number).hex;
                },
                toNative(value) {
                    // console.log('nativeColorProperty', 'toNative', value, new Error().stack);
                    const theColor = typeof value === 'string' ? new Color(value) : value;
                    return new com.carto.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a);
                }
            }
        },
        ...args
    );
}
export function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeEnumProperty(...args) {
    return nativeProperty({}, ...args);
}
export function nativeAndroidEnumProperty(androidEnum, options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any {
    // console.log('nativeAndroidEnumProperty', androidEnum, options);
    return nativeProperty(
        Object.assign(options || {}, {
            converter: {
                fromNative(value: typeof androidEnum) {
                    // console.log('nativeAndroidEnumProperty', 'fromNative', value, value.swigValue());
                    return value.swigValue();
                },
                toNative(value: any) {
                    // console.log('nativeAndroidEnumProperty', 'fromNtoNativeative', value, androidEnum, androidEnum.swigToEnum(value));
                    return androidEnum.swigToEnum(value);
                }
            }
        })
    );
}

export function nativeCartoImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeCartoImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeCartoImageProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value, key) {
                    return this.options[key];
                },
                toNative(value) {
                    value = _createImageSourceFromSrc(value);
                    return com.carto.utils.BitmapUtils.createBitmapFromAndroidBitmap(value.android as android.graphics.Bitmap);
                }
            }
        },
        ...args
    );
}

export function nativeImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeImageProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value, key) {
                    return this.options[key];
                },
                toNative(value) {
                    value = _createImageSourceFromSrc(value);
                    return value.android as android.graphics.Bitmap;
                }
            }
        },
        ...args
    );
}

export function mapPosVectorFromArgs<T = DefaultLatLonKeys>(positions: MapPosVector<T> | GenericMapPos<T>[], ignoreAltitude = true) {
    let nativePoses: com.carto.core.MapPosVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector<T>).getNative();
    } else {
        const arrayPoses = positions as GenericMapPos<T>[];
        nativePoses = new com.carto.core.MapPosVector();
        // if (projection) {
        //     arrayPoses.forEach(p => {
        //         nativePoses.add(projection.getNative().fromWgs84(toNativeMapPos(p)));
        //     });
        // } else {
        arrayPoses.forEach(p => {
            nativePoses.add(toNativeMapPos<T>(p, ignoreAltitude));
        });
        // }
    }
    return nativePoses;
}

export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], ignoreAltitude = true) {
    let nativePoses: com.carto.core.MapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = new com.carto.core.MapPosVectorVector();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, ignoreAltitude));
        });
    }
    return nativePoses;
}
