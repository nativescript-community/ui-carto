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
    pack: NTZippedAssetPackage;
    createNative(options: MBVectorTileDecoderOptions) {
        if (!!options.zipPath) {
            const zipPath = getRelativePathToApp(options.zipPath);
            const vectorTileStyleSetData = NTAssetUtils.loadAsset(zipPath);
            this.pack = NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
        } else if (!!options.dirPath) {
            //    this.pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (this.pack) {
                return NTMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(options.cartoCss, this.pack));
            } else {
                return NTMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSS(options.cartoCss));
            }
        } else if (this.pack) {
            const vectorTileStyleSet = NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, options.style);
            const result = NTMBVectorTileDecoder.alloc().initWithCompiledStyleSet(vectorTileStyleSet);
            return result;
        } else {
            console.error(`could not create MBVectorTileDecoder pack for options: ${options}`);
            return null;
        }
    }

    set style(style: string) {
        this.options.style = style;
        if (this.native) {
            this.getNative().setCompiledStyleSet(NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, style));
        }
    }
    get style() {
        return this.options.style;
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameterValue(param, value);
    }
}
