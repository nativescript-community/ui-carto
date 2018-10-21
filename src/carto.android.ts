import { _createImageSourceFromSrc, capitalize } from './carto.common';
import { Color } from 'tns-core-modules/color/color';
import { MapPos } from './core/core';
import { MapPosVector, MapPosVectorVector, toNativeMapPos } from './core/core.android';
import { Projection } from './projections/projection.android';

export const nativeProperty = (target: Object, key: string | symbol, converter?) => {
    const capKey = capitalize(key);
    const getterKey = 'get' + capKey;
    const setterKey = 'set' + capKey;
    // property getter
    const getter = function() {
        if (this.native) {
            let result = this.native[getterKey]();
            if (converter) {
                result = converter.fromNative(result, this);
            }
            return result;
        }
        return this.options[key];
    };

    // property setter
    const setter = function(value) {
        // console.log('calling setter for', key, setterKey, value);
        this.options[key] = value;
        if (this.native) {
            if (converter) {
                value = converter.toNative(value);
            }
            this.native[setterKey](value);
            this._buildStyle = null;
        }
    };
    // Create new property with getter and setter
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
};

export function nativeColorProperty(target: Object, key: string | symbol) {
    return nativeProperty(target, key, {
        fromNative(value) {
            return new Color(value.getARGB() as number).hex;
        },
        toNative(value) {
            const theColor = typeof value === 'string' ? new Color(value) : value;
            return new com.carto.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a);
        }
    });
}

export function nativeEnumProperty(enumType: any) {
    return function (target: Object, key: string | symbol) {
        return nativeProperty(target, key, {
            fromNative(value) {
                return value.ordinal();
            },
            toNative(value) {
                return enumType.values()[value];
            }
        });
    };
}

export function nativeCartoImageProperty(target: Object, key: string | symbol) {
    return nativeProperty(target, key, {
        fromNative(value, target) {
            return target.options[key];
        },
        toNative(value) {
            value = _createImageSourceFromSrc(value);
            return com.carto.utils.BitmapUtils.createBitmapFromAndroidBitmap(value.android as android.graphics.Bitmap);
        }
    });
}
export function nativeImageProperty(target: Object, key: string | symbol) {
    return nativeProperty(target, key, {
        fromNative(value, target) {
            return target.options[key];
        },
        toNative(value) {
            value = _createImageSourceFromSrc(value);
            return (value.android as android.graphics.Bitmap);
        }
    });
}

export function mapPosVectorFromArgs(poses: MapPosVector | MapPos[], projection?: Projection) {
    let nativePoses: com.carto.core.MapPosVector;
    console.log('mapPosVectorFromArgs', poses, poses instanceof MapPosVector);
    if (typeof (poses as any).getNative === 'function') {
        nativePoses = (poses as MapPosVector).getNative();
    } else {
        const arrayPoses = poses as MapPos[];
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

export function mapPosVectorVectorFromArgs(poses: MapPosVectorVector | MapPos[][], projection?: Projection) {
    let nativePoses: com.carto.core.MapPosVectorVector;
    if (typeof (poses as any).getNative === 'function') {
        nativePoses = (poses as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = poses as MapPos[][];
        nativePoses = new com.carto.core.MapPosVectorVector();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, projection));
        });
    }
    return nativePoses;
}
