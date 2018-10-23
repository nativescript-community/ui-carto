import { BaseVectorElement } from './vectorelements.ios';
import { NMLModelOptions } from './nmlmodel';
export declare class NMLModel extends BaseVectorElement<NTNMLModel, NMLModelOptions> {
    scale: number;
    createNative(options: NMLModelOptions): NTNMLModel;
}
