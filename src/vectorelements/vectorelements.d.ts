import { BaseNative } from '../carto';

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
export class VectorElementStyleBuilderOptions {}

export abstract class BaseVectorElement<T, U extends VectorElementOptions> extends BaseNative<T, U> {
    metaData: Object;
}
export class VectorElement<T, U extends VectorElementOptions> extends BaseVectorElement<T, U> {}
export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {}

export class VectorElementVector extends BaseNative<any, any> {
    size();
    getElement(index: number): VectorElement<any, any>;
    add(element: VectorElement<any, any>);
}
