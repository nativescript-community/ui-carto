import { Color, Font, ImageAsset, ImageSource } from '@nativescript/core';
import { NativePropertyOptions } from '.';
import { DefaultLatLonKeys, GenericMapPos, MapPos, MapPosVector, MapPosVectorVector, fromNativeMapVec, toNativeMapPos, toNativeMapVec } from './core';
import { Geometry } from './geometry';
import { FeatureCollection } from './geometry/feature';
import { _createImageSourceFromSrc, nativeProperty } from './index.common';
import { NativeConverter } from './nativeclass.common';
import { BaseVectorElementStyleBuilder } from './vectorelements';
export { nativeProperty };
export { BaseNative } from './BaseNative';

export * from './index.common';

/**
 * The converters, named so a generated binding table can point at one.
 *
 * `bindNative` takes them by property name; the `@native*Property` decorators wrap the
 * same objects, so a hand-written decorator and a generated accessor marshal identically.
 */
export const colorConverter: NativeConverter = {
    fromNative(value) {
        if (typeof value === 'string') {
            return value;
        }
        return new Color((value as com.massifmaps.graphics.Color).getARGB());
    },
    toNative(value) {
        const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
        return new com.massifmaps.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a);
    }
};
export const nColorConverter: NativeConverter = {
    fromNative(value: android.graphics.Color) {
        return new Color(value as any);
    },
    toNative(value): android.graphics.Color {
        const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
        return theColor.android as any;
    }
};
export const fontConverter: NativeConverter = {
    fromNative(value) {
        // no easy from typeface to Font
        return value;
    },
    toNative(value: Font) {
        return value?.getAndroidTypeface();
    }
};
export const massifImageConverter: NativeConverter = {
    fromNative(value, key) {
        return this.options[key];
    },
    toNative(value) {
        return getMassifBitmap(value);
    }
};
export const mapVecConverter: NativeConverter = {
    fromNative: fromNativeMapVec,
    toNative: toNativeMapVec
};
export const imageConverter: NativeConverter = {
    fromNative(value, key) {
        return this.options[key];
    },
    toNative(value) {
        value = _createImageSourceFromSrc(value);
        return value?.android as android.graphics.Bitmap;
    }
};

export function getMassifBitmap(src: string | ImageSource | ImageAsset) {
    const bitmap = _createImageSourceFromSrc(src);
    const result = com.massifmaps.utils.BitmapUtils.createBitmapFromAndroidBitmap(bitmap.android as android.graphics.Bitmap);
    (bitmap.android as android.graphics.Bitmap).recycle();
    return result;
}

export function nativeColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeColorProperty(...args) {
    return nativeProperty({ converter: colorConverter }, ...args);
}
export function nativeNColorProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeNColorProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeNColorProperty(...args) {
    return nativeProperty({ converter: nColorConverter }, ...args);
}
export function nativeFontProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeFontProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeFontProperty(...args) {
    return nativeProperty({ converter: fontConverter }, ...args);
}
export function nativeEnumProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeEnumProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeEnumProperty(...args) {
    return nativeProperty({}, ...args);
}
// The SDK's Java enums are int constants now, so both directions are the identity - there is no
// swigValue()/swigToEnum() to call, and a number IS the constant. `androidEnum` is kept so the
// call sites do not all have to change.
export function nativeAndroidEnumProperty(androidEnum, options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any {
    return nativeProperty(
        Object.assign(options || {}, {
            converter: {
                fromNative(value: number) {
                    return value;
                },
                toNative(value: any) {
                    return value;
                }
            }
        })
    );
}

export function nativeMassifImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeMassifImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeMassifImageProperty(...args) {
    return nativeProperty({ converter: massifImageConverter }, ...args);
}

export function nativeImageProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeImageProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeImageProperty(...args) {
    return nativeProperty({ converter: imageConverter }, ...args);
}
export function featureCollectionFromArgs<T = DefaultLatLonKeys>(collection: FeatureCollection<T>) {
    if (!collection) {
        return null;
    }
    let nativeCollection: com.massifmaps.geometry.FeatureCollection = collection as any;

    if (typeof (collection as any).getNative === 'function') {
        nativeCollection = collection.getNative();
    }
    return nativeCollection;
}
export function styleFromArgs(style: BaseVectorElementStyleBuilder<any, any>) {
    if (!style) {
        return null;
    }
    let nativeStyle: com.massifmaps.styles.Style = style as any;

    if (typeof (style as any).buildStyle === 'function') {
        nativeStyle = style.buildStyle();
    }
    return nativeStyle;
}

export function geometryFromArgs<T = DefaultLatLonKeys>(geometry: Geometry<T>) {
    if (!geometry) {
        return null;
    }
    let nativegeometry: com.massifmaps.geometry.Geometry = geometry as any;

    if (typeof (geometry as any).getNative === 'function') {
        nativegeometry = geometry.getNative();
    }
    return nativegeometry;
}

export function mapPosVectorFromArgs<T = DefaultLatLonKeys>(positions: MapPosVector<T> | GenericMapPos<T>[] | com.massifmaps.core.MapPosVector, ignoreAltitude = true) {
    if (!positions) {
        return null;
    }
    let nativePoses: com.massifmaps.core.MapPosVector = positions as any;

    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector<T>).getNative();
    } else if (!(positions instanceof com.massifmaps.core.MapPosVector)) {
        const arrayPoses = positions as GenericMapPos<T>[];
        nativePoses = new com.massifmaps.core.MapPosVector();
        // if (projection) {
        //     arrayPoses.forEach(p => {
        //         nativePoses.add(projection.getNative().fromWgs84(toNativeMapPos(p)));
        //     });
        // } else {
        arrayPoses.forEach((p) => {
            nativePoses.add(toNativeMapPos<T>(p, ignoreAltitude));
        });
        // }
    }
    return nativePoses;
}

export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], ignoreAltitude = true) {
    let nativePoses: com.massifmaps.core.MapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = new com.massifmaps.core.MapPosVectorVector();
        arrayPoses.forEach((p) => {
            nativePoses.add(mapPosVectorFromArgs(p, ignoreAltitude));
        });
    }
    return nativePoses;
}

export function nativeMapVecProperty(target: any, k?, desc?: PropertyDescriptor): any;
export function nativeMapVecProperty(options: NativePropertyOptions): (target: any, k?, desc?: PropertyDescriptor) => any;
export function nativeMapVecProperty(...args) {
    return nativeProperty({ converter: mapVecConverter }, ...args);
}
