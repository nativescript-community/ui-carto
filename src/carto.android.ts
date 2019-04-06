import { Color } from 'tns-core-modules/color/color';
import { _createImageSourceFromSrc, nativeProperty } from './carto.common';
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
//         console.log('calling setter for', key, setterKey, value);
//         this.options[key] = value;
//         if (this.native && this.native[setterKey]) {
//             if (converter) {
//                 value = converter.toNative(value);
//             }
//             this.native[setterKey](value);
//             this._buildStyle = null;
//         } else {
//             console.error('could not set native key', setterKey, 'on', this.native);
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
    const options = args[1] === undefined ? args[0] : undefined;
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    return new Color(value.getARGB() as number).hex;
                },
                toNative(value) {
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
    return nativeProperty(
        {
            // converter: {
            //     fromNative(value) {
            //         return value;
            //         // return value.ordinal();
            //     },
            //     toNative(value) {
            //         return value;
            //         // return enumType.values()[value];
            //     }
            // }
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

export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], projection?: Projection) {
    let nativePoses: com.carto.core.MapPosVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[];
        nativePoses = new com.carto.core.MapPosVector();
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
    let nativePoses: com.carto.core.MapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = new com.carto.core.MapPosVectorVector();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, projection));
        });
    }
    return nativePoses;
}
