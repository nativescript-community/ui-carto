import { LatitudeKey, LongitudeKey, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos, setMapPosKeys, AltitudeKey, DefaultLatLonKeys, GenericMapPos } from './index.common';
export { LatitudeKey, LongitudeKey, MapPos, ScreenBounds, ScreenPos, setMapPosKeys };
import { BaseNative } from '../index.common';

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


export class MapBounds<T = DefaultLatLonKeys> extends BaseNative<NTMapBounds, {}> {
    constructor(public northeast: GenericMapPos<T>, public southwest: GenericMapPos<T>, native?: NTMapBounds) {
        super(undefined, native);
    }
    createNative() {
        return NTMapBounds.alloc().initWithMinMax(toNativeMapPos(this.southwest), toNativeMapPos(this.northeast));
    }
    contains(position: GenericMapPos<T> | MapBounds<T>) {
        if (position['southwest']) {
            return this.getNative().containsBounds(toNativeMapBounds<T>(position as MapBounds<T>));
        } else {
            return this.getNative().containsPos(toNativeMapPos<T>(position as GenericMapPos<T>));
        }
    }
    intersects(position: MapBounds<T>) {
        return this.getNative().intersects(toNativeMapBounds<T>(position));
    }
    equals(position: MapBounds<T>) {
        return this.getNative().isEqualInternal(toNativeMapBounds<T>(position));
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
export function fromNativeMapPos<T = DefaultLatLonKeys>(position: NTMapPos) {
    if (!position) {
        return null;
    }
    return {
        [LatitudeKey]: position.getY(),
        [LongitudeKey]: position.getX(),
        [AltitudeKey]: position.getZ()
    } as GenericMapPos<T>;
}
export function toNativeMapPos<T = DefaultLatLonKeys>(position: GenericMapPos<T> | NTMapPos, ignoreAltitude = false) {
    if (!position) {
        return null;
    }
    if (position instanceof NTMapPos) {
        return position;
    }
    //  ignore z for now as points can get under the map!
    return NTMapPos.alloc().initWithXYZ(position[LongitudeKey], position[LatitudeKey],  (!ignoreAltitude && position[AltitudeKey] > 0) ? position[AltitudeKey] : 0);
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

export function fromNativeMapBounds<T = DefaultLatLonKeys>(bounds: NTMapBounds) {
    return new MapBounds<T>(fromNativeMapPos<T>(bounds.getMax()), fromNativeMapPos<T>(bounds.getMin()));
}
export function toNativeMapBounds<T = DefaultLatLonKeys>(bounds: MapBounds<T>) {
    if (bounds instanceof NTMapBounds) {
        return bounds;
    }
    return NTMapBounds.alloc().initWithMinMax(toNativeMapPos<T>(bounds.southwest), toNativeMapPos<T>(bounds.northeast));
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
export class MapPosVector<T = DefaultLatLonKeys> extends NativeVector<NTMapPos> {
    native: NTMapPosVector;
    constructor(native?) {
        super();
        this.native = native || NTMapPosVector.alloc().init();
    }

    public add(position: NTMapPos | GenericMapPos<T>) {
        if (position instanceof NTMapPos) {
            position = toNativeMapPos<T>(position);
            return this.native.add(position);
        }
        return this.native.add(toNativeMapPos(position));
    }

    toArray() {
        const result: GenericMapPos<T>[] = [];
        for (let i = 0; i < this.size(); i++) {
            result.push(fromNativeMapPos(this.get(i)));
        }
        return result;
    }
}
export class MapPosVectorVector<T = DefaultLatLonKeys> extends NativeVector<NTMapPosVector> {
    native: NTMapPosVectorVector;
    constructor(native?) {
        super();
        this.native = native || NTMapPosVectorVector.alloc().init();
    }
    public add(position: NTMapPosVector | MapPosVector<T>) {
        if (position instanceof MapPosVector) {
            return this.native.add(position.getNative());
        }
        return this.native.add(position);
    }
}
