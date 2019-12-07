import { getRelativePathToApp, nativeProperty } from '../carto.common';
import { NMLModelOptions } from './nmlmodel';
import { BasePointVectorElement } from '.';

export class NMLModel extends BasePointVectorElement<com.carto.vectorelements.NMLModel, NMLModelOptions> {
    @nativeProperty scale: number;

    createNative(options: NMLModelOptions) {
        // const style: com.carto.styles.NMLModelStyle = options.style || options.styleBuilder.buildStyle();
        const modelPath = getRelativePathToApp(options.name);
        if (modelPath) {
            const nativePos = this.getNativePos(options.position, options.projection);
            const result = new com.carto.vectorelements.NMLModel(nativePos, com.carto.utils.AssetUtils.loadAsset(modelPath));
            // result['owner'] = new WeakRef(this);
            return result;
        } else {
            console.error(`could not find model file: ${options.name}`);
            return null;
        }
    }
}
