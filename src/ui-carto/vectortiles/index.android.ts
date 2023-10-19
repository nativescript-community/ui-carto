import { File, profile } from '@nativescript/core';
import type { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from '.';
import { getFileName, getRelativePathToApp } from '../index.common';
import { DirAssetPackage, ZippedAssetPackage, nativeVectorToArray } from '../utils';
import { BaseVectorTileDecoder } from './index.common';

export class VectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.VectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        return null;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<com.carto.vectortiles.MBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: com.carto.utils.AssetPackage | DirAssetPackage | ZippedAssetPackage;
    mInterface: com.akylas.carto.additions.AKAssetPackage.Interface;
    constructor(options) {
        super(options);
        for (const property of ['mInterface']) {
            const descriptor = Object.getOwnPropertyDescriptor(DirAssetPackage.prototype, property);
            if (descriptor) {
                descriptor.enumerable = false;
            }
        }
    }
    createNative(options: MBVectorTileDecoderOptions) {
        let pack: com.carto.utils.AssetPackage;
        if (options.pack) {
            pack = this.pack = options.pack.getNative();
        } else if (!!options.zipPath) {
            pack = this.pack = new ZippedAssetPackage(options as any).getNative();
        } else if (!!options.dirPath) {
            pack = this.pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (pack) {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss, pack));
            } else {
                return new com.carto.vectortiles.MBVectorTileDecoder(new com.carto.styles.CartoCSSStyleSet(options.cartoCss));
            }
        } else if (pack) {
            console.log('new com.carto.styles.CompiledStyleSet', pack, options.style, options);
            const vectorTileStyleSet = new com.carto.styles.CompiledStyleSet(pack, options.style);
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
            this.getNative().setCompiledStyleSet(new com.carto.styles.CompiledStyleSet(this.nativePack, style));
        }
    }
    get style() {
        return this.options.style;
    }

    get nativePack() {
        return this.pack['getNative'] ? this.pack['getNative']() : this.pack;
    }

    reloadStyle() {
        if (this.native) {
            if (this.pack) {
                const pack = this.nativePack;
                console.log('reloadStyle', this.native, pack, this.options.cartoCss, this.options.style);
                if (this.options.cartoCss) {
                    this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(this.options.cartoCss, pack));
                } else {
                    const compiled = new com.carto.styles.CompiledStyleSet(pack, this.options.style);
                    console.log('compiled', compiled);
                    this.getNative().setCompiledStyleSet(compiled);
                }
            } else if (this.options.cartoCss) {
                this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(this.options.cartoCss));
            }
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameter(param, value);
    }
    setStyleParameters(value: Record<string, string> | com.carto.core.StringMap) {
        let map: com.carto.core.StringMap = value as any;
        if (!(value instanceof com.carto.core.StringMap)) {
            map = new com.carto.core.StringMap();
            Object.keys(value).forEach((k) => {
                map.set(k, value[k]);
            });
        }
        this.getNative().setStyleParameters(map);
    }
    setJSONStyleParameters(value: Record<string, string> | string) {
        this.getNative().setJSONStyleParameters(typeof value === 'string' ? value : JSON.stringify(value));
    }
    setCartoCSSStyleSet(cartoCss: string) {
        if (this.pack) {
            this.getNative().setCartoCSSStyleSet(new com.carto.styles.CartoCSSStyleSet(cartoCss, this.nativePack));
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
