import { IProjection } from '../projections/projection';
import { Position } from '../core/core';
import { BaseElement, BaseElementStyleBuilder } from './vectorelements';
export class PolygonStyleBuilderOptions {
    size?: number;
    color?: string;
}
export class PolygonStyleBuilder<T, U extends PolygonStyleBuilderOptions> extends BaseElementStyleBuilder<any, PolygonStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class PolygonOptions extends PolygonStyleBuilderOptions {
    metaData?: Object;
    poses: Position[];
    projection?: IProjection;
    style?: any;
}

export class Polygon extends BaseElement<any, PolygonOptions> {}
