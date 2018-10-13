import {MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';

import { BaseVectorTileDecoder } from './vectortiles.common';
import { File, knownFolders, path } from 'tns-core-modules/file-system';
const currentAppFolder = knownFolders.currentApp();

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    createNative(options: MBVectorTileDecoderOptions) {
        if (File.exists(path.join(currentAppFolder.path, '..', options.zipPath))) {
            const vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(options.zipPath);
            const pack = new com.carto.utils.ZippedAssetPackage(vectorTileStyleSetData);
            const vectorTileStyleSet = new com.carto.styles.CompiledStyleSet(pack, options.style);
            const result = new com.carto.vectortiles.MBVectorTileDecoder(vectorTileStyleSet);
            return result;
        } else {
            console.error(`could not find zip file: ${options.zipPath}`);
            return null;
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameter(param, value);
    }
}
