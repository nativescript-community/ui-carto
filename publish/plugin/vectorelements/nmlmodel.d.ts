import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BaseVectorElement, BaseVectorElementStyleBuilder, VectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';

// export class NMLModelStyleBuilderOptions extends VectorElementOptions {

// }
// export class NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, NMLModelStyleBuilderOptions> {
//     constructor(options: U);
//     buildStyle(): any;
// }

export class NMLModelOptions extends VectorElementOptions {
    position: MapPos;
    name: string;
    scale?: number;
    projection?: IProjection;
    // styleBuilder?: NMLModelStyleBuilder<any, any>;
    // style?: any;
}
export class NMLModel extends BaseVectorElement<any, NMLModelOptions> {
    // styleBuilder?: NMLModelStyleBuilder<any, any>;
    // style?: any;
}
