import { BaseNative } from '..';
import { DirAssetPackage } from '../utils/index.ios';
import { Accessors as Acc_VectorTileDecoder } from '../bindings/vectortiles/VectorTileDecoder';
import { Accessors as Acc_MBVectorTileDecoder } from '../bindings/vectortiles/MBVectorTileDecoder';
import { Methods as Met_VectorTileDecoder } from '../bindings/vectortiles/VectorTileDecoder';
import { Methods as Met_MBVectorTileDecoder } from '../bindings/vectortiles/MBVectorTileDecoder';

export interface VectorTileDecoderOptions {}

export class VectorTileDecoder extends BaseNative<any, VectorTileDecoderOptions> {
    constructor(options: VectorTileDecoderOptions);
}

export interface MBVectorTileDecoderOptions extends VectorTileDecoderOptions {
    zipPath?: string;
    dirPath?: string;
    cartoCss?: string;
    style?: string;
    liveReload?: boolean;
    pack?: ZippedAssetPackage | DirAssetPackage;
    loadAsset?(param0: string): com.massifmaps.core.BinaryData;
    getAssetNames?(): com.massifmaps.core.StringVector;
}
export class MBVectorTileDecoder extends BaseNative<any, MBVectorTileDecoderOptions> {
    style?: string;
    liveReload?: boolean;
    constructor(options: MBVectorTileDecoderOptions, native?: any);
    reloadStyle();
    setStyleParameter(param: string, value: string);
    setStyleParameters(value: Record<string, string> | any);
    setJSONStyleParameters(value: Record<string, string> | string);
    setCartoCSSStyleSet(param0: string): void;

    setCompiledStyleSet(param0: any): void;
    getCompiledStyleSet(): any;

    getCartoCSSStyleSet(): any;
    getStyleParameter(param0: string): string;
    getStyleParameters(): core.StringVector;
    addFallbackFont(param0: core.BinaryData): void;
    getMaxZoom(): number;
    getMinZoom(): number;

    // setFeatureIdOverride(value: boolean);
    // isFeatureIdOverride(): boolean;
    // setCartoCSSLayerNamesIgnored(ignore: boolean);
    // isCartoCSSLayerNamesIgnored(): boolean;

    // setLayerNameOverride(name: string);
    // getLayerNameOverride(): string;
}

// export interface MassifVectorTileDecoderOptions extends VectorTileDecoderOptions {
//     zipPath?: string;
//     dirPath?: string;
//     cartoCss?: string;
//     style?: string;
//     liveReload?: boolean;
// }
// export class MassifVectorTileDecoder extends BaseNative<any, MassifVectorTileDecoderOptions> {
//     style?: string;
//     liveReload?: boolean;
//     constructor(options: MassifVectorTileDecoderOptions, native?: any);
//     setStyleParameter(param: string, value: string);
// }

export interface VectorTileDecoder extends Acc_VectorTileDecoder, Met_VectorTileDecoder {}

export interface MBVectorTileDecoder
    extends Omit<VectorTileDecoder, 'native' | 'options' | 'getNative' | 'initNativeView'>,
        Acc_MBVectorTileDecoder,
        Omit<
            Met_MBVectorTileDecoder,
            | 'addFallbackFont'
            | 'getCartoCSSStyleSet'
            | 'getCompiledStyleSet'
            | 'getMaxZoom'
            | 'getMinZoom'
            | 'getStyleParameter'
            | 'getStyleParameters'
            | 'setCartoCSSStyleSet'
            | 'setCompiledStyleSet'
            | 'setJSONStyleParameters'
            | 'setStyleParameter'
            | 'setStyleParameters'
        > {}

export interface MBVectorTileDecoder extends Acc_VectorTileDecoder, Omit<Met_VectorTileDecoder, 'addFallbackFont' | 'getMaxZoom' | 'getMinZoom'> {}
