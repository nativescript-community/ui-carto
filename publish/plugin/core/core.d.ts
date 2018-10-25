export interface MapPos {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
}

export interface Bounds {
    northeast: MapPos;
    southwest: MapPos;
}
export namespace Bounds{
    function fromCoordinates(southwest: MapPos, northeast: MapPos): Bounds;
}
export declare function fromNativeMapPos(pos): MapPos;
export declare function toNativeMapPos(position: MapPos): any;
export declare function fromNativeMapBounds(bounds: any): Bounds;
export declare function toNativeMapBounds(bounds: Bounds): any;

declare enum CartoMapStyle {
    VOYAGER,
    POSITRON,
    DARKMATTER
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
