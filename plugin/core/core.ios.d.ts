import { Bounds, MapPos } from './core';
export declare enum CartoMapStyle {
    VOYAGER = 2,
    POSITRON = 0,
    DARKMATTER = 1,
}
export declare enum ClickType {
    SINGLE = 0,
    LONG = 1,
    DOUBLE = 2,
    DUAL = 3,
}
export declare enum PackageErrorType {
    CONNECTION = 1,
    DOWNLOAD_LIMIT_EXCEEDED = 2,
    NO_OFFLINE_PLAN = 4,
    PACKAGE_TOO_BIG = 3,
    SYSTEM = 0,
}
export declare enum PackageAction {
    READY = 0,
    WAITING = 1,
    DOWNLOADING = 2,
    COPYING = 3,
    REMOVING = 4,
}
export declare function fromNativeMapPos(pos: NTMapPos): MapPos;
export declare function toNativeMapPos(pos: MapPos): NTMapPos;
export declare function fromNativeMapBounds(bounds: NTMapBounds): Bounds;
export declare function toNativeMapBounds(bounds: Bounds): NTMapBounds;
export declare abstract class NativeVector<T> {
    native: any;
    size(): any;
    reserve(size: number): any;
    get(index: number): T;
    add(pos: T): any;
    capacity(): any;
    clear(): any;
    isEmpty(): any;
    set(index: number, pos: T): any;
    getNative(): any;
}
export declare class MapPosVector extends NativeVector<NTMapPos> {
    native: NTMapPosVector;
    constructor(size?: number);
    add(pos: NTMapPos | MapPos): void;
}
export declare class MapPosVectorVector extends NativeVector<NTMapPosVector> {
    native: NTMapPosVectorVector;
    constructor(size?: number);
    add(pos: NTMapPosVector | MapPosVector): void;
}
