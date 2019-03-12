import { LineVectorElementOptions, PointVectorElementOptions, VectorElementOptions } from './vectorelements';
import { BaseNative } from '../carto.common';
import { Projection } from '../projections/projection';
import { MapPos, MapPosVector } from '../core/core';
export declare const BillboardOrientation: {
    readonly FACE_CAMERA: NTBillboardOrientation;
    readonly FACE_CAMERA_GROUND: NTBillboardOrientation;
    readonly GROUND: NTBillboardOrientation;
};
export declare const BillboardScaling: {
    readonly CONST_SCREEN_SIZE: NTBillboardScaling;
    readonly SCREEN_SIZE: NTBillboardScaling;
    readonly WORLD_SIZE: NTBillboardScaling;
};
export declare class BaseVectorElement<T extends NTVectorElement, U extends VectorElementOptions> extends BaseNative<T, U> {
    createNative(options: U): any;
    metaData: Object;
}
export declare abstract class BasePointVectorElement<T extends NTVectorElement & {
    getPos?(): NTMapPos;
    setPos?(pos: NTMapPos);
}, U extends PointVectorElementOptions> extends BaseNative<T, U> {
    projection?: Projection;
    position: MapPos;
    getNativePos(pos: MapPos, projection: Projection): NTMapPos;
}
export declare abstract class BaseLineVectorElement<T extends NTVectorElement & {
    getPoses?(): NTMapPosVector;
    setPoses?(pos: NTMapPosVector);
}, U extends LineVectorElementOptions> extends BaseNative<T, U> {
    projection?: Projection;
    positions: MapPosVector | MapPos[];
}
export declare class VectorElement extends BaseVectorElement<NTVectorElement, VectorElementOptions> {
    createNative(): any;
}
export declare class VectorElementVector extends BaseNative<NTVectorElementVector, any> {
    elements: Array<BaseVectorElement<any, any>>;
    createNative(): NTVectorElementVector;
    size(): number;
    getElement(index: number): BaseVectorElement<any, any>;
    add(element: BaseVectorElement<any, any>): void;
}
