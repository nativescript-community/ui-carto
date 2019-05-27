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

export class AnimationStyle {
    static getFadeAnimationType(): AnimationStyle;
    static getSizeAnimationType(): AnimationStyle;
    getPhaseOutDuration(): number;
    getPhaseInDuration(): number;
    getRelativeSpeed(): number;
}

export class VectorElementOptions {
    visible?: boolean;
    metaData?: Object;
    styleBuilder?: any;
    style?: any;
}
export class PointVectorElementOptions extends VectorElementOptions {
    position?: MapPos;
    projection?: Projection;
}
export class LineVectorElementOptions extends VectorElementOptions {
    positions: MapPosVector | MapPos[];
    projection?: Projection;
}
export class VectorElementStyleBuilderOptions extends VectorElementOptions {}
export class BillboardStyleBuilderOptions extends VectorElementStyleBuilderOptions {
    scaleWithDPI?: boolean;
    hideIfOverlapped?: boolean;
    horizontalOffset?: number;
    verticalOffset?: number;
    animationStyle?: AnimationStyle;
    placementPriority?: number;
    causesOverlap?: boolean;
    attachAnchorPointX?: number;
    attachAnchorPointY?: number;
}

export abstract class BaseVectorElement<T, U extends VectorElementOptions> extends BaseNative<T, U> {
    visible?: boolean;
    metaData: Object;
}
export abstract class BasePointVectorElement<T, U extends PointVectorElementOptions> extends BaseVectorElement<T, U> {
    position: MapPos;
    projection?: Projection;
    getNativePos(pos: MapPos, projection: Projection): any;
}
export abstract class BaseLineVectorElement<T, U extends LineVectorElementOptions> extends BaseVectorElement<T, U> {
    positions: MapPosVector | MapPos[];
    projection?: Projection;
}
export class VectorElement<T, U extends VectorElementOptions> extends BaseVectorElement<T, U> {}
export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {}

export abstract class BillboardStyleBuilder<T, U extends BillboardStyleBuilderOptions> extends BaseVectorElementStyleBuilder<T, U> {}

export class VectorElementVector extends BaseNative<any, any> {
    size();
    getElement(index: number): VectorElement<any, any>;
    add(element: VectorElement<any, any>);
}
