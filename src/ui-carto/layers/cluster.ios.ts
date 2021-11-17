import { Color, Font } from '@nativescript/core';
import { nativeColorProperty, nativeFontProperty, nativeImageProperty, nativeNColorProperty, nativeProperty } from '..';
import { MapPos, fromNativeMapPos } from '../core';
import { BaseNative } from "../BaseNative";
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

@NativeClass
export class ClusterElementBuilderImpl extends AkClusterElementBuilder {
    private _owner: WeakRef<ClusterElementBuilder>;

    public static initWithOwner(owner: WeakRef<ClusterElementBuilder>): ClusterElementBuilderImpl {
        const delegate = ClusterElementBuilderImpl.new() as ClusterElementBuilderImpl;
        delegate._owner = owner;
        return delegate;
    }
    buildClusterElementElements(position: NTMapPos, nElements: NTVectorElementVector | number) {
        const owner = this._owner.get();
        if (owner.buildClusterElement) {
            const result = owner.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
            if (result instanceof BaseVectorElement) {
                return result.getNative();
            } else if (result) {
                return result;
            }
        }
        return super.buildClusterElementElements(position, nElements as NTVectorElementVector);
    }
}

export class ClusterElementBuilder extends BaseNative<NTClusterElementBuilder, ClusterElementBuilderOptions> {
    @nativeImageProperty bitmap: string;
    @nativeColorProperty color: string | Color;
    @nativeProperty size: number;
    @nativeProperty shape: string;
    @nativeProperty textSize: number;
    @nativeNColorProperty textColor: string | Color;
    @nativeFontProperty font: Font;
    @nativeProperty bbox: boolean;
    createNative(options) {
        if (!!options.buildClusterElement) {
            return ClusterElementBuilderImpl.initWithOwner(new WeakRef(this));
        } else {
            return AkClusterElementBuilder.alloc().init();
        }
    }
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | NTVectorElement;
}
