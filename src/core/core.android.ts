import { MapBounds, MapPos, ScreenBounds, ScreenPos } from './core.common';
export { MapBounds, MapPos, ScreenBounds, ScreenPos };

export const CartoMapStyle = {
    get VOYAGER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_VOYAGER;
    },
    get POSITRON() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_POSITRON;
    },
    get DARKMATTER() {
        return com.carto.layers.CartoBaseMapStyle.CARTO_BASEMAP_STYLE_DARKMATTER;
    }
};

export const ClickType = {
    get SINGLE() {
        return com.carto.ui.ClickType.CLICK_TYPE_SINGLE;
    },
    get LONG() {
        return com.carto.ui.ClickType.CLICK_TYPE_LONG;
    },
    get DOUBLE() {
        return com.carto.ui.ClickType.CLICK_TYPE_DOUBLE;
    },
    get DUAL() {
        return com.carto.ui.ClickType.CLICK_TYPE_DUAL;
    }
};

// export enum ClickType {
//     SINGLE = com.carto.ui.ClickType.CLICK_TYPE_SINGLE.ordinal(),
//     LONG = com.carto.ui.ClickType.CLICK_TYPE_LONG.ordinal(),
//     DOUBLE = com.carto.ui.ClickType.CLICK_TYPE_DOUBLE.ordinal(),
//     DUAL = com.carto.ui.ClickType.CLICK_TYPE_DUAL.ordinal()
// }

export function fromNativeMapPos(position: com.carto.core.MapPos) {
    return {
        latitude: position.getY(),
        longitude: position.getX(),
        altitude: position.getZ()
    } as MapPos;
}
export function toNativeMapPos(position: MapPos) {
    const result = new com.carto.core.MapPos(position.longitude, position.latitude, position.altitude > 0 ? position.altitude : 0);
    //  ignore z for now as points can get under the map!
    return result;
}
export function fromNativeScreenPos(position: com.carto.core.ScreenPos) {
    return {
        x: position.getY(),
        y: position.getX()
    } as ScreenPos;
}
export function toNativeScreenPos(position: ScreenPos) {
    //  ignore z for now as points can get under the map!
    return new com.carto.core.ScreenPos(position.x, position.y);
}

export function nativeVectorToArray<T>(vector: NativeVector<T>) {
    const result: T[] = [];
    for (let index = 0; index < vector.size(); index++) {
        result[index] = vector.get(index);
    }
    return result;
}

export function fromNativeMapBounds(bounds: com.carto.core.MapBounds) {
    return {
        southwest: fromNativeMapPos(bounds.getMin()),
        northeast: fromNativeMapPos(bounds.getMax())
    } as MapBounds;
}
export function toNativeMapBounds(bounds: MapBounds) {
    return new com.carto.core.MapBounds(toNativeMapPos(bounds.southwest), toNativeMapPos(bounds.northeast));
}

export function fromNativeScreenBounds(bounds: com.carto.core.ScreenBounds) {
    return {
        min: fromNativeScreenPos(bounds.getMin()),
        max: fromNativeScreenPos(bounds.getMax())
    } as ScreenBounds;
}
export function toNativeScreenBounds(bounds: ScreenBounds) {
    if (bounds) {
        return new com.carto.core.ScreenBounds(toNativeScreenPos(bounds.min), toNativeScreenPos(bounds.max));
    }
    return new com.carto.core.ScreenBounds();
}

export abstract class NativeVector<T> {
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
    public add(position: T) {
        return this.native.add(position);
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
    public set(index: number, position: T) {
        return this.native.set(index, position);
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
    public add(position: com.carto.core.MapPos | MapPos) {
        if ((position as any).latitude) {
            position = toNativeMapPos(position as MapPos);
        }
        return this.native.add(position as com.carto.core.MapPos);
    }
}
export class MapPosVectorVector extends NativeVector<com.carto.core.MapPosVector> {
    native: com.carto.core.MapPosVectorVector;
    constructor() {
        super();
        this.native = new com.carto.core.MapPosVectorVector();
    }
    public add(position: com.carto.core.MapPosVector | MapPosVector) {
        console.log('MapPosVectorVector', 'add', position, position instanceof MapPosVector);
        if (position instanceof MapPosVector) {
            return this.native.add(position.getNative());
        }
        return this.native.add(position);
    }
}
