import { BaseNative } from '../carto';
import { MapPos } from '../core/core';
import { VectorElement, VectorElementVector } from '../vectorelements/vectorelements';
import { BaseVectorElement } from '../vectorelements/vectorelements';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';
import { Color } from 'tns-core-modules/color/color';

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
