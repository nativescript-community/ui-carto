import { BasePointVectorElement, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';

export class NMLModelStyleBuilderOptions extends VectorElementOptions {}
export class NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, NMLModelStyleBuilderOptions> {
    constructor(options: U);
}

export class NMLModelOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    scale?: number;
    styleBuilder?: NMLModelStyleBuilder<any, any> | NMLModelStyleBuilderOptions | com.carto.styles.NMLModelStyle;
    style?: any;
}
export class NMLModel<T = DefaultLatLonKeys> extends BasePointVectorElement<any, NMLModelOptions<T>, T> {
    styleBuilder: NMLModelStyleBuilder<any, any>;
    style: any;
}
