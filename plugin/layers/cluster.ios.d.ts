import { BaseNative } from '../carto.common';
import { ClusterElementBuilderOptions } from './cluster';
import { MapPos } from '../core/core';
import { VectorElementVector } from '../vectorelements/vectorelements';
import { BaseVectorElement } from '../vectorelements/vectorelements.ios';
export declare class ClusterElementBuilderImpl extends NTClusterElementBuilder {
    private _owner;
    static initWithOwner(owner: WeakRef<ClusterElementBuilder>): ClusterElementBuilderImpl;
    buildClusterElementSwigExplicitNTClusterElementBuilderElements(position: NTMapPos, nElements: NTVectorElementVector | number): any;
}
export declare class ClusterElementBuilder extends BaseNative<NTClusterElementBuilder, ClusterElementBuilderOptions> {
    createNative(): ClusterElementBuilderImpl;
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | NTVectorElement;
}
