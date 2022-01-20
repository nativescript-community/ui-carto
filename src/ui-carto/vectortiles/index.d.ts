import { BaseNative } from '..';

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
}
export class MBVectorTileDecoder extends BaseNative<any, MBVectorTileDecoderOptions> {
    style?: string;
    liveReload?: boolean;
    constructor(options: MBVectorTileDecoderOptions, native?: any);
    reloadStyle();
    setStyleParameter(param: string, value: string);
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

// export interface CartoVectorTileDecoderOptions extends VectorTileDecoderOptions {
//     zipPath?: string;
//     dirPath?: string;
//     cartoCss?: string;
//     style?: string;
//     liveReload?: boolean;
// }
// export class CartoVectorTileDecoder extends BaseNative<any, CartoVectorTileDecoderOptions> {
//     style?: string;
//     liveReload?: boolean;
//     constructor(options: CartoVectorTileDecoderOptions, native?: any);
//     setStyleParameter(param: string, value: string);
// }
