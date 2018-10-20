import { BaseNative } from '../carto';
import { MapPos } from '../core/core';
import { VectorElement, VectorElementVector } from '../vectorelements/vectorelements';
import { BaseVectorElement } from '../vectorelements/vectorelements';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { ImageAsset } from 'tns-core-modules/image-asset/image-asset';

export interface ClusterElementBuilderOptions {
    image?: string | ImageSource | ImageAsset;

    buildClusterElement?: (pos: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
}

export class ClusterElementBuilder<T, U extends ClusterElementBuilderOptions> extends BaseNative<T, U> {
    constructor(options: U);
    buildClusterElement?: (pos: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any>;
    image?: string | ImageSource | ImageAsset;
}
