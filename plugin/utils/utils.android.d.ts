import { BaseNative } from '../carto.common';
import { DirAssetPackageOptions, ZippedAssetPackageOptions } from './utils';
export declare function nativeVectorToArray(nVector: com.carto.core.StringVector): any[];
export declare function nativeVariantToJS(variant: com.carto.core.Variant): {};
export declare function nativeMapToJS(theMap: com.carto.core.StringVariantMap): {};
export interface LogEventListener extends com.carto.utils.LogEventListener {
    new (): LogEventListener;
}
export declare function setShowDebug(value: boolean): void;
export declare class ZippedAssetPackage extends BaseNative<com.carto.utils.ZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions): com.carto.utils.ZippedAssetPackage;
}
export interface DirAssetPackageNative extends com.carto.utils.AssetPackage {
    new (): DirAssetPackageNative;
    initialize(options: DirAssetPackageOptions): any;
}
export declare class DirAssetPackage extends BaseNative<DirAssetPackageNative, DirAssetPackageOptions> {
    createNative(options: DirAssetPackageOptions): DirAssetPackageNative;
}
