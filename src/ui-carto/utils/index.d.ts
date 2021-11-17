import { BaseNative } from '..';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector } from '../core';

export function nativeVectorToArray(nVector): any[];
export function nativeMapToJS(nMap): {};
export function nativeVariantToJS(nMap): any;
export function JSVariantToNative(nMap): any;
export function jsonVariant(str: string): any;

export function setShowDebug(value: boolean);
export function setShowWarn(value: boolean);
export function setShowInfo(value: boolean);
export function setShowError(value: boolean);

export interface ZippedAssetPackageOptions {
    zipPath: string;
}

export abstract class ZippedAssetPackage extends BaseNative<any, ZippedAssetPackageOptions> {}
export interface DirAssetPackageOptions {
    dirPath: string;
    loadUsingNS?: boolean;
}

export class DirAssetPackage extends BaseNative<any, DirAssetPackageOptions> {}
export function encodeMapPosVector<T = DefaultLatLonKeys>(coordinates: MapPosVector<T> | GenericMapPos<T>[], includeElevation: boolean, precision: number): string;
export function decodeMapPosVector<T = DefaultLatLonKeys>(str: string, includeElevation: boolean, precision: number): MapPosVector<T>;
export function distanceToEnd<T = DefaultLatLonKeys>(index: number, coordinates: MapPosVector<T> | GenericMapPos<T>[]): number;
export function isLocationOnPath<T = DefaultLatLonKeys>(
    point: GenericMapPos<T>,
    coordinates: MapPosVector<T> | GenericMapPos<T>[],
    closed?: boolean,
    geodesic?: boolean,
    toleranceEarth?: number
): number;

export declare function fromNativeMapRange(value): MapRange;
export declare function toNativeMapRange(value: MapRange): any;
