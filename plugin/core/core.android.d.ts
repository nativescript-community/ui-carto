import { MapBounds, MapPos } from './core';
export declare const CartoMapStyle: {
    readonly VOYAGER: com.carto.layers.CartoBaseMapStyle;
    readonly POSITRON: com.carto.layers.CartoBaseMapStyle;
    readonly DARKMATTER: com.carto.layers.CartoBaseMapStyle;
};
export declare const ClickType: {
    readonly SINGLE: com.carto.ui.ClickType;
    readonly LONG: com.carto.ui.ClickType;
    readonly DOUBLE: com.carto.ui.ClickType;
    readonly DUAL: com.carto.ui.ClickType;
};
export declare function fromNativeMapPos(position: com.carto.core.MapPos): MapPos;
export declare function toNativeMapPos(position: MapPos): com.carto.core.MapPos;
export declare function nativeVectorToArray<T>(vector: NativeVector<T>): T[];
export declare function fromNativeMapBounds(bounds: com.carto.core.MapBounds): MapBounds;
export declare function toNativeMapBounds(bounds: MapBounds): com.carto.core.MapBounds;
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
