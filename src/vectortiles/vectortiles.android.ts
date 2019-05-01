import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from './vectortiles';

import { BaseVectorTileDecoder } from './vectortiles.common';
import { getRelativePathToApp } from '../carto.common';
import { DirAssetPackage } from '../utils/utils';

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: com.carto.utils.AssetPackage;
    createNative(options: MBVectorTileDecoderOptions) {
        console.log('MBVectorTileDecoder', 'createNative', options);
        if (!!options.zipPath) {
            const zipPath = getRelativePathToApp(options.zipPath);
            const vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(zipPath);
            this.pack = new com.carto.utils.ZippedAssetPackage(vectorTileStyleSetData);
        } else if (!!options.dirPath) {
            this.pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (this.pack) {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss, this.pack));
            } else {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss));
            }
        } else if (this.pack) {
            const vectorTileStyleSet = new com.carto.styles.CompiledStyleSet(this.pack, options.style);
            const result = new com.carto.vectortiles.MBVectorTileDecoder(vectorTileStyleSet);
            return result;
        } else {
            console.error(`could not create MBVectorTileDecoder pack for options: ${options}`);
            return null;
        }
    }

    set style(style: string) {
        this.options.style = style;
        if (this.native) {
            this.getNative().setCompiledStyleSet(new com.carto.styles.CompiledStyleSet(this.pack, style));
        }
    }
    get style() {
        return this.options.style;
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameter(param, value);
    }
}
