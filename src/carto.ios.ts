import { _createImageSourceFromSrc, capitalize, nativeProperty } from './carto.common';
import { Color } from 'tns-core-modules/color/color';
import { MapPos, MapPosVector, MapPosVectorVector, toNativeMapPos } from './core/core';
import { Projection } from './projections/projection';
import { NativePropertyOptions } from './carto';

// export const nativeProperty = (target: Object, key: string | symbol, converter?) => {
//     const capKey = capitalize(key);
//     const getterKey = 'get' + capKey;
//     const setterKey = 'set' + capKey;
//     // property getter
//     const getter = function() {
//         if (this.native) {
//             let result = this.native[getterKey]();
//             if (converter) {
//                 result = converter.fromNative(result, this);
//             }
//             return result;
//         }
//         return this.options[key];
//     };

//     // property setter
//     const setter = function(value) {
//         this.options[key] = value;
//         if (this.native) {
//             if (converter) {
//                 value = converter.toNative(value);
//             }
//             this.native[setterKey](value);
//             this._buildStyle = null;
//         }
//     };
//     // Create new property with getter and setter
//     Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//         enumerable: true,
//         configurable: true
//     });
// };

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

export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], projection?: Projection) {
    let nativePoses: NTMapPosVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[];
        nativePoses = NTMapPosVector.alloc().init();
        if (projection) {
            arrayPoses.forEach(p => {
                nativePoses.add(projection.getNative().fromWgs84(toNativeMapPos(p)));
            });
        } else {
            arrayPoses.forEach(p => {
                nativePoses.add(toNativeMapPos(p));
            });
        }
    }
    return nativePoses;
}

export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], projection?: Projection) {
    let nativePoses: NTMapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = NTMapPosVectorVector.alloc().init();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, projection));
        });
    }
    return nativePoses;
}
