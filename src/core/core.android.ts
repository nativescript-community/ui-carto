import { LatitudeKey, LongitudeKey, MapBounds, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos, setMapPosKeys } from './core.common';
export { LatitudeKey, LongitudeKey, MapBounds, MapPos, ScreenBounds, ScreenPos, setMapPosKeys };

export const CartoMapStyle = {
    get VOYAGER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_VOYAGER;
    },
    get POSITRON() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_POSITRON;
    },
    get DARKMATTER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DARKMATTER;
    }
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
    }
};

// export enum ClickType {
//     SINGLE = com.carto.ui.ClickType.CLICK_TYPE_SINGLE.ordinal(),
//     LONG = com.carto.ui.ClickType.CLICK_TYPE_LONG.ordinal(),
//     DOUBLE = com.carto.ui.ClickType.CLICK_TYPE_DOUBLE.ordinal(),
//     DUAL = com.carto.ui.ClickType.CLICK_TYPE_DUAL.ordinal()
// }

export function fromNativeMapPos(position: com.carto.core.MapPos) {
    if (!position) {
        return null;
    }
    return {
        [LatitudeKey]: position.getY(),
        [LongitudeKey]: position.getX(),
        altitude: position.getZ()
    } as MapPos;
}
export function toNativeMapPos(position: MapPos | com.carto.core.MapPos) {
    if (!position) {
        return null;
    }
    if (position instanceof com.carto.core.MapPos) {
        return position;
    }
    const result = new com.carto.core.MapPos(position[LongitudeKey], position[LatitudeKey], position.altitude > 0 ? position.altitude : 0);
    //  ignore z for now as points can get under the map!
    return result;
}
export function fromNativeScreenPos(position: com.carto.core.ScreenPos) {
    return {
        x: position.getY(),
        y: position.getX()
    } as ScreenPos;
}
export function toNativeScreenPos(position: ScreenPos) {
    if (position instanceof com.carto.core.ScreenPos) {
        return position;
    }
    return new com.carto.core.ScreenPos(position.x, position.y);
}
export function fromNativeMapRange(value: com.carto.core.MapRange) {
    return {
        max: value.getMax(),
        min: value.getMin()
    } as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof com.carto.core.MapRange) {
        return value;
    }
    //  ignore z for now as points can get under the map!
    return new com.carto.core.MapRange(value.min, value.max);
}
export function toNativeMapVec(value: MapVec) {
    if (value instanceof com.carto.core.MapVec) {
        return value;
    }
    return new com.carto.core.MapVec(value.x, value.y, value.z);
}
export function fromNativeMapVec(value: com.carto.core.MapVec) {
    return {
        x: value.getX(),
        y: value.getY(),
        z: value.getZ()
    } as MapVec;
}

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const result: T[] = [];
    for (let index = 0; index < vector.size(); index++) {
        result[index] = vector.get(index);
    }
    return result;
}

export function fromNativeMapBounds(bounds: com.carto.core.MapBounds) {
    return {
        southwest: fromNativeMapPos(bounds.getMin()),
        northeast: fromNativeMapPos(bounds.getMax())
    } as MapBounds;
}
export function toNativeMapBounds(bounds: MapBounds) {
    if (bounds instanceof com.carto.core.MapBounds) {
        return bounds;
    }
    return new com.carto.core.MapBounds(toNativeMapPos(bounds.southwest), toNativeMapPos(bounds.northeast));
}

export function fromNativeScreenBounds(bounds: com.carto.core.ScreenBounds) {
    return {
        min: fromNativeScreenPos(bounds.getMin()),
        max: fromNativeScreenPos(bounds.getMax())
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
}
export class MapPosVector extends NativeVector<com.carto.core.MapPos> {
    native: com.carto.core.MapPosVector;
    constructor(native?) {
        super();
        this.native = native || new com.carto.core.MapPosVector();
    }
    public add(position: com.carto.core.MapPos | MapPos) {
        if (position instanceof com.carto.core.MapPos ) {
            position = toNativeMapPos(position as MapPos);
            return this.native.add(position );
        }
        return this.native.add(toNativeMapPos(position));
    }

    toArray() {
        const result: MapPos[] = [];
        for (let i = 0; i < this.size(); i++) {
            result.push(fromNativeMapPos(this.get(i)));
        }
        return result;
    }
}
export class MapPosVectorVector extends NativeVector<com.carto.core.MapPosVector> {
    native: com.carto.core.MapPosVectorVector;
    constructor(native?) {
        super();
        this.native = native || new com.carto.core.MapPosVectorVector();
    }
    public add(position: com.carto.core.MapPosVector | MapPosVector) {
        if (position instanceof MapPosVector) {
            return this.native.add(position.getNative());
        }
        return this.native.add(position);
    }
}
