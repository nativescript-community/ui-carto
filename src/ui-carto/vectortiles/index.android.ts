import { File, profile } from '@nativescript/core';
import type { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from '.';
import { getFileName, getRelativePathToApp } from '../index.common';
import { DirAssetPackage, nativeVectorToArray } from '../utils';
import { BaseVectorTileDecoder } from './index.common';

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: com.carto.utils.AssetPackage;

    createNative(options: MBVectorTileDecoderOptions) {
        if (!!options.zipPath) {
            const zipPath = getRelativePathToApp(options.zipPath);
            let vectorTileStyleSetData: com.carto.core.BinaryData;
            if (options.liveReload === true) {
                const data = File.fromPath(getFileName(options.zipPath)).readSync();
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

    reloadStyle() {
        if (this.native) {
            if (this.pack) {
                if (this.options.style) {
                    this.getNative().setCompiledStyleSet(new com.carto.styles.CompiledStyleSet(this.pack, this.options.style));
                } else if (this.options.cartoCss) {
                    this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(this.options.cartoCss, this.pack));
                }
            } else if (this.options.cartoCss) {
                this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(this.options.cartoCss));
            }
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameter(param, value);
    }
    setCartoCSSStyleSet(cartoCss: string) {
        if (this.pack) {
            this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(cartoCss, this.pack));
        } else {
            this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(cartoCss));
        }
    }
    setCompiledStyleSet(param0: com.carto.styles.CompiledStyleSet) {
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
    addFallbackFont(param0: com.carto.core.BinaryData) {
        return this.getNative().addFallbackFont(param0);
    }
    getMinZoom() {
        return this.getNative().getMinZoom();
    }
    getMaxZoom() {
        return this.getNative().getMaxZoom();
    }
}
