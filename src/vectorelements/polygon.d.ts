import { Projection } from '../projections/projection';
import { MapPos, MapPosVector, MapPosVectorVector } from '../core/core';
import { BaseLineVectorElement, BaseVectorElementStyleBuilder, LineVectorElementOptions, VectorElementOptions } from './vectorelements';
import { LineStyleBuilder, LineStyleBuilderOptions } from './line';
import { Color } from 'tns-core-modules/color/color';
export class PolygonStyleBuilderOptions extends VectorElementOptions {
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions;
}
export class PolygonStyleBuilder extends BaseVectorElementStyleBuilder<any, PolygonStyleBuilderOptions> {
    color: Color | string;
    lineStyleBuilder: LineStyleBuilder | LineStyleBuilderOptions | any;
    buildStyle(): any;
}

export class PolygonOptions extends LineVectorElementOptions {
    positions: MapPosVector | MapPos[];
    holes?: MapPos[][] | MapPosVectorVector;
    projection?: Projection;
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions;
}

export class Polygon extends BaseLineVectorElement<any, PolygonOptions> {
    styleBuilder?: PolygonStyleBuilder | PolygonStyleBuilderOptions | any;
    style?: any;
    size?: number;
    color?: string | Color;
    lineStyleBuilder?: LineStyleBuilder | LineStyleBuilderOptions | any;
}
