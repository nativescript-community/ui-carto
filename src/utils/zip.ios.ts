import { BaseNative } from '../carto.common';
import { ZippedAssetPackageOptions } from './zip';
import { File, knownFolders, path } from 'tns-core-modules/file-system';
const currentAppFolder = knownFolders.currentApp();

export class ZippedAssetPackage extends BaseNative<NTZippedAssetPackage, ZippedAssetPackageOptions> {
    createNative(options: ZippedAssetPackageOptions) {
        if (File.exists(path.join(currentAppFolder.path, '..', options.zipPath))) {
            const vectorTileStyleSetData = NTAssetUtils.loadAsset(options.zipPath);
            return NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }
}
