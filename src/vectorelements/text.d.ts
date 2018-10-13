import { IProjection } from '../projections/projection';
import { Position } from '../core/core';
import { BaseElement, BaseElementStyleBuilder } from './vectorelements';

export class TextStyleBuilderOptions {
    color?: string;
}
export class TextOptions extends TextStyleBuilderOptions {
    metaData?: Object;
    pos: Position;
    text: string;
    projection?: IProjection;
    style?: any;
}

export class TextStyleBuilder<T, U extends TextStyleBuilderOptions> extends BaseElementStyleBuilder<any, TextStyleBuilderOptions> {
    constructor(options: U);
    buildStyle(): any;
}

export class Text extends BaseElement<any, TextOptions> {}
