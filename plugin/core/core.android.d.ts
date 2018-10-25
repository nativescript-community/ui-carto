import { Bounds, MapPos } from './core';
export declare enum CartoMapStyle {
    VOYAGER,
    POSITRON,
    DARKMATTER,
}
export declare enum ClickType {
    SINGLE,
    LONG,
    DOUBLE,
    DUAL,
}
export declare function fromNativeMapPos(position: com.carto.core.MapPos): MapPos;
export declare function toNativeMapPos(position: MapPos): com.carto.core.MapPos;
export declare function fromNativeMapBounds(bounds: com.carto.core.MapBounds): Bounds;
export declare function toNativeMapBounds(bounds: Bounds): com.carto.core.MapBounds;
export declare abstract class NativeVector<T> {
    native: any;
    size(): any;
    reserve(size: number): any;
    get(index: number): T;
    add(position: T): any;
    capacity(): any;
    clear(): any;
    isEmpty(): any;
    set(index: number, position: T): any;
    getNative(): any;
}
export declare class MapPosVector extends NativeVector<com.carto.core.MapPos> {
    native: com.carto.core.MapPosVector;
    constructor();
    add(position: com.carto.core.MapPos | MapPos): void;
}
export declare class MapPosVectorVector extends NativeVector<com.carto.core.MapPosVector> {
    native: com.carto.core.MapPosVectorVector;
    constructor();
    add(position: com.carto.core.MapPosVector | MapPosVector): void;
}
