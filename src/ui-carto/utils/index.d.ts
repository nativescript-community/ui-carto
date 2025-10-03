import { BaseNative } from '..';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector } from '../core';

export function nativeVectorToArray<T = any>(nVector): T[];
export function arrayToNativeVector(array: T[]): NativeVector[T];
export function nativeMapToJS<T = Record<string, string>>(nMap): T;
export function nativeVariantToJS<T = any>(nMap): T;
export function JSVariantToNative<T = any>(nMap): T;
export function jsonVariant<T = any>(str: string): T;

export function setShowDebug(value: boolean);
export function setShowWarn(value: boolean);
export function setShowInfo(value: boolean);
export function setShowError(value: boolean);

export interface ZippedAssetPackageOptions {
    zipPath: string;
    liveReload?: boolean;
    basePack?: DirAssetPackage | ZippedAssetPackage;
    loadAsset?(param0: string): com.carto.core.BinaryData;
    getAssetNames?(): com.carto.core.StringVector;
}

export class ZippedAssetPackage extends BaseNative<any, ZippedAssetPackageOptions> {
    getAssetNames(): any; //NTStringVector | com.carto.core.StringVector
}
export interface DirAssetPackageOptions {
    basePack?: DirAssetPackage | ZippedAssetPackage;
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
