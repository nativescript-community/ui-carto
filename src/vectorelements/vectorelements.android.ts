import { VectorElementOptions } from './vectorelements';
// import { BaseVectorElement } from './vectorelements.common';
import { nativeMapToJS } from '../utils/utils.android';
import { BaseNative } from '../carto.common';


export enum BillboardOrientation {
    FACE_CAMERA = com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_FACE_CAMERA.ordinal(),
    FACE_CAMERA_GROUND = com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND.ordinal(),
    GROUND = com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_GROUND.ordinal(),
}

export class BaseVectorElement<T extends com.carto.vectorelements.VectorElement, U extends VectorElementOptions> extends BaseNative<T, U> {
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
            const theMap = new com.carto.core.StringVariantMap();
            for (const key in value) {
                theMap.set(key, new com.carto.core.Variant(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }
}
export class VectorElement extends BaseVectorElement<com.carto.vectorelements.VectorElement, VectorElementOptions> {
    createNative() {
        return null;
    }
}

export class VectorElementVector extends BaseNative<com.carto.vectorelements.VectorElementVector, any> {
    elements: Array<BaseVectorElement<any, any>> = [];
    createNative() {
        const result = new com.carto.vectorelements.VectorElementVector();
        // console.log('create native VectorElementVector', this.elements.length);
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
