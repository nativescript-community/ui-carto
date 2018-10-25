import { LineVectorElementOptions, PointVectorElementOptions, VectorElementOptions } from './vectorelements';
import { BaseNative } from '../carto.common';
import { Projection } from '../projections/projection';
import { MapPos, MapPosVector } from '../core/core';
export declare enum BillboardOrientation {
    FACE_CAMERA = 0,
    FACE_CAMERA_GROUND = 1,
    GROUND = 2,
}
export declare enum BillboardScaling {
    CONST_SCREEN_SIZE = 2,
    SCREEN_SIZE = 1,
    WORLD_SIZE = 0,
}
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
