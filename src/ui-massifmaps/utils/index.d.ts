import { BaseNative } from '..';
import { DefaultLatLonKeys, GenericMapPos, MapPosVector } from '../core';
import { Accessors as Acc_ZippedAssetPackage } from '../bindings/utils/ZippedAssetPackage';
import { Methods as Met_ZippedAssetPackage } from '../bindings/utils/ZippedAssetPackage';
import { Accessors as Acc_DirAssetPackage, Methods as Met_DirAssetPackage } from '../bindings/utils/AssetPackage';
import { Accessors as Acc_AssetPackage, Methods as Met_AssetPackage } from '../bindings/utils/AssetPackage';

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
    loadAsset?(param0: string): com.massifmaps.core.BinaryData;
    getAssetNames?(): com.massifmaps.core.StringVector;
}

export class ZippedAssetPackage extends BaseNative<any, ZippedAssetPackageOptions> {
    getAssetNames(): any; //MSFStringVector | com.massifmaps.core.StringVector
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

export interface ZippedAssetPackage extends Acc_ZippedAssetPackage, Omit<Met_ZippedAssetPackage, 'getAssetNames'> {}

export interface DirAssetPackage extends Acc_DirAssetPackage, Met_DirAssetPackage {}

export interface ZippedAssetPackage extends Acc_AssetPackage, Omit<Met_AssetPackage, 'getAssetNames' | 'loadAsset'> {}
