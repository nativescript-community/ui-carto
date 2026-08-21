import { File } from '@nativescript/core';
import type { MBVectorTileDecoderOptions, VectorTileDecoderOptions } from '.';
import { getFileName, getRelativePathToApp } from '../index.common';
import { DirAssetPackage, ZippedAssetPackage, nativeVectorToArray } from '../utils';
import { BaseVectorTileDecoder } from './index.common';
import {
    ACCESSORS as ACC_VectorTileDecoder,
    Accessors as Acc_VectorTileDecoder,
    METHODS as MET_VectorTileDecoder,
    Methods as Met_VectorTileDecoder,
    SELECTORS as SEL_VectorTileDecoder
} from '../bindings/vectortiles/VectorTileDecoder';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_MBVectorTileDecoder,
    Accessors as Acc_MBVectorTileDecoder,
    METHODS as MET_MBVectorTileDecoder,
    Methods as Met_MBVectorTileDecoder,
    SELECTORS as SEL_MBVectorTileDecoder
} from '../bindings/vectortiles/MBVectorTileDecoder';
import { stringListConverter } from '..';

export class VectorTileDecoder extends BaseVectorTileDecoder<MSFVectorTileDecoder, VectorTileDecoderOptions> {
    createNative(options: VectorTileDecoderOptions) {
        const result = MSFVectorTileDecoder.alloc().init();
        return result;
    }
}

export class MBVectorTileDecoder extends BaseVectorTileDecoder<MSFMBVectorTileDecoder, MBVectorTileDecoderOptions> {
    pack: MSFZippedAssetPackage;
    createNative(options: MBVectorTileDecoderOptions) {
        let pack: MSFAssetPackage;
        if (options.pack) {
            pack = this.pack = options.pack.getNative();
        } else if (!!options.zipPath) {
            pack = this.pack = new ZippedAssetPackage(options as any).getNative();
        } else if (!!options.dirPath) {
            pack = this.pack = new DirAssetPackage({ dirPath: options.dirPath, loadUsingNS: options.liveReload }).getNative();
        }
        if (options.cartoCss) {
            if (pack) {
                return MSFMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(options.cartoCss, pack));
            } else {
                return MSFMBVectorTileDecoder.alloc().initWithCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSS(options.cartoCss));
            }
        } else if (pack) {
            const vectorTileStyleSet = MSFCompiledStyleSet.alloc().initWithAssetPackageStyleName(pack, options.style);
            return MSFMBVectorTileDecoder.alloc().initWithCompiledStyleSet(vectorTileStyleSet);
        } else {
            console.error(`could not create MBVectorTileDecoder pack for options: ${options}`);
            return null;
        }
    }

    set style(style: string) {
        if (style !== this.options.style) {
            this.options.style = style;
            if (this.native) {
                this.getNative().setCompiledStyleSet(MSFCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, style));
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
                    this.getNative().setCompiledStyleSet(MSFCompiledStyleSet.alloc().initWithAssetPackageStyleName(this.pack, this.options.style));
                } else if (this.options.cartoCss) {
                    this.getNative().setCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(this.options.cartoCss, this.pack));
                }
            } else if (this.options.cartoCss) {
                this.getNative().setCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSS(this.options.cartoCss));
            }
        }
    }

    setStyleParameter(param: string, value: string) {
        this.getNative().setStyleParameterValue(param, value);
    }
    setStyleParameters(value: Record<string, string> | MSFStringMap) {
        let map: MSFStringMap = value as any;
        if (!(value instanceof MSFStringMap)) {
            map = MSFStringMap.new();
            Object.keys(value).forEach((k) => {
                map.setX(k, value[k]);
            });
        }
        this.getNative().setStyleParameters(map);
    }
    setJSONStyleParameters(value: Record<string, string> | string) {
        this.getNative().setJSONStyleParameters(typeof value === 'string' ? value : JSON.stringify(value));
    }
    setCartoCSSStyleSet(cartoCss: string) {
        this.options.cartoCss = cartoCss;
        if (this.pack) {
            this.getNative().setCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSSAssetPackage(cartoCss, this.pack));
        } else {
            this.getNative().setCartoCSSStyleSet(MSFCartoCSSStyleSet.alloc().initWithCartoCSS(cartoCss));
        }
    }
    setCompiledStyleSet(param0: MSFCompiledStyleSet) {
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
    addFallbackFont(param0: MSFBinaryData) {
        return this.getNative().addFallbackFont(param0);
    }
    getMinZoom() {
        return this.getNative().getMinZoom();
    }
    getMaxZoom() {
        return this.getNative().getMaxZoom();
    }
}

export interface VectorTileDecoder extends Acc_VectorTileDecoder, Met_VectorTileDecoder {}
bindNative(VectorTileDecoder, MET_VectorTileDecoder, ACC_VectorTileDecoder, { selectors: SEL_VectorTileDecoder });

export interface MBVectorTileDecoder
    extends Acc_MBVectorTileDecoder, Omit<Met_MBVectorTileDecoder, 'addFallbackFont' | 'getCartoCSSStyleSet' | 'getCompiledStyleSet' | 'getMaxZoom' | 'getMinZoom' | 'getStyleParameter' | 'getStyleParameters' | 'setCartoCSSStyleSet' | 'setCompiledStyleSet' | 'setJSONStyleParameters' | 'setStyleParameter' | 'setStyleParameters'> {}
bindNative(MBVectorTileDecoder, MET_MBVectorTileDecoder, ACC_MBVectorTileDecoder, { selectors: SEL_MBVectorTileDecoder, converters: { styleParameters: stringListConverter } });

export interface MBVectorTileDecoder extends Acc_VectorTileDecoder, Omit<Met_VectorTileDecoder, 'addFallbackFont' | 'getMaxZoom' | 'getMinZoom'> {}
bindNative(MBVectorTileDecoder, MET_VectorTileDecoder, ACC_VectorTileDecoder, { selectors: SEL_VectorTileDecoder });
