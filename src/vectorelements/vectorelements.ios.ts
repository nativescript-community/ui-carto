import { VectorElementOptions } from './vectorelements';
import { BaseNative } from '../carto.common';
import { nativeMapToJS } from '../utils/utils.ios';

export enum BillboardOrientation {
    FACE_CAMERA = NTBillboardOrientation.T_BILLBOARD_ORIENTATION_FACE_CAMERA,
    FACE_CAMERA_GROUND = NTBillboardOrientation.T_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND,
    GROUND = NTBillboardOrientation.T_BILLBOARD_ORIENTATION_GROUND
}
export enum BillboardScaling {
    CONST_SCREEN_SIZE = NTBillboardScaling.T_BILLBOARD_SCALING_CONST_SCREEN_SIZE,
    SCREEN_SIZE = NTBillboardScaling.T_BILLBOARD_SCALING_SCREEN_SIZE,
    WORLD_SIZE = NTBillboardScaling.T_BILLBOARD_SCALING_WORLD_SIZE
}

export class BaseVectorElement<T extends NTVectorElement, U extends VectorElementOptions> extends BaseNative<T, U> {
    createNative(options: U) {
        return null;
    }
    get metaData(): Object {
        if (this.native) {
            return nativeMapToJS(this.native.getMetaData());
        } else {
            return this.options.metaData;
        }
    }
    set metaData(value: Object) {
        this.options.metaData = value;
        if (this.native) {
            const theMap = NTStringVariantMap.alloc().init();
            for (const key in value) {
                theMap.setX(key, NTVariant.alloc().initWithString(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }
}
export class VectorElement extends BaseVectorElement<NTVectorElement, VectorElementOptions> {
    createNative() {
        return null;
    }
}
export class VectorElementVector extends BaseNative<NTVectorElementVector, any> {
    elements: Array<BaseVectorElement<any, any>>;
    createNative() {
        const result = NTVectorElementVector.alloc().init();
        if (this.elements.length > 0) {
            this.elements.forEach(element => {
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
        return this.elements[index] || new BaseVectorElement(undefined, this.native.get(index));
    }
    add(element: BaseVectorElement<any, any>) {
        this.elements.push(element);
        if (this.native) {
            this.native.add(element.getNative());
        }
    }
}
