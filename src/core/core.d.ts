export interface MapPos {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
}

export interface ScreenPos {
    x: number;
    y: number;
}

export interface MapBounds {
    northeast: MapPos;
    southwest: MapPos;
}
export interface ScreenBounds {
    min: ScreenPos;
    max: ScreenPos;
}
export namespace MapBounds {
    function fromCoordinates(southwest: MapPos, northeast: MapPos): MapBounds;
}
export declare function fromNativeMapPos(pos): MapPos;
export declare function toNativeMapPos(position: MapPos): any;
export declare function fromNativeMapBounds(bounds: any): MapBounds;
export declare function toNativeMapBounds(bounds: MapBounds): any;
export declare function nativeVectorToArray<T>(vector: NativeVector<T>): T[];

export declare function fromNativeScreenPos(pos): ScreenPos;
export declare function toNativeScreenPos(position: ScreenPos): any;
export declare function fromNativeScreenBounds(pos): ScreenBounds;
export declare function toNativeScreenBounds(position: ScreenBounds): any;

declare class  CartoMapStyle {
    static  VOYAGER: CartoMapStyle
    static  POSITRON: CartoMapStyle
    static  DARKMATTER: CartoMapStyle
}

declare enum ClickType {
    SINGLE,
    LONG,
    DOUBLE,
    DUAL
}

declare abstract class NativeVector<T> {
    native: any;
    size(): number;
    public getNative(): any;
    public reserve(size: number);
    public get(index: number): T;
    public add(position: T | MapPos);
    public capacity(): number;
    public clear();
    public isEmpty(): boolean;
    public set(index: number, position: T);
}
export class MapPosVector extends NativeVector<any> {}
export class MapPosVectorVector extends NativeVector<any> {}
