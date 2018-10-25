import { Projection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
// import { LineStyleBuilder } from './line';
import { Color } from 'tns-core-modules/color/color';
import { MapPosVector, MapPosVectorVector } from '../core/core';
export class Polygon3DStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    sideColor?: Color | string;
    // lineStyleBuilder?:LineStyleBuilder<any, any>
}
export class Polygon3DStyleBuilder<T, U extends Polygon3DStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, Polygon3DStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class Polygon3DOptions extends Polygon3DStyleBuilderOptions {
    height: number;
    positions MapPosVector | MapPos[];
    holes?: MapPos[][] | MapPosVectorVector;
    projection?: Projection;
}

export class Polygon3D extends BaseVectorElement<any, Polygon3DOptions> {
    styleBuilder?: Polygon3DStyleBuilder<any, any>;
    style?: any;
}
