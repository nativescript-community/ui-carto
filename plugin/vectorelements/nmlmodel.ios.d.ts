import { BasePointVectorElement } from './vectorelements.ios';
import { NMLModelOptions } from './nmlmodel';
export declare class NMLModel extends BasePointVectorElement<NTNMLModel, NMLModelOptions> {
    scale: number;
    createNative(options: NMLModelOptions): NTNMLModel;
}
