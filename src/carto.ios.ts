import { _createImageSourceFromSrc, BaseNative, nativeProperty } from './carto.common';
import { Color } from '@nativescript/core';
import { MapPos, MapPosVector, MapPosVectorVector, toNativeMapPos } from './core';
import { Projection } from './projections';
import { NativePropertyOptions } from './carto';
export { BaseNative, nativeProperty };

export function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeColorProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    return new Color(value.getARGB() as number).hex;
                },
                toNative(value) {
                    const theColor = typeof value === 'string' ? new Color(value) : value;
                    return NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a);
                }
            }
        },
        ...args
    );
}
export function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeEnumProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    // return ABMultiValueCopyArrayOfAllValues;
                    return value.ordinal();
                },
                toNative(value) {
                    return value;
                    // return enumType.values()[value];
                }
            }
        },
        ...args
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
                    return NTBitmapUtils.createBitmapFromUIImage(value.ios as UIImage);
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
                    return value.ios as UIImage;
                }
            }
        },
        ...args
    );
}

// export function nativeColorProperty(target: Object, key: string | symbol) {
//     return nativeProperty(target, key, {
//         fromNative(value) {
//             return new Color(value.getARGB() as number).hex;
//         },
//         toNative(value) {
//             const theColor = typeof value === 'string' ? new Color(value) : value;
//             return NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a);
//         }
//     });
// }

// export function nativeCartoImageProperty(target: Object, key: string | symbol) {
//     return nativeProperty(target, key, {
//         fromNative(value, target) {
//             return target.options[key];
//         },
//         toNative(value) {
//             value = _createImageSourceFromSrc(value);
//             return NTBitmapUtils.createBitmapFromUIImage(value.ios as UIImage);
//         }
//     });
// }

// export function nativeImageProperty(target: Object, key: string | symbol) {
//     return nativeProperty(target, key, {
//         fromNative(value, target) {
//             return target.options[key];
//         },
//         toNative(value) {
//             value = _createImageSourceFromSrc(value);
//             return (value.ios as UIImage);
//         }
//     });
// }

export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], ignoreAltitude = true) {
    let nativePoses: NTMapPosVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[];
        nativePoses = NTMapPosVector.alloc().init();
        // if (projection) {
        //     arrayPoses.forEach(p => {
        //         nativePoses.add(projection.getNative().fromWgs84(toNativeMapPos(p, ignoreAltitude)));
        //     });
        // } else {
        arrayPoses.forEach(p => {
            nativePoses.add(toNativeMapPos(p, ignoreAltitude));
        });
        // }
    }
    return nativePoses;
}

export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], ignoreAltitude = false) {
    let nativePoses: NTMapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = NTMapPosVectorVector.alloc().init();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, ignoreAltitude));
        });
    }
    return nativePoses;
}
