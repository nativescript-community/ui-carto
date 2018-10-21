import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';

import { BaseVectorTileDecoder } from './vectortiles.common';
import { getRelativePathToApp } from '../carto.common';

export class VectorTileDecoder extends BaseVectorTileDecoder<NTVectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        const result = NTVectorTileDecoder.alloc().init();
        return result;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<NTMBVectorTileDecoder, MBVectorTileDecoderOptions> {
    createNative(options: MBVectorTileDecoderOptions) {
        const zipPath = getRelativePathToApp( options.zipPath);
        if (zipPath) {
            const vectorTileStyleSetData = NTAssetUtils.loadAsset(zipPath);
            const pack = NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
            const vectorTileStyleSet = NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(pack, options.style);
            const result = NTMBVectorTileDecoder.alloc().initWithCompiledStyleSet(vectorTileStyleSet);
            return result;
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameterValue(param, value);
    }
}
