import { BaseNative } from '../carto.common';
import { ZippedAssetPackageOptions } from './zip';
export declare class ZippedAssetPackage extends BaseNative<NTZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions): NTZippedAssetPackage;
}
