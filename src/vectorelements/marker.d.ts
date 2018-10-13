import { IProjection } from '../projections/projection';
import { Position } from '../core/core';
import { BaseElement, BaseElementStyleBuilder } from './vectorelements';

export class MarkerStyleBuilderOptions {
    size?: number;
    color?: string;
}
export class MarkerStyleBuilder<T, U extends MarkerStyleBuilderOptions> extends BaseElementStyleBuilder<any, MarkerStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class MarkerOptions extends MarkerStyleBuilderOptions {
    metaData?: Object;
    pos: Position;
    projection?: IProjection;
    rotation?: number;
    style?: any;
}
export class Marker extends BaseElement<any, MarkerOptions> {}
