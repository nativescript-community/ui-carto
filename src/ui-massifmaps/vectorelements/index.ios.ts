import { AnimationStyle, BillboardStyleBuilderOptions, LineVectorElementOptions, PointVectorElementOptions, VectorElementOptions } from '.';
import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { JSVariantToNative, nativeMapToJS, nativeVariantToJS } from '../utils';
import { Projection } from '../projections';
import { MapPos, MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { mapPosVectorFromArgs } from '..';
import { BaseVectorElementStyleBuilder } from './index.common';
import {
    ACCESSORS as ACC_VectorElement,
    Accessors as Acc_VectorElement,
    METHODS as MET_VectorElement,
    Methods as Met_VectorElement,
    SELECTORS as SEL_VectorElement
} from '../bindings/vectorelements/VectorElement';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_BaseVectorElement,
    Accessors as Acc_BaseVectorElement,
    METHODS as MET_BaseVectorElement,
    Methods as Met_BaseVectorElement,
    SELECTORS as SEL_BaseVectorElement
} from '../bindings/vectorelements/VectorElement';
import {
    ACCESSORS as ACC_BasePointVectorElement,
    Accessors as Acc_BasePointVectorElement,
    METHODS as MET_BasePointVectorElement,
    Methods as Met_BasePointVectorElement,
    SELECTORS as SEL_BasePointVectorElement
} from '../bindings/vectorelements/VectorElement';
import {
    ACCESSORS as ACC_BaseBillboardVectorElement,
    Accessors as Acc_BaseBillboardVectorElement,
    METHODS as MET_BaseBillboardVectorElement,
    Methods as Met_BaseBillboardVectorElement,
    SELECTORS as SEL_BaseBillboardVectorElement
} from '../bindings/vectorelements/Billboard';
import {
    ACCESSORS as ACC_BaseLineVectorElement,
    Accessors as Acc_BaseLineVectorElement,
    METHODS as MET_BaseLineVectorElement,
    Methods as Met_BaseLineVectorElement,
    SELECTORS as SEL_BaseLineVectorElement
} from '../bindings/vectorelements/VectorElement';
import {
    ACCESSORS as ACC_BillboardStyleBuilder,
    Accessors as Acc_BillboardStyleBuilder,
    METHODS as MET_BillboardStyleBuilder,
    Methods as Met_BillboardStyleBuilder,
    SELECTORS as SEL_BillboardStyleBuilder
} from '../bindings/styles/BillboardStyleBuilder';
export { BaseVectorElementStyleBuilder };

export const BillboardOrientation = {
    get FACE_CAMERA() {
        return MSFBillboardOrientation.F_BILLBOARD_ORIENTATION_FACE_CAMERA;
    },
    get FACE_CAMERA_GROUND() {
        return MSFBillboardOrientation.F_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND;
    },
    get GROUND() {
        return MSFBillboardOrientation.F_BILLBOARD_ORIENTATION_GROUND;
    }
};

export const BillboardScaling = {
    get CONST_SCREEN_SIZE() {
        return MSFBillboardScaling.F_BILLBOARD_SCALING_CONST_SCREEN_SIZE;
    },
    get SCREEN_SIZE() {
        return MSFBillboardScaling.F_BILLBOARD_SCALING_SCREEN_SIZE;
    },
    get WORLD_SIZE() {
        return MSFBillboardScaling.F_BILLBOARD_SCALING_WORLD_SIZE;
    }
};

export abstract class BaseVectorElement<T extends MSFVectorElement, U extends VectorElementOptions> extends BaseNative<T, U> {
    createNative(options: U) {
        return null;
    }

    get metaData(): { [k: string]: string } {
        if (this.native) {
            return nativeMapToJS(this.native.getMetaData());
        }
        return this.options.metaData;
    }
    set metaData(value: { [k: string]: string }) {
        this.options.metaData = value;
        if (this.native) {
            const theMap = MSFStringVariantMap.alloc().init();
            for (const key in value) {
                theMap.setX(key, JSVariantToNative(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }

    containsMetaDataKey(key: string): boolean {
        return this.native ? this.native.containsMetaDataKey(key) : false;
    }
    getMetadataElement(key: string): { [k: string]: string } {
        if (this.native) {
            return nativeVariantToJS(this.native.getMetaDataElement(key));
        }
        return undefined;
    }
    setMetadataElement(key: string, element: { [k: string]: string }): void {
        if (this.native) {
            this.native.setMetaDataElementElement(key, JSVariantToNative(element));
        }
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }

    abstract buildStyle();

    rebuildStyle() {
        (this.native as any).setStyle(this.buildStyle());
    }
}

export abstract class BasePointVectorElement<
    T extends MSFVectorElement & {
        getPos?(): MSFMapPos;
        setPos?(pos: MSFMapPos);
    },
    U extends PointVectorElementOptions
> extends BaseVectorElement<T, U> {
    projection?: Projection;
    get position() {
        if (this.native && this.native.getPos) {
            const nativePos = this.native.getPos();
            return fromNativeMapPos(nativePos);
        }
        return this.options.position;
    }
    set position(pos: MapPos) {
        this.options.position = pos;
        if (this.native && this.native.setPos) {
            this.native.setPos(this.getNativePos(pos, this.projection));
        }
    }

    getNativePos(pos: MapPos, projection: Projection): MSFMapPos {
        let nativePos;
        if (projection) {
            nativePos = projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        return nativePos;
    }
}

export abstract class BaseBillboardVectorElement<T extends MSFBillboard, U extends PointVectorElementOptions> extends BasePointVectorElement<T, U> {}

export abstract class BaseLineVectorElement<
    T extends MSFVectorElement & {
        getPoses?(): MSFMapPosVector;
        setPoses?(pos: MSFMapPosVector);
    },
    U extends LineVectorElementOptions
> extends BaseVectorElement<T, U> {
    projection?: Projection;
    get positions() {
        // if (this.native && this.native.getPoses) {
        //     const nativePos = this.native.getPoses();
        //     if (this.projection) {
        //         return fromNativeMapPos(this.projection.getNative().toWgs84(nativePos));
        //     }
        //     return fromNativeMapPos(nativePos);
        // }
        return this.options.positions;
    }
    set positions(positions: MapPosVector | MapPos[]) {
        this.options.positions = positions;
        if (this.native && this.native.setPoses) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.options.ignoreAltitude));
        }
    }
}

export class VectorElement extends BaseVectorElement<MSFVectorElement, VectorElementOptions> {
    containsMetaDataKey(key: string): boolean {
        return this.native ? this.native.containsMetaDataKey(key) : false;
    }
    getMetadataElement(key: string): { [k: string]: string } {
        if (this.native) {
            return nativeVariantToJS(this.native.getMetaDataElement(key));
        }
        return undefined;
    }
    setMetadataElement(key: string, element: { [k: string]: string }): void {
        if (this.native) {
            this.native.setMetaDataElementElement(key, JSVariantToNative(element));
        }
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }

    buildStyle() {}
}
export class VectorElementVector extends BaseNative<MSFVectorElementVector, any> {
    elements: BaseVectorElement<any, any>[] = [];
    createNative() {
        const result = MSFVectorElementVector.alloc().init();
        if (this.elements.length > 0) {
            this.elements.forEach((element) => {
                result.add(element.getNative());
            });
        }
        return result;
    }
    size() {
        if (this.native) {
            return this.native.size();
        }
        return this.elements.length;
    }
    getElement(index: number): BaseVectorElement<any, any> {
        return this.elements[index] || new VectorElement(undefined, this.native.get(index));
    }
    add(element: BaseVectorElement<any, any>) {
        this.elements.push(element);
        if (this.native) {
            this.native.add(element.getNative());
        }
    }
}

export abstract class BillboardStyleBuilder<T extends MSFBillboardStyleBuilder, U extends BillboardStyleBuilderOptions> extends BaseVectorElementStyleBuilder<T, U> {
    createNative(options: BillboardStyleBuilderOptions) {
        return null;
    }

    mBuildStyle: MSFStyle;
    abstract buildStyle();
}

export interface VectorElement extends Omit<Acc_VectorElement, 'metaData'>, Omit<Met_VectorElement, 'containsMetaDataKey' | 'getBounds' | 'getGeometry'> {}
bindNative(VectorElement, MET_VectorElement, ACC_VectorElement, { selectors: SEL_VectorElement });

export interface BaseVectorElement<T extends MSFVectorElement, U extends VectorElementOptions>
    extends Omit<Acc_BaseVectorElement, 'metaData'>, Omit<Met_BaseVectorElement, 'containsMetaDataKey' | 'getBounds' | 'getGeometry'> {}
bindNative(BaseVectorElement, MET_BaseVectorElement, ACC_BaseVectorElement, { selectors: SEL_BaseVectorElement });

export interface BasePointVectorElement<
    T extends MSFVectorElement & {
        getPos?(): MSFMapPos;
        setPos?(pos: MSFMapPos);
    },
    U extends PointVectorElementOptions
> extends Omit<Acc_BasePointVectorElement, 'metaData'>, Omit<Met_BasePointVectorElement, 'containsMetaDataKey' | 'getBounds' | 'getGeometry'> {}
bindNative(BasePointVectorElement, MET_BasePointVectorElement, ACC_BasePointVectorElement, { selectors: SEL_BasePointVectorElement });

export interface BaseBillboardVectorElement<T extends MSFBillboard, U extends PointVectorElementOptions> extends Omit<Acc_BaseBillboardVectorElement, 'geometry'>, Omit<Met_BaseBillboardVectorElement, 'getBounds' | 'getGeometry'> {}
bindNative(BaseBillboardVectorElement, MET_BaseBillboardVectorElement, ACC_BaseBillboardVectorElement, { selectors: SEL_BaseBillboardVectorElement });

export interface BaseLineVectorElement<
    T extends MSFVectorElement & {
        getPoses?(): MSFMapPosVector;
        setPoses?(pos: MSFMapPosVector);
    },
    U extends LineVectorElementOptions
> extends Omit<Acc_BaseLineVectorElement, 'metaData'>, Omit<Met_BaseLineVectorElement, 'containsMetaDataKey' | 'getBounds' | 'getGeometry'> {}
bindNative(BaseLineVectorElement, MET_BaseLineVectorElement, ACC_BaseLineVectorElement, { selectors: SEL_BaseLineVectorElement });

export interface BillboardStyleBuilder<T extends MSFBillboardStyleBuilder, U extends BillboardStyleBuilderOptions> extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
bindNative(BillboardStyleBuilder, MET_BillboardStyleBuilder, ACC_BillboardStyleBuilder, { selectors: SEL_BillboardStyleBuilder });
