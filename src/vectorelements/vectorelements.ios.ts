import { LineVectorElementOptions, PointVectorElementOptions, VectorElementOptions } from './vectorelements';
import { BaseNative } from '../carto.common';
import { nativeMapToJS } from '../utils/utils';
import { Projection } from '../projections/projection';
import { fromNativeMapPos, MapPos, MapPosVector, toNativeMapPos } from '../core/core';
import { mapPosVectorFromArgs } from '../carto';

export const BillboardOrientation = {
    get FACE_CAMERA() {
        return NTBillboardOrientation.T_BILLBOARD_ORIENTATION_FACE_CAMERA;
    },
    get FACE_CAMERA_GROUND() {
        return NTBillboardOrientation.T_BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND;
    },
    get GROUND() {
        return NTBillboardOrientation.T_BILLBOARD_ORIENTATION_GROUND;
    }
};

export const BillboardScaling = {
    get CONST_SCREEN_SIZE() {
        return NTBillboardScaling.T_BILLBOARD_SCALING_CONST_SCREEN_SIZE;
    },
    get SCREEN_SIZE() {
        return NTBillboardScaling.T_BILLBOARD_SCALING_SCREEN_SIZE;
    },
    get WORLD_SIZE() {
        return NTBillboardScaling.T_BILLBOARD_SCALING_WORLD_SIZE;
    }
};

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

export abstract class BasePointVectorElement<
    T extends NTVectorElement & {
        getPos?(): NTMapPos;
        setPos?(pos: NTMapPos);
    },
    U extends PointVectorElementOptions
> extends BaseNative<T, U> {
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

    getNativePos(pos: MapPos, projection: Projection): NTMapPos {
        let nativePos;
        if (projection) {
            nativePos = projection.getNative().fromWgs84(toNativeMapPos(pos));
        } else {
            nativePos = toNativeMapPos(pos);
        }
        return nativePos;
    }
}
export abstract class BaseLineVectorElement<
    T extends NTVectorElement & {
        getPoses?(): NTMapPosVector;
        setPoses?(pos: NTMapPosVector);
    },
    U extends LineVectorElementOptions
> extends BaseNative<T, U> {
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
            this.native.setPoses(mapPosVectorFromArgs(positions, this.projection));
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
