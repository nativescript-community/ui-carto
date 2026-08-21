import { BaseNative } from '..';
import { DefaultLatLonKeys, GenericMapPos, MapBounds, MapPos, MapPosVector } from '../core';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';
import { Accessors as Acc_BaseVectorElement, Methods as Met_BaseVectorElement } from '../bindings/vectorelements/VectorElement';
import { Accessors as Acc_BasePointVectorElement, Methods as Met_BasePointVectorElement } from '../bindings/vectorelements/VectorElement';
import { Accessors as Acc_BaseBillboardVectorElement, Methods as Met_BaseBillboardVectorElement } from '../bindings/vectorelements/Billboard';
import { Accessors as Acc_BaseLineVectorElement, Methods as Met_BaseLineVectorElement } from '../bindings/vectorelements/VectorElement';
import { Accessors as Acc_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';

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
    metaData?: { [k: string]: string };
    styleBuilder?: any;
    style?: any;
}
export class PointVectorElementOptions<T = DefaultLatLonKeys> extends VectorElementOptions {
    position?: GenericMapPos<T>;
    projection?: Projection;
}
export class BillboardVectorElementOptions<K = DefaultLatLonKeys> extends PointVectorElementOptions<K> {
    rotation?: number;
}
export class LineVectorElementOptions<T = DefaultLatLonKeys> extends VectorElementOptions {
    positions?: MapPosVector<T> | GenericMapPos<T>[];
    projection?: Projection;
    ignoreAltitude?: boolean;
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
    metaData: { [k: string]: string };
    id?: number;
    getBounds(): MapBounds<DefaultLatLonKeys>;
    getGeometry(): Geometry<DefaultLatLonKeys>;
    getMetadataElement(key: string): { [k: string]: string };
    setMetadataElement(key: string, element: { [k: string]: string }): void;
}
export abstract class BasePointVectorElement<T, U extends PointVectorElementOptions<K>, K = DefaultLatLonKeys> extends BaseVectorElement<T, U> {
    position?: GenericMapPos<K>;
    projection?: Projection;
    getNativePos(pos: GenericMapPos<K>, projection?: Projection): any;
}
export abstract class BaseBillboardVectorElement<T, U extends BillboardVectorElementOptions<K>, K = DefaultLatLonKeys> extends BasePointVectorElement<T, U, K> {
    rotation?: number;
}
export abstract class BaseLineVectorElement<T, U extends LineVectorElementOptions<K>, K = DefaultLatLonKeys> extends BaseVectorElement<T, U> {
    positions?: MapPosVector<K> | GenericMapPos<K>[];
    projection?: Projection;
}
export class VectorElement<T, U extends VectorElementOptions> extends BaseVectorElement<T, U> {}
export abstract class BaseVectorElementStyleBuilder<T, U extends VectorElementStyleBuilderOptions> extends BaseNative<T, U> {
    buildStyle(): any;
}

export abstract class BillboardStyleBuilder<T, U extends BillboardStyleBuilderOptions> extends BaseVectorElementStyleBuilder<T, U> {}

export class VectorElementVector extends BaseNative<any, any> {
    elements: BaseVectorElement<any, any>[];
    size();
    getElement(index: number): VectorElement<any, any>;
    add(element: VectorElement<any, any>);
}


export interface BaseVectorElement<T, U extends VectorElementOptions> extends Omit<Acc_BaseVectorElement, 'id' | 'metaData' | 'visible'>, Omit<Met_BaseVectorElement, 'getBounds' | 'getGeometry'> {}

export interface BasePointVectorElement<T, U extends PointVectorElementOptions<K>, K = DefaultLatLonKeys> extends Acc_BasePointVectorElement, Met_BasePointVectorElement {}

export interface BaseBillboardVectorElement<T, U extends BillboardVectorElementOptions<K>, K = DefaultLatLonKeys>
    extends Omit<Acc_BaseBillboardVectorElement, 'rotation'>,
        Met_BaseBillboardVectorElement {}

export interface BaseLineVectorElement<T, U extends LineVectorElementOptions<K>, K = DefaultLatLonKeys> extends Acc_BaseLineVectorElement, Met_BaseLineVectorElement {}

export interface BillboardStyleBuilder<T, U extends BillboardStyleBuilderOptions> extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}

export interface VectorElement<T, U extends VectorElementOptions> extends Acc_VectorElement, Met_VectorElement {}
