import { Bounds, Position } from './core';

export enum CartoMapStyle {
    VOYAGER = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_VOYAGER,
    POSITRON = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_POSITRON,
    DARKMATTER = NTCartoBaseMapStyle.T_CARTO_BASEMAP_STYLE_DARKMATTER
}

export enum ClickType {
    SINGLE = NTClickType.T_CLICK_TYPE_SINGLE,
    LONG = NTClickType.T_CLICK_TYPE_LONG,
    DOUBLE = NTClickType.T_CLICK_TYPE_DOUBLE,
    DUAL = NTClickType.T_CLICK_TYPE_DUAL
}
export enum PackageErrorType {
    CONNECTION = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_CONNECTION,
    DOWNLOAD_LIMIT_EXCEEDED = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_DOWNLOAD_LIMIT_EXCEEDED,
    NO_OFFLINE_PLAN = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_NO_OFFLINE_PLAN,
    PACKAGE_TOO_BIG = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_PACKAGE_TOO_BIG,
    SYSTEM = NTPackageErrorType.T_PACKAGE_ERROR_TYPE_SYSTEM
}
export enum PackageAction {
    READY = NTPackageAction.T_PACKAGE_ACTION_READY,
    WAITING = NTPackageAction.T_PACKAGE_ACTION_WAITING,
    DOWNLOADING = NTPackageAction.T_PACKAGE_ACTION_DOWNLOADING,
    COPYING = NTPackageAction.T_PACKAGE_ACTION_COPYING,
    REMOVING = NTPackageAction.T_PACKAGE_ACTION_REMOVING
}

export function fromNativeMapPos(pos: NTMapPos) {
    return {
        latitude: pos.getY(),
        longitude: pos.getX(),
        altitude: pos.getZ()
    } as Position;
}
export function toNativeMapPos(pos: Position) {
    //  ignore z for now as points can get under the map!
    return NTMapPos.alloc().initWithXY(pos.longitude, pos.latitude);
}
export function fromNativeMapBounds(bounds: NTMapBounds) {
    return {
        southwest: fromNativeMapPos(bounds.getMin()),
        northeast: fromNativeMapPos(bounds.getMax())
    } as Bounds;
}
export function toNativeMapBounds(bounds: Bounds) {
    return NTMapBounds.alloc().initWithMinMax(toNativeMapPos(bounds.southwest), toNativeMapPos(bounds.northeast));
}
