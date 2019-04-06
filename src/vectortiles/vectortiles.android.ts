import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';

import { BaseVectorTileDecoder } from './vectortiles.common';
import { getRelativePathToApp } from '../carto.common';
import { DirAssetPackage } from 'nativescript-carto/utils/utils';

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    createNative(options: MBVectorTileDecoderOptions) {
        let pack: com.carto.utils.AssetPackage;
        // console.log('MBVectorTileDecoder', 'createNative', options);
        if (!!options.zipPath) {
            const zipPath = getRelativePathToApp(options.zipPath);
            const vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(zipPath);
            pack = new com.carto.utils.ZippedAssetPackage(vectorTileStyleSetData);
        } else if (!!options.dirPath) {
            pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (pack) {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss, pack));
            } else {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss));
            }
        } else if (pack) {
            const vectorTileStyleSet = new com.carto.styles.CompiledStyleSet(pack, options.style);
            const result = new com.carto.vectortiles.MBVectorTileDecoder(vectorTileStyleSet);
            return result;
        } else {
            console.error(`could not create MBVectorTileDecoder pack for options: ${options}`);
            return null;
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameter(param, value);
    }
}
