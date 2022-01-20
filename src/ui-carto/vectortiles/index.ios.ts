import { DirAssetPackage, nativeVectorToArray } from '../utils';
import { File } from '@nativescript/core/file-system';
import { getFileName, getRelativePathToApp } from '../index.common';
import { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from '.';
import { BaseVectorTileDecoder } from './index.common';


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
            let vectorTileStyleSetData: NTBinaryData;
            if (options.liveReload === true) {
                const data = File.fromPath(getFileName(options.zipPath)).readSync() as NSData;
                const arr = new ArrayBuffer(data.length);
                data.getBytes(arr as any);
                vectorTileStyleSetData = NTBinaryData.alloc().initWithDataPtrSize(arr as any, data.length);
            } else {
                vectorTileStyleSetData = NTAssetUtils.loadAsset(zipPath);
            }
            this.pack = NTZippedAssetPackage.alloc().initWithZipData(vectorTileStyleSetData);
        } else if (!!options.dirPath) {
            this.pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (this.pack) {
                return NTMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(options.cartoCss, this.pack));
            } else {
                return NTMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSS(options.cartoCss));
            }
        } else if (this.pack) {
            const vectorTileStyleSet = NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, options.style);
            return NTMBVectorTileDecoder.alloc().initWithCompiledStyleSet(vectorTileStyleSet);
        } else {
            console.error(`could not create MBVectorTileDecoder pack for options: ${options}`);
            return null;
        }
    }

    set style(style: string) {
        if (style !== this.options.style) {
            this.options.style = style;
            if (this.native) {
                this.getNative().setCompiledStyleSet(NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, style));
            }
        }
    }
    get style() {
        return this.options.style;
    }

    reloadStyle() {
        if (this.native) {
            if (this.pack) {
                if (this.options.style) {
                    this.getNative().setCompiledStyleSet(NTCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, this.options.style));
                } else if (this.options.cartoCss) {
                    this.getNative().setCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(this.options.cartoCss, this.pack));
                }
            } else if (this.options.cartoCss) {
                this.getNative().setCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSS(this.options.cartoCss));
            }
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameterValue(param, value);
    }
    setCartoCSSStyleSet(cartoCss: string) {
        this.options.cartoCss = cartoCss;
        if (this.pack) {
            this.getNative().setCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(cartoCss, this.pack));
        } else {
            this.getNative().setCartoCSSStyleSet(NTCartoCSSStyleSet.alloc().initWithCartoCSS(cartoCss));
        }
    }
    setCompiledStyleSet(param0: NTCompiledStyleSet) {
        this.getNative().setCompiledStyleSet(param0);
    }
    getCompiledStyleSet() {
        return this.getNative().getCompiledStyleSet();
    }
    getCartoCSSStyleSet() {
        return this.getNative().getCartoCSSStyleSet();
    }
    getStyleParameter(param0: string) {
        return this.getNative().getStyleParameter(param0);
    }
    getStyleParameters() {
        return nativeVectorToArray(this.getNative().getStyleParameters());
    }
    addFallbackFont(param0: NTBinaryData) {
        return this.getNative().addFallbackFont(param0);
    }
    getMinZoom() {
        return this.getNative().getMinZoom();
    }
    getMaxZoom() {
        return this.getNative().getMaxZoom();
    }
}
