import { BaseNative } from '..';
import { MapPos } from '../core';
import { VectorElement, VectorElementVector } from '../vectorelements';
import { BaseVectorElement } from '../vectorelements';
import { ImageSource } from '@nativescript/core/image-source';
import { ImageAsset } from '@nativescript/core/image-asset';
import { Color } from '@nativescript/core/color';

export interface ClusterElementBuilderOptions {
    image?: string | ImageSource | ImageAsset;
    color?: string | Color ;
    size?: number;

    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
}

export class ClusterElementBuilder<T, U extends ClusterElementBuilderOptions> extends BaseNative<T, U> {
    constructor(options: U);
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
    image?: string | ImageSource | ImageAsset;
    color?: string | Color ;
    size?: number;
}
