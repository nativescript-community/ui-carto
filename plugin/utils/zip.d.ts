import { BaseNative } from '../carto';

export interface ZippedAssetPackageOptions {
    zipPath: string;
}

export abstract class ZippedAssetPackage extends BaseNative<any, ZippedAssetPackageOptions> {}
