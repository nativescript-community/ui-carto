import { BasePointVectorElement } from './vectorelements.android';
import { NMLModelOptions } from './nmlmodel';
export declare class NMLModel extends BasePointVectorElement<com.carto.vectorelements.NMLModel, NMLModelOptions> {
    scale: number;
    createNative(options: NMLModelOptions): com.carto.vectorelements.NMLModel;
}
