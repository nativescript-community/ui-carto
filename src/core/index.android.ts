import { AltitudeKey, DefaultLatLonKeys, GenericMapPos, LatitudeKey, LongitudeKey, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos, setMapPosKeys } from './index.common';
import { BaseNative, _createImageSourceFromSrc } from '../index.common';
import { Color } from '@nativescript/core';
export { LatitudeKey, LongitudeKey, MapPos, ScreenBounds, ScreenPos, setMapPosKeys };

export const CartoMapStyle = {
    get VOYAGER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_VOYAGER;
    },
    get POSITRON() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_POSITRON;
    },
    get DARKMATTER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DARKMATTER;
    },
};

export const ClickType = {
    get SINGLE() {
        return com.carto.ui.ClickType.CLICK_TYPE_SINGLE.swigValue();
    },
    get LONG() {
        return com.carto.ui.ClickType.CLICK_TYPE_LONG.swigValue();
    },
    get DOUBLE() {
        return com.carto.ui.ClickType.CLICK_TYPE_DOUBLE.swigValue();
    },
    get DUAL() {
        return com.carto.ui.ClickType.CLICK_TYPE_DUAL.swigValue();
    },
};

export class MapBounds<T = DefaultLatLonKeys> extends BaseNative<com.carto.core.MapBounds, {}> {
    constructor(public northeast?: GenericMapPos<T>, public southwest?: GenericMapPos<T>, native?: com.carto.core.MapBounds) {
        super(undefined, native);
    }
    createNative() {
        if (this.southwest && this.northeast) {
            return new com.carto.core.MapBounds(toNativeMapPos<T>(this.southwest), toNativeMapPos<T>(this.northeast));
        } else {
            return new com.carto.core.MapBounds();
        }
    }
    contains(position: GenericMapPos<T> | MapBounds<T>) {
        if (position['southwest']) {
            return this.getNative().contains(toNativeMapBounds<T>(position as MapBounds<T>));
        } else {
            return this.getNative().contains(toNativeMapPos<T>(position as GenericMapPos<T>));
        }
    }
    intersects(position: MapBounds) {
        return this.getNative().intersects(toNativeMapBounds(position));
    }
    shrinkToIntersection(position: MapBounds) {
        return this.getNative().shrinkToIntersection(toNativeMapBounds(position));
    }
    equals(position: MapBounds) {
        return this.getNative().equals(toNativeMapBounds(position));
    }
    getCenter() {
        return fromNativeMapPos(this.getNative().getCenter());
    }
    toJSON() {
        return { southwest: this.southwest, northeast: this.northeast };
    }
}

export function fromNativeMapPos<T = DefaultLatLonKeys>(position: com.carto.core.MapPos) {
    if (!position) {
        return null;
    }
    return {
        [LatitudeKey]: position.getY(),
        [LongitudeKey]: position.getX(),
        [AltitudeKey]: position.getZ(),
    } as GenericMapPos<T>;
}
export function toNativeMapPos<T = DefaultLatLonKeys>(position: GenericMapPos<T> | com.carto.core.MapPos, ignoreAltitude = false) {
    if (!position) {
        return null;
    }
    if (position instanceof com.carto.core.MapPos) {
        return position;
    }
    if (position[LongitudeKey] === undefined || position[LatitudeKey] === undefined) {
        throw new Error(`toNativeMapPos: missing lat/lon parameters in ${position}`);
    }
    const result = new com.carto.core.MapPos(position[LongitudeKey], position[LatitudeKey], !ignoreAltitude && position[AltitudeKey] > 0 ? position[AltitudeKey] : 0);
    //  ignore z for now as points can get under the map!
    return result;
}
export function fromNativeScreenPos(position: com.carto.core.ScreenPos) {
    return {
        x: position.getY(),
        y: position.getX(),
    } as ScreenPos;
}
export function toNativeScreenPos(position: ScreenPos) {
    if (position instanceof com.carto.core.ScreenPos) {
        return position;
    }
    return new com.carto.core.ScreenPos(position.x, position.y);
}

// export class Converter {
//     NColor = {
//         fromNative(value) {
//             if (typeof value === 'string') {
//                 return value;
//             }
//             return value;
//         },
//         toNative(value): android.graphics.Color {
//             const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
//             return theColor.ios;
//         },
//     };
//     Color = {
//         fromNative(value) {
//             if (typeof value === 'string') {
//                 return value;
//             }
//             return new Color((value as com.carto.graphics.Color).getARGB());
//         },
//         toNative(value) {
//             const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
//             return new com.carto.graphics.Color(theColor.r, theColor.g, theColor.b, theColor.a);
//         },
//     };
//     MapRange = {
//         fromNative(value) {
//             return value;
//         },
//         toNative(value) {
//             const theColor = value instanceof Color ? value : value._argb ? new Color(value._argb) : new Color(value);
//             return theColor.ios;
//         },
//     };
//     Font = {
//         fromNative(value) {
//             // no easy from typeface to Font
//             return value;
//         },
//         toNative(value) {
//             return value?.getAndroidTypeface();
//         },
//     };
//     CartoImage = {
//         fromNative(value) {
//             // no easy from typeface to Font
//             return value;
//         },
//         toNative(value) {
//             value = _createImageSourceFromSrc(value);
//             return com.carto.utils.BitmapUtils.createBitmapFromAndroidBitmap(value.android as android.graphics.Bitmap);
//         },
//     };
//     AndroidEnum(androidEnum) {
//         return {
//             fromNative(value) {
//                 // no easy from typeface to Font
//                 return value.swigValue();
//             },
//             toNative(value) {
//                 return androidEnum.swigToEnum(value);
//             },
//         };
//     }
// }
export function fromNativeMapRange(value: NTMapRange) {
    return [value.getMax(), value.getMin()] as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof NTMapRange) {
        return value;
    }
    //  ignore z for now as points can get under the map!
    return new com.carto.core.MapRange(value[0], value[1]);
}

export function toNativeMapVec(value: MapVec | [number, number, number]) {
    if (Array.isArray(value)) {
        return new com.carto.core.MapVec(value[0], value[1], value[2]);
    }
    if (value instanceof com.carto.core.MapVec) {
        return value;
    }
    return new com.carto.core.MapVec(value.x, value.y, value.z);
}

export function fromNativeMapVec(value: com.carto.core.MapVec) {
    return {
        x: value.getX(),
        y: value.getY(),
        z: value.getZ(),
    } as MapVec;
}

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const result: T[] = [];
    for (let index = 0; index < vector.size(); index++) {
        result[index] = vector.get(index);
    }
    return result;
}

export function fromNativeMapBounds<T = DefaultLatLonKeys>(bounds: com.carto.core.MapBounds) {
    return new MapBounds<T>(fromNativeMapPos<T>(bounds.getMax()), fromNativeMapPos<T>(bounds.getMin()));
}
export function toNativeMapBounds<T = DefaultLatLonKeys>(bounds: MapBounds<T>) {
    if (bounds instanceof com.carto.core.MapBounds) {
        return bounds;
    } else if (bounds.getNative) {
        return bounds.getNative();
    }
    return new com.carto.core.MapBounds(toNativeMapPos<T>(bounds.southwest), toNativeMapPos<T>(bounds.northeast));
}

export function fromNativeScreenBounds(bounds: com.carto.core.ScreenBounds) {
    return {
        min: fromNativeScreenPos(bounds.getMin()),
        max: fromNativeScreenPos(bounds.getMax()),
    } as ScreenBounds;
}
export function toNativeScreenBounds(bounds: ScreenBounds) {
    if (bounds instanceof com.carto.core.ScreenBounds) {
        return bounds;
    }
    if (bounds) {
        return new com.carto.core.ScreenBounds(toNativeScreenPos(bounds.min), toNativeScreenPos(bounds.max));
    }
    return new com.carto.core.ScreenBounds();
}

export abstract class NativeVector<T> {
    native: any;
    // constructor(size?: number) {
    //     this.native = new T(size);
    // }
    size() {
        return this.native.size();
    }
    public reserve(size: number) {
        return this.native.reserve(size);
    }
    public get(index: number): T {
        return this.native.get(index);
    }
    public add(position: T) {
        return this.native.add(position);
    }
    public capacity() {
        return this.native.capacity();
    }
    public clear() {
        return this.native.clear();
    }
    public isEmpty() {
        return this.native.isEmpty();
    }
    public set(index: number, position: T) {
        return this.native.set(index, position);
    }
    public getNative() {
        return this.native;
    }
    toArray(): any[] {
        const result: T[] = [];
        for (let i = 0; i < this.size(); i++) {
            result.push(this.get(i));
        }
        return result;
    }
}
export class MapPosVector<T = DefaultLatLonKeys> extends NativeVector<com.carto.core.MapPos> {
    native: com.carto.core.MapPosVector;
    constructor(native?) {
        super();
        this.native = native || new com.carto.core.MapPosVector();
    }
    public add(position: com.carto.core.MapPos | GenericMapPos<T>) {
        if (position instanceof com.carto.core.MapPos) {
            position = toNativeMapPos<T>(position);
            return this.native.add(position);
        }
        return this.native.add(toNativeMapPos(position));
    }

    getPos(index: number) {
        return fromNativeMapPos<T>(this.get(index));
    }

    toArray() {
        const result: GenericMapPos<T>[] = [];
        for (let i = 0; i < this.size(); i++) {
            result.push(fromNativeMapPos<T>(this.get(i)));
        }
        return result;
    }
}
export class IntVector extends NativeVector<com.carto.core.IntVector> {
    native: com.carto.core.IntVector;
    constructor(native?) {
        super();
        this.native = native || new com.carto.core.IntVector();
    }
}
export class MapPosVectorVector<T = DefaultLatLonKeys> extends NativeVector<com.carto.core.MapPosVector> {
    native: com.carto.core.MapPosVectorVector;
    constructor(native?) {
        super();
        this.native = native || new com.carto.core.MapPosVectorVector();
    }
    public add(position: com.carto.core.MapPosVector | MapPosVector<T>) {
        if (position instanceof MapPosVector) {
            return this.native.add(position.getNative());
        }
        return this.native.add(position);
    }
}
