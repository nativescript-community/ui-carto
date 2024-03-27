import { BaseNative } from '../BaseNative';
import { AltitudeKey, DefaultLatLonKeys, GenericMapPos, LatitudeKey, LongitudeKey, MapVec, ScreenBounds, ScreenPos } from './index.common';
export * from './index.common';

export enum ClickType {
    SINGLE = NTClickType.T_CLICK_TYPE_SINGLE,
    LONG = NTClickType.T_CLICK_TYPE_LONG,
    DOUBLE = NTClickType.T_CLICK_TYPE_DOUBLE,
    DUAL = NTClickType.T_CLICK_TYPE_DUAL
}

export class MapBounds<T = DefaultLatLonKeys> extends BaseNative<NTMapBounds, {}> {
    constructor(public northeast?: GenericMapPos<T>, public southwest?: GenericMapPos<T>, native?: NTMapBounds) {
        super(undefined, native);
    }
    createNative() {
        if (this.southwest && this.northeast) {
            return NTMapBounds.alloc().initWithMinMax(toNativeMapPos<T>(this.southwest), toNativeMapPos<T>(this.northeast));
        } else {
            return NTMapBounds.alloc().init();
        }
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
    shrinkToIntersection(position: MapBounds) {
        return this.getNative().shrinkToIntersection(toNativeMapBounds(position));
    }
    equals(position: MapBounds<T>) {
        return this.getNative().isEqualInternal(toNativeMapBounds<T>(position));
    }
    getCenter() {
        return fromNativeMapPos(this.getNative().getCenter());
    }

    toJSON() {
        return { southwest: this.southwest, northeast: this.northeast };
    }
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
    return NTMapPos.alloc().initWithXYZ(position[LongitudeKey], position[LatitudeKey], !ignoreAltitude && position[AltitudeKey] > 0 ? position[AltitudeKey] : 0);
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
export function toNativeMapVec(value: MapVec | [number, number, number]) {
    if (Array.isArray(value)) {
        return NTMapVec.alloc().initWithXYZ(value[0], value[1], value[2]);
    }
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
    if (typeof bounds.getNative === 'function') {
        return bounds.getNative();
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

export abstract class NativeVector<T, U = any> extends BaseNative<U, {}> {
    constructor(native) {
        super(null, native);
    }
    createNative(options) {
        return null;
    }
    size() {
        //@ts-ignore
        return this.native.size();
    }
    public reserve(size: number) {
        //@ts-ignore
        return this.getNative().reserve(size);
    }
    //@ts-ignore
    public get(index: number): T {
        //@ts-ignore
        return this.getNative().get(index);
    }
    public add(position: T) {
        //@ts-ignore
        return this.getNative().add(position);
    }
    public capacity() {
        //@ts-ignore
        return this.getNative().capacity();
    }
    public clear() {
        //@ts-ignore
        return this.getNative().clear();
    }
    public isEmpty() {
        //@ts-ignore
        return this.getNative().isEmpty();
    }
    //@ts-ignore
    public set(index: number, position: T) {
        //@ts-ignore
        return this.getNative().setVal(index, position);
    }
}
export class MapPosVector<T = DefaultLatLonKeys> extends NativeVector<NTMapPos, NTMapPosVector> {
    createNative() {
        return NTMapPosVector.alloc().init();
    }

    public add(position: NTMapPos | GenericMapPos<T>) {
        if (position instanceof NTMapPos) {
            position = toNativeMapPos<T>(position);
            return this.getNative().add(position);
        }
        return this.getNative().add(toNativeMapPos(position));
    }

    getPos(index: number) {
        return fromNativeMapPos<T>(this.get(index));
    }

    toArray() {
        const result: GenericMapPos<T>[] = [];
        for (let i = 0; i < this.size(); i++) {
            result.push(fromNativeMapPos(this.get(i)));
        }
        return result;
    }
}
export class MapPosVectorVector<T = DefaultLatLonKeys> extends NativeVector<NTMapPosVector, NTMapPosVectorVector> {
    createNative() {
        return NTMapPosVectorVector.alloc().init();
    }
    public add(position: NTMapPosVector | MapPosVector<T>) {
        if (position instanceof MapPosVector) {
            return this.getNative().add(position.getNative());
        }
        return this.getNative().add(position);
    }
}
