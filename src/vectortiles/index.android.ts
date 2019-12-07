import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from '.';
import { File } from '@nativescript/core/file-system';
import { BaseVectorTileDecoder } from './index.common';
import { getFileName, getRelativePathToApp } from '../carto.common';
import { DirAssetPackage } from '../utils';

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: com.carto.utils.AssetPackage;
    createNative(options: MBVectorTileDecoderOptions) {
        // this.log('createNative', options);
        if (!!options.zipPath) {
            const zipPath = getRelativePathToApp(options.zipPath);
            let vectorTileStyleSetData: com.carto.core.BinaryData;
            // this.log('zipPath', zipPath, options.liveReload);
            if (options.liveReload === true) {
                const data = File.fromPath(getFileName(options.zipPath)).readSync();
                // const arr = new ArrayBuffer(data.length);
                // data.getBytes(arr as any);
                vectorTileStyleSetData = new com.carto.core.BinaryData(data);
            } else {
                vectorTileStyleSetData = com.carto.utils.AssetUtils.loadAsset(zipPath);
            }
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
        if (this.native && !this.duringInit) {
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
