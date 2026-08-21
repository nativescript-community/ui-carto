import { BasePointVectorElement, PointVectorElementOptions } from '.';
import { DefaultLatLonKeys } from '../core';
import { Accessors as Acc_NMLModelStyleBuilder } from '../bindings/styles/NMLModelStyleBuilder';
import { Accessors as Acc_NMLModel } from '../bindings/vectorelements/NMLModel';
import { Methods as Met_NMLModelStyleBuilder } from '../bindings/styles/NMLModelStyleBuilder';
import { Accessors as Acc_BillboardStyleBuilder, Methods as Met_BillboardStyleBuilder } from '../bindings/styles/BillboardStyleBuilder';
import { Accessors as Acc_StyleBuilder, Methods as Met_StyleBuilder } from '../bindings/styles/StyleBuilder';
import { Accessors as Acc_Billboard, Methods as Met_Billboard } from '../bindings/vectorelements/Billboard';
import { Accessors as Acc_VectorElement, Methods as Met_VectorElement } from '../bindings/vectorelements/VectorElement';

export class NMLModelStyleBuilderOptions extends VectorElementOptions {}
export class NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends BaseVectorElementStyleBuilder<any, NMLModelStyleBuilderOptions> {
    constructor(options: U);
}

export class NMLModelOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    scale?: number;
    styleBuilder?: NMLModelStyleBuilder<any, any> | NMLModelStyleBuilderOptions | com.massifmaps.styles.NMLModelStyle;
    style?: any;
}
export class NMLModel<T = DefaultLatLonKeys> extends BasePointVectorElement<any, NMLModelOptions<T>, T> {
    styleBuilder: NMLModelStyleBuilder<any, any>;
    style: any;
}


export interface NMLModel<T = DefaultLatLonKeys> extends Acc_NMLModel {}

export interface NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends Acc_NMLModelStyleBuilder, Met_NMLModelStyleBuilder {}

export interface NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends Acc_BillboardStyleBuilder, Met_BillboardStyleBuilder {}
export interface NMLModelStyleBuilder<T, U extends NMLModelStyleBuilderOptions> extends Acc_StyleBuilder, Met_StyleBuilder {}

export interface NMLModel<T = DefaultLatLonKeys> extends Acc_Billboard, Omit<Met_Billboard, 'setRotation'> {}
export interface NMLModel<T = DefaultLatLonKeys> extends Acc_VectorElement, Omit<Met_VectorElement, 'getBounds' | 'getGeometry'> {}
