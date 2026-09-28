import { Color, Font, ImageAsset, ImageSource } from '@nativescript/core';
import { NativePropertyOptions } from '.';
import { DefaultLatLonKeys, MapPos, MapPosVector, MapPosVectorVector, fromNativeMapVec, toNativeMapPos, toNativeMapVec } from './core';
import { Geometry } from './geometry';
import { FeatureCollection } from './geometry/feature';
import { _createImageSourceFromSrc, nativeProperty } from './index.common';
import { NativeConverter } from './nativeclass.common';
export { BaseNative } from './BaseNative';

export * from './index.common';

/** Named so a generated binding table can point at one; the `@native*Property` decorators wrap the same objects. */
export const colorConverter: NativeConverter = {
    fromNative(value: MSFColor) {
        return new Color(value.getARGB());
    },
    toNative(value): MSFColor {
        const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
        return MSFColor.alloc().initWithRGBA(theColor.r, theColor.g, theColor.b, theColor.a);
    }
};
export const nColorConverter: NativeConverter = {
    fromNative(value: UIColor) {
        return value;
    },
    toNative(value): UIColor {
        const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
        return theColor.ios;
    }
};
export const fontConverter: NativeConverter = {
    fromNative(value) {
        // no easy from typeface to Font
        return value;
    },
    toNative(value: Font) {
        return value?.getUIFont(UIFont.systemFontOfSize(17));
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
export const imageConverter: NativeConverter = {
    fromNative(value, key) {
        return this.options[key];
    },
    toNative(value) {
        value = _createImageSourceFromSrc(value);
        return value?.ios as UIImage;
    }
};
export const mapVecConverter: NativeConverter = {
    fromNative: fromNativeMapVec,
    toNative: toNativeMapVec
};
import { BaseVectorElementStyleBuilder } from './vectorelements';
export { nativeProperty };

export function getMassifBitmap(src: string | ImageSource | ImageAsset) {
    const bitmap = _createImageSourceFromSrc(src);
    return MSFBitmapUtils.createBitmapFromUIImage(bitmap.ios as UIImage);
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
    return nativeProperty(
        {
            converter: {
                fromNative(value) {
                    return value.ordinal();
                },
                toNative(value) {
                    return value;
                }
            }
        },
        ...args
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
    let nativeCollection: MSFFeatureCollection = collection as any;

    if (typeof (collection as any).getNative === 'function') {
        nativeCollection = collection.getNative();
    }
    return nativeCollection;
}

export function styleFromArgs(style: BaseVectorElementStyleBuilder<any, any>) {
    if (!style) {
        return null;
    }
    let nativeStyle: MSFStyle = style as any;

    if (typeof (style as any).buildStyle === 'function') {
        nativeStyle = style.buildStyle();
    }
    return nativeStyle;
}

export function geometryFromArgs<T = DefaultLatLonKeys>(geometry: Geometry<T>) {
    if (!geometry) {
        return null;
    }
    let nativegeometry: MSFGeometry = geometry as any;

    if (typeof (geometry as any).getNative === 'function') {
        nativegeometry = geometry.getNative();
    }
    return nativegeometry;
}

export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[] | MSFMapPosVector, ignoreAltitude = true) {
    if (!positions) {
        return null;
    }
    let nativePoses: MSFMapPosVector = positions as any;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVector).getNative();
    } else if (!(positions instanceof MSFMapPosVector)) {
        const arrayPoses = positions as MapPos[];
        nativePoses = MSFMapPosVector.alloc().init();
        arrayPoses.forEach((p) => {
            nativePoses.add(toNativeMapPos(p, ignoreAltitude));
        });
    }
    return nativePoses;
}

export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], ignoreAltitude = false) {
    let nativePoses: MSFMapPosVectorVector;
    if (typeof (positions as any).getNative === 'function') {
        nativePoses = (positions as MapPosVectorVector).getNative();
    } else {
        const arrayPoses = positions as MapPos[][];
        nativePoses = MSFMapPosVectorVector.alloc().init();
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
