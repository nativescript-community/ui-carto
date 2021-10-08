import { Font } from '@nativescript/core';
import { Color } from '@nativescript/core/color';
import { nativeColorProperty, nativeFontProperty, nativeImageProperty } from '..';
import { MapPos, fromNativeMapPos } from '../core';
import { BaseNative, nativeProperty } from '../index.common';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

export class ClusterElementBuilder extends BaseNative<com.akylas.carto.additions.AKClusterElementBuilder, ClusterElementBuilderOptions> {
    @nativeImageProperty bitmap: string;
    @nativeColorProperty color: string | Color;
    @nativeProperty size: number;
    @nativeProperty shape: string;
    @nativeProperty textSize: number;
    @nativeColorProperty textColor: string | Color;
    @nativeFontProperty font: Font;
    @nativeProperty bbox: boolean;
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | com.carto.vectorelements.VectorElement;
    createNative(options: ClusterElementBuilderOptions) {
        const result = new com.akylas.carto.additions.AKClusterElementBuilder();
        if (!!options.buildClusterElement) {
            result.setInterface(
                new com.akylas.carto.additions.AKClusterElementBuilder.Interface({
                    buildClusterElement: this.nBuildClusterElement.bind(this),
                })
            );
        }

        return result;
    }
    nBuildClusterElement(position: com.carto.core.MapPos, nElements: com.carto.vectorelements.VectorElementVector) {
        const result = this.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
        if (result instanceof BaseVectorElement) {
            return result.getNative();
        } else if (result) {
            return result;
        }
    }
}
