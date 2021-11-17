import { Font } from '@nativescript/core';
import { Color } from '@nativescript/core/color';
import { ImageAsset } from '@nativescript/core/image-asset';
import { ImageSource } from '@nativescript/core/image-source';
import { BaseNative } from '..';
import { MapPos } from '../core';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';

export interface ClusterElementBuilderOptions {
    image?: string | ImageSource | ImageAsset;
    color?: string | Color;
    size?: number;
    shape?: string;
    textColor?: string | Color;
    textSize?: number;
    font?: Font;
    bbox?: boolean;

    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
}

export class ClusterElementBuilder<T, U extends ClusterElementBuilderOptions> extends BaseNative<T, U> {
    constructor(options: U);
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
    image?: string | ImageSource | ImageAsset;
    color?: string | Color;
    size?: number;
    shape?: string;
    textColor?: string | Color;
    textSize?: number;
    font?: Font;
    bbox?: boolean;
}
