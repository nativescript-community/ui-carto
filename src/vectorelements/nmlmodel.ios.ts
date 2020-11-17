import { getRelativePathToApp, nativeProperty } from '../index.common';
import { NMLModelOptions } from './nmlmodel';
import { BasePointVectorElement } from './index.ios';

export class NMLModel extends BasePointVectorElement<NTNMLModel, NMLModelOptions> {
    @nativeProperty scale: number;

    createNative(options: NMLModelOptions) {
        // const style: NTNMLModelStyle = options.style || options.styleBuilder.buildStyle();
        const modelPath = getRelativePathToApp(options.name);
        if (modelPath) {
            const nativePos = this.getNativePos(options.position, options.projection);
            const result = NTNMLModel.alloc().initWithPosSourceModelData(nativePos, NTAssetUtils.loadAsset(modelPath));
            // result['owner'] = new WeakRef(this);
            return result;
        } else {
            console.error(`could not find model file: ${options.name}`);
            return null;
        }
    }
}
