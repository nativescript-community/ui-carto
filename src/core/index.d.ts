import { AltitudeKeys, DefaultLatLonKeys, GenericMapPos, LatitudeKey, LatitudeKeys, LongitudeKey, LongitudeKeys, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos } from './index.common';
import { BaseNative } from '..';
export { DefaultLatLonKeys, GenericMapPos, LatitudeKey, LatitudeKeys, LongitudeKey, LongitudeKeys, ScreenPos, MapPos, ScreenBounds, MapVec, MapRange };

export declare function fromNativeMapPos<T = DefaultLatLonKeys>(pos): GenericMapPos<T>;
export declare function toNativeMapPos<T = DefaultLatLonKeys>(position: GenericMapPos<T>, ignoreAltitude?: boolean): any;
export declare function fromNativeMapBounds<T = DefaultLatLonKeys>(bounds: any): MapBounds<T>;
export declare function toNativeMapBounds<T = DefaultLatLonKeys>(bounds: MapBounds<T>): any;
export declare function nativeVectorToArray<T>(vector: NativeVector<T>): T[];

export declare function fromNativeScreenPos(pos): ScreenPos;
export declare function toNativeScreenPos(position: ScreenPos): any;
export declare function fromNativeScreenBounds(pos): ScreenBounds;
export declare function toNativeScreenBounds(position: ScreenBounds): any;
export declare function fromNativeMapVec(value): MapVec;
export declare function toNativeMapVec(value: MapVec): any;
export declare function fromNativeMapRange(value): MapRange;
export declare function toNativeMapRange(value: MapRange): any;
export declare function setMapPosKeys(latitude: LatitudeKeys, longitude: LongitudeKeys, altitude?: AltitudeKeys);

export class CartoMapStyle {
    static VOYAGER: CartoMapStyle;
    static POSITRON: CartoMapStyle;
    static DARKMATTER: CartoMapStyle;
}

export enum ClickType {
    SINGLE,
    LONG,
    DOUBLE,
    DUAL
}

export class NMapPos {
    getX()
    getY()
    getZ()
}

export abstract class NativeVector<T> {
    constructor(native?);
    native: any;
    size(): number;
    public getNative(): any;
    public reserve(size: number);
    public get(index: number): T;
    public add(value: T);
    public capacity(): number;
    public clear();
    public isEmpty(): boolean;
    public set(index: number, value: T);
}
export class MapPosVector<T = DefaultLatLonKeys> extends NativeVector<NMapPos> {
    getPos(index: number): GenericMapPos<T>;
    toArray(): GenericMapPos<T>[];
}
export class MapPosVectorVector<T = DefaultLatLonKeys> extends NativeVector<NativeVector<GenericMapPos<T>>> {}
export class IntVector extends NativeVector<number> {}

export class MapBounds<T = DefaultLatLonKeys> extends BaseNative<any, {}> {
    public northeast: GenericMapPos<T>;
    public southwest: GenericMapPos<T>;
    constructor(northeast: GenericMapPos<T>, southwest: GenericMapPos<T>);
    contains(position: GenericMapPos<T> | MapBounds): boolean;
    intersects(position: MapBounds<T>): boolean;
    equals(position: MapBounds<T>): boolean;
    getCenter(): GenericMapPos<T>;
}
export interface MapBounds<T = DefaultLatLonKeys> {
    northeast: GenericMapPos<T>;
    southwest: GenericMapPos<T>;
}
