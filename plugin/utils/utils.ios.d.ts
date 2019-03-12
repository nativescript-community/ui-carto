import { BaseNative } from '../carto.common';
import { ZippedAssetPackageOptions } from './utils';
export declare function nativeVectorToArray(nVector: com.carto.core.StringVector): any[];
export declare function nativeVariantToJS(variant: NTVariant): any;
export declare function nativeMapToJS(theMap: NTStringVariantMap): {};
export declare function setShowDebug(value: boolean): void;
export declare class ZippedAssetPackage extends BaseNative<NTZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions): NTZippedAssetPackage;
}
