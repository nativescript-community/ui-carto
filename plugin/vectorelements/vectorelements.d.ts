import { BaseNative } from '../carto';
import { MapPos, MapPosVector } from '../core/core';
import { Projection } from '../projections/projection';

declare enum BillboardOrientation {
    FACE_CAMERA,
    FACE_CAMERA_GROUND,
    GROUND
}

declare enum BillboardScaling {
    CONST_SCREEN_SIZE,
    SCREEN_SIZE,
    WORLD_SIZE
}

export class VectorElementOptions {
    metaData?: Object;
    styleBuilder?: any;
    style?: any;
}
export class PointVectorElementOptions extends VectorElementOptions {
    position: MapPos;
    projection?: Projection;
}
export class LineVectorElementOptions extends VectorElementOptions {
    positions: MapPosVector | MapPos[];
    projection?: Projection;
}
export class VectorElementStyleBuilderOptions extends VectorElementOptions {}

export abstract class BaseVectorElement<T, U extends VectorElementOptions> extends BaseNative<T, U> {
    metaData: Object;
}
export abstract class BasePointVectorElement<T, U extends PointVectorElementOptions> extends BaseVectorElement<T, U> {
    position: MapPos;
    projection?: Projection;
    getNativePos(pos: MapPos, projection: Projection):any
}
export abstract class BaseLineVectorElement<T, U extends LineVectorElementOptions> extends BaseVectorElement<T, U> {
    positions: MapPosVector | MapPos[];
    projection?: Projection;
}
export class VectorElement<T, U extends VectorElementOptions> extends BaseVectorElement<T, U> {}
export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {}

export class VectorElementVector extends BaseNative<any, any> {
    size();
    getElement(index: number): VectorElement<any, any>;
    add(element: VectorElement<any, any>);
}
