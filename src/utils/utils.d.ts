import { BaseNative } from '../carto';

export function nativeVectorToArray(nVector): any[];
export function nativeMapToJS(nMap): {};
export function nativeVariantToJS(nMap): any;

export function setShowDebug(value: boolean);

export interface ZippedAssetPackageOptions {
    zipPath: string;
}

export abstract class ZippedAssetPackage extends BaseNative<any, ZippedAssetPackageOptions> {}
export interface DirAssetPackageOptions {
    dirPath: string;
    loadUsingNS?: boolean;
}

export class DirAssetPackage extends BaseNative<any, DirAssetPackageOptions> {}
