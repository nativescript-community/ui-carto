import { Projection } from '../projections/projection';
import { MapPos, MapPosVector, MapPosVectorVector } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
import { LineStyleBuilder } from './line';
import { Color } from 'tns-core-modules/color/color';
export class PolygonStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    lineStyleBuilder?:LineStyleBuilder<any, any>
}
export class PolygonStyleBuilder<T, U extends PolygonStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, PolygonStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class PolygonOptions extends PolygonStyleBuilderOptions {
    positions MapPosVector | MapPos[];
    holes?: MapPos[][] | MapPosVectorVector;
    projection?: Projection;
}

export class Polygon extends BaseVectorElement<any, PolygonOptions> {
    styleBuilder?: PolygonStyleBuilder<any, any>;
    style?: any;
}
