import { _createImageSourceFromSrc, capitalize } from './carto.common';
import { Color } from 'tns-core-modules/color/color';
import { MapPos } from './core/core';
import { MapPosVector, MapPosVectorVector, toNativeMapPos } from './core/core.ios';
import { Projection } from './projections/projection.ios';

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
            return NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a);
        }
    });
}

export function nativeCartoImageProperty(target: Object, key: string | symbol) {
    return nativeProperty(target, key, {
        fromNative(value, target) {
            return target.options[key];
        },
        toNative(value) {
            value = _createImageSourceFromSrc(value);
            return NTBitmapUtils.createBitmapFromUIImage(value.ios as UIImage);
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
            return (value.ios as UIImage);
        }
    });
}

export function mapPosVectorFromArgs(poses: MapPosVector | MapPos[], projection?: Projection) {
    let nativePoses: NTMapPosVector;
    if (typeof (poses as any).getNative === 'function') {
        nativePoses = (poses as MapPosVector).getNative();
    } else {
        const arrayPoses = poses as MapPos[];
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

export function mapPosVectorVectorFromArgs(poses: MapPosVectorVector | MapPos[][], projection?: Projection) {
    let nativePoses: NTMapPosVectorVector;
    if (typeof (poses as any).getNative === 'function') {
        nativePoses = (poses as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = poses as MapPos[][];
        nativePoses = NTMapPosVectorVector.alloc().init();
        arrayPoses.forEach(p => {
            nativePoses.add(mapPosVectorFromArgs(p, projection));
        });
    }
    return nativePoses;
}
