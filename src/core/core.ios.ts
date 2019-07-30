import { LatitudeKey, LongitudeKey, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos, setMapPosKeys } from './core.common';
export { LatitudeKey, LongitudeKey, MapPos, ScreenBounds, ScreenPos, setMapPosKeys };
import { BaseNative } from '../carto.common';

export enum CartoMapStyle {
    VOYAGER = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_VOYAGER,
    POSITRON = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_POSITRON,
    DARKMATTER = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_DARKMATTER
}

export enum ClickType {
    SINGLE = NTClickType.T_CLICK_TYPE_SINGLE,
    LONG = NTClickType.T_CLICK_TYPE_LONG,
    DOUBLE = NTClickType.T_CLICK_TYPE_DOUBLE,
    DUAL = NTClickType.T_CLICK_TYPE_DUAL
}


export class MapBounds extends BaseNative<NTMapBounds, {}> {
    constructor(public northeast: MapPos, public southwest: MapPos, native?: NTMapBounds) {
        super(undefined, native);
    }
    createNative() {
        return NTMapBounds.alloc().initWithMinMax(toNativeMapPos(this.southwest), toNativeMapPos(this.northeast));
    }
    contains(position: MapPos | MapBounds) {
        if (position['southwest']) {
            return this.getNative().containsBounds(toNativeMapBounds(position as MapBounds));
        } else {
            return this.getNative().containsPos(toNativeMapPos(position as MapPos));
        }
    }
    intersects(position: MapBounds) {
        return this.getNative().intersects(toNativeMapBounds(position));
    }
    equals(position: MapBounds) {
        return this.getNative().isEqualInternal(toNativeMapBounds(position));
    }
    getCenter() {
        return fromNativeMapPos(this.getNative().getCenter());
    }
}

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const result: T[] = [];
    for (let index = 0; index < vector.size(); index++) {
        result[index] = vector.get(index);
    }
    return result;
}
export function fromNativeMapPos(position: NTMapPos) {
    if (!position) {
        return null;
    }
    return {
        [LatitudeKey]: position.getY(),
        [LongitudeKey]: position.getX(),
        altitude: position.getZ()
    } as MapPos;
}
export function toNativeMapPos(position: MapPos | NTMapPos) {
    if (!position) {
        return null;
    }
    if (position instanceof NTMapPos) {
        return position;
    }
    //  ignore z for now as points can get under the map!
    return NTMapPos.alloc().initWithXYZ(position[LongitudeKey], position[LatitudeKey], position.altitude > 0 ? position.altitude : 0);
}
export function fromNativeScreenPos(position: NTScreenPos) {
    return {
        x: position.getY(),
        y: position.getX()
    } as ScreenPos;
}
export function toNativeScreenPos(position: ScreenPos | NTScreenPos) {
    if (position instanceof NTScreenPos) {
        return position;
    }
    //  ignore z for now as points can get under the map!
    return NTScreenPos.alloc().initWithXY(position.x, position.y);
}
export function fromNativeMapRange(value: NTMapRange) {
    return {
        max: value.getMax(),
        min: value.getMin()
    } as MapRange;
}
export function toNativeMapRange(value: MapRange) {
    if (value instanceof NTMapRange) {
        return value;
    }
    //  ignore z for now as points can get under the map!
    return NTMapRange.alloc().initWithMinMax(value.min, value.max);
}
export function toNativeMapVec(value: MapVec) {
    if (value instanceof NTMapVec) {
        return value;
    }
    return NTMapVec.alloc().initWithXYZ(value.x, value.y, value.z);
}
export function fromNativeMapVec(value: NTMapVec) {
    return {
        x: value.getX(),
        y: value.getY(),
        z: value.getZ()
    } as MapVec;
}

export function fromNativeMapBounds(bounds: NTMapBounds) {
    return new MapBounds(fromNativeMapPos(bounds.getMin()), fromNativeMapPos(bounds.getMax()));
}
export function toNativeMapBounds(bounds: MapBounds) {
    if (bounds instanceof NTMapBounds) {
        return bounds;
    }
    return NTMapBounds.alloc().initWithMinMax(toNativeMapPos(bounds.southwest), toNativeMapPos(bounds.northeast));
}

export function fromNativeScreenBounds(bounds: NTScreenBounds) {
    return {
        min: fromNativeScreenPos(bounds.getMin()),
        max: fromNativeScreenPos(bounds.getMax())
    } as ScreenBounds;
}
export function toNativeScreenBounds(bounds: ScreenBounds) {
    if (bounds instanceof NTScreenBounds) {
        return bounds;
    }
    if (bounds) {
        return NTScreenBounds.alloc().initWithMinMax(toNativeScreenPos(bounds.min), toNativeScreenPos(bounds.max));
    }
    return NTScreenBounds.alloc().init();
}

export abstract class NativeVector<T> {
    native: any;
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
        return this.native.setVal(index, position);
    }
    public getNative() {
        return this.native;
    }
}
export class MapPosVector extends NativeVector<NTMapPos> {
    native: NTMapPosVector;
    constructor(native?) {
        super();
        this.native = native || NTMapPosVector.alloc().init();
    }

    public add(position: NTMapPos | MapPos) {
        if (position instanceof NTMapPos) {
            position = toNativeMapPos(position as MapPos);
            return this.native.add(position);
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
export class MapPosVectorVector extends NativeVector<NTMapPosVector> {
    native: NTMapPosVectorVector;
    constructor(native?) {
        super();
        this.native = native || NTMapPosVectorVector.alloc().init();
    }
    public add(position: NTMapPosVector | MapPosVector) {
        if (position instanceof MapPosVector) {
            return this.native.add(position.getNative());
        }
        return this.native.add(position);
    }
}
