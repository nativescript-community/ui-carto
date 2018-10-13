import { Bounds, Position } from './core';

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
    } as Position;
}
export function toNativeMapPos(pos: Position) {
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
