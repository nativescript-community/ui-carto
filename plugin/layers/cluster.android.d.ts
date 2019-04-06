import { BaseNative } from '../carto.common';
import { MapPos } from '../core/core';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';
import { ClusterElementBuilderOptions } from './cluster';
export interface ClusterElementBuilderNative extends com.akylas.carto.additions.AKClusterElementBuilder {
    new (owner: WeakRef<ClusterElementBuilder>): ClusterElementBuilderNative;
}
export declare class ClusterElementBuilder extends BaseNative<com.akylas.carto.additions.AKClusterElementBuilder, ClusterElementBuilderOptions> {
    bitmap: string;
    createNative(): ClusterElementBuilderNative;
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | com.carto.vectorelements.VectorElement;
}
