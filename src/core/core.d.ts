import { LatitudeKey, LatitudeKeys, LongitudeKey, LongitudeKeys, MapPos, MapRange, MapVec, ScreenBounds, ScreenPos } from './core.common';
import { BaseNative } from '../carto';
export { LatitudeKey, LatitudeKeys, LongitudeKey, LongitudeKeys, ScreenPos, MapPos, ScreenBounds, MapVec, MapRange };

export declare function fromNativeMapPos(pos): MapPos;
export declare function toNativeMapPos(position: MapPos): any;
export declare function fromNativeMapBounds(bounds: any): MapBounds;
export declare function toNativeMapBounds(bounds: MapBounds): any;
export declare function nativeVectorToArray<T>(vector: NativeVector<T>): T[];

export declare function fromNativeScreenPos(pos): ScreenPos;
export declare function toNativeScreenPos(position: ScreenPos): any;
export declare function fromNativeScreenBounds(pos): ScreenBounds;
export declare function toNativeScreenBounds(position: ScreenBounds): any;
export declare function fromNativeMapVec(value): MapVec;
export declare function toNativeMapVec(value: MapVec): any;
export declare function fromNativeMapRange(value): MapRange;
export declare function toNativeMapRange(value: MapRange): any;
export declare function setMapPosKeys(latitude: LatitudeKeys, longitude: LongitudeKeys);

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
export class MapPosVector extends NativeVector<MapPos> {
    toArray(): MapPos[];
}
export class MapPosVectorVector extends NativeVector<NativeVector<MapPos>> {}

export class MapBounds extends BaseNative<any, {}> {
    public northeast: MapPos;
    public southwest: MapPos;
    constructor(northeast: MapPos, southwest: MapPos);
    contains(position: MapPos | MapBounds): boolean;
    intersects(position: MapBounds): boolean;
    equals(position: MapBounds): boolean;
    getCenter(): MapPos;
}
export interface MapBounds {
    northeast: MapPos;
    southwest: MapPos;
}
