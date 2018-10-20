import { Bounds, MapPos } from './core';

export enum CartoMapStyle {
    VOYAGER = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_VOYAGER.ordinal(),
    POSITRON = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_POSITRON.ordinal(),
    DARKMATTER = com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DARKMATTER.ordinal()
}

export enum ClickType {
    SINGLE = com.carto.ui.ClickType.CLICK_TYPE_SINGLE.ordinal(),
    LONG = com.carto.ui.ClickType.CLICK_TYPE_LONG.ordinal(),
    DOUBLE = com.carto.ui.ClickType.CLICK_TYPE_DOUBLE.ordinal(),
    DUAL = com.carto.ui.ClickType.CLICK_TYPE_DUAL.ordinal()
}

export function fromNativeMapPos(pos: com.carto.core.MapPos) {
    return {
        latitude: pos.getY(),
        longitude: pos.getX(),
        altitude: pos.getZ()
    } as MapPos;
}
export function toNativeMapPos(pos: MapPos) {
    //  ignore z for now as points can get under the map!
    return new com.carto.core.MapPos(pos.longitude, pos.latitude);
}

export function fromNativeMapBounds(bounds: com.carto.core.MapBounds) {
    return {
        southwest: fromNativeMapPos(bounds.getMin()),
        northeast: fromNativeMapPos(bounds.getMax())
    } as Bounds;
}
export function toNativeMapBounds(bounds: Bounds) {
    return new com.carto.core.MapBounds(toNativeMapPos(bounds.southwest), toNativeMapPos(bounds.northeast));
}

abstract class NativeVector<T> {
    native: any;
    // constructor(size?: number) {
    //     this.native = new T(size);
    // }
    size() {
        return this.native.size();
    }
    public reserve(size: number) {
        return this.native.reserve(size);
    }
    public get(index: number): T {
        return this.native.get(index);
    }
    public add(pos: T) {
        return this.native.add(pos);
    }
    public capacity() {
        return this.native.capacity();
    }
    public clear() {
        return this.native.capacity();
    }
    public isEmpty() {
        return this.native.isEmpty();
    }
    public set(index: number, pos: T) {
        return this.native.set(index, pos);
    }
    public getNative() {
        return this.native;
    }
}
export class MapPosVector extends NativeVector<com.carto.core.MapPos> {
    native: com.carto.core.MapPosVector;
    constructor() {
        super();
        this.native = new com.carto.core.MapPosVector();
    }
    public add(pos: com.carto.core.MapPos | MapPos) {
        if ((pos as any).latitude) {
            pos = toNativeMapPos(pos as MapPos);
        }
        return this.native.add(pos as com.carto.core.MapPos);
    }
}
export class MapPosVectorVector extends NativeVector<com.carto.core.MapPosVector> {
    native: com.carto.core.MapPosVectorVector;
    constructor() {
        super();
        this.native = new com.carto.core.MapPosVectorVector();
    }
    public add(pos: com.carto.core.MapPosVector | MapPosVector) {
        console.log('MapPosVectorVector', 'add', pos, pos instanceof MapPosVector);
        if (pos instanceof MapPosVector) {
            return this.native.add(pos.getNative());
        }
        return this.native.add(pos);
    }
}
