import { Color, Font, Screen } from '@nativescript/core';
import { nativeColorProperty, nativeFontProperty, nativeImageProperty } from '..';
import { BaseNative } from '../BaseNative';
import { MapPos, fromNativeMapPos } from '../core';
import { nativeProperty } from '../index.common';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

export class ClusterElementBuilder extends BaseNative<com.nativescript.massifmaps.additions.ClusterElementBuilder, ClusterElementBuilderOptions> {
    @nativeImageProperty bitmap: string;
    @nativeColorProperty color: string | Color;
    @nativeProperty size: number;
    @nativeProperty shape: string;
    @nativeProperty textSize: number;
    @nativeColorProperty textColor: string | Color;
    @nativeFontProperty font: Font;
    @nativeProperty bbox: boolean;
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | com.massifmaps.vectorelements.VectorElement;
    createNative(options: ClusterElementBuilderOptions) {
        const result = new com.nativescript.massifmaps.additions.ClusterElementBuilder(Screen.mainScreen.scale);
        if (!!options.buildClusterElement) {
            result.setInterface(
                new com.nativescript.massifmaps.additions.ClusterElementBuilder.Interface({
                    buildClusterElement: this.nBuildClusterElement.bind(this)
                })
            );
        }

        return result;
    }
    nBuildClusterElement(position: com.massifmaps.core.MapPos, nElements: com.massifmaps.vectorelements.VectorElementVector) {
        const result = this.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
        if (result instanceof BaseVectorElement) {
            return result.getNative();
        } else if (result) {
            return result;
        }
    }
}
