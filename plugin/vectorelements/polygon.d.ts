import { Projection } from '../projections/projection';
import { MapPos, MapPosVector, MapPosVectorVector } from '../core/core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from './vectorelements';
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

export class PolygonOptions extends LineVectorElementOptions {
    positions: MapPosVector | MapPos[];
    holes?: MapPos[][] | MapPosVectorVector;
    projection?: Projection;
    size?: number;
    color?: string | Color;
    lineStyleBuilder?:LineStyleBuilder<any, any>
}

export class Polygon extends BaseLineVectorElement<any, PolygonOptions> {
    styleBuilder?: PolygonStyleBuilder<any, any>;
    style?: any;
    size?: number;
    color?: string | Color;
    lineStyleBuilder?:LineStyleBuilder<any, any>
}
