/* eslint-disable no-redeclare */
import { Color, Font } from '@nativescript/core';
import { NativePropertyOptions } from '.';
import { DefaultLatLonKeys, MapPos, MapPosVector, MapPosVectorVector, fromNativeMapVec, toNativeMapPos, toNativeMapVec } from './core';
import { Geometry } from './geometry';
import { FeatureCollection } from './geometry/feature';
import { _createImageSourceFromSrc, nativeProperty } from './index.common';
export { BaseNative } from './BaseNative';
import { BaseVectorElementStyleBuilder } from './vectorelements';
export { nativeProperty };

export function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeColorProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value: NTColor) {
                    return new Color(value.getARGB());
                },
                toNative(value): NTColor {
                    const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
                    return NTColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a);
                },
            },
        },
        ...args
    );
}
export function nativeNColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeNColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeNColorProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value: UIColor) {
                    return value;
                },
                toNative(value): UIColor {
                    const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
                    return theColor.ios;
                },
            },
        },
        ...args
    );
}

export function nativeFontProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeFontProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeFontProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    // no easy from typeface to Font
                    return value;
                },
                toNative(value: Font) {
                    return value?.getUIFont(UIFont.systemFontOfSize(17));
                },
            },
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
                    return value.ordinal();
                },
                toNative(value) {
                    return value;
                },
            },
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
                },
            },
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
                    return value?.ios as UIImage;
                },
            },
        },
        ...args
    );
}

export function featureCollectionFromArgs<T = DefaultLatLonKeys>(collection: FeatureCollection<T>) {
    if (!collection) {
        return null;
    }
    let nativeCollection: NTFeatureCollection = collection as any;

    if (typeof (collection as any).getNative === 'function') {
        nativeCollection = collection.getNative();
    }
    return nativeCollection;
}

export function styleFromArgs(style: BaseVectorElementStyleBuilder<any, any>) {
    if (!style) {
        return null;
    }
    let nativeStyle: NTStyle = style as any;

    if (typeof (style as any).buildStyle === 'function') {
        nativeStyle = style.buildStyle();
    }
    return nativeStyle;
}

export function geometryFromArgs<T = DefaultLatLonKeys>(geometry: Geometry<T>) {
    if (!geometry) {
        return null;
    }
    let nativegeometry: NTGeometry = geometry as any;

    if (typeof (geometry as any).getNative === 'function') {
        nativegeometry = geometry.getNative();
    }
    return nativegeometry;
}

export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[] | NTMapPosVector, ignoreAltitude = true) {
    if (!positions) {
        return null;
    }
    let nativePoses: NTMapPosVector = positions as any;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector).getNative();
    } else if (!(positions instanceof NTMapPosVector)) {
        const arrayPoses = positions as MapPos[];
        nativePoses = NTMapPosVector.alloc().init();
        arrayPoses.forEach((p) => {
            nativePoses.add(toNativeMapPos(p, ignoreAltitude));
        });
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
        arrayPoses.forEach((p) => {
            nativePoses.add(mapPosVectorFromArgs(p, ignoreAltitude));
        });
    }
    return nativePoses;
}

export function nativeMapVecProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeMapVecProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeMapVecProperty(...args) {
    return nativeProperty(
        {
            converter: {
                fromNative: fromNativeMapVec,
                toNative: toNativeMapVec,
            },
        },
        ...args
    );
}
