import { IProjection } from '../projections/projection';
import { MapPos } from '../core/core';
import { BasePointVectorElement, BaseVectorElementStyleBuilder, PointVectorElementOptions } from './vectorelements';
import { Color } from 'tns-core-modules/color/color';

// export class NMLModelStyleBuilderOptions extends VectorElementOptions {

// }
// export class NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, NMLModelStyleBuilderOptions> {
//     constructor(options: U);
//     buildStyle(): any;
// }

export class NMLModelOptions extends PointVectorElementOptions {
    name: string;
    scale?: number;
    // styleBuilder?: NMLModelStyleBuilder<any, any>;
    // style?: any;
}
export class NMLModel extends BasePointVectorElement<any, NMLModelOptions> {
    // styleBuilder?: NMLModelStyleBuilder<any, any>;
    // style?: any;
}
