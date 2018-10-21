import { BaseVectorElement } from './vectorelements.android';
import { NMLModelOptions } from './nmlmodel';
import { toNativeMapPos } from '../core/core';
import { nativeProperty } from '../carto.android';
import { getRelativePathToApp } from '../carto.common';

// export class NMLModelStyleBuilder extends BaseVectorElementStyleBuilder<com.carto.styles.NMLModelStyleBuilder, NMLModelStyleBuilderOptions> {
//     createNative(options: NMLModelStyleBuilderOptions) {
//         return new com.carto.styles.NMLModelStyleBuilder();
//     }
//     // @nativeCartoImageProperty image: string;

//     _buildStyle: com.carto.styles.NMLModelStyle;
//     buildStyle() {
//         if (!this._buildStyle) {
//             this._buildStyle = this.getNative().buildStyle();
//         }
//         return this._buildStyle;
//     }
// }

export class NMLModel extends BaseVectorElement<com.carto.vectorelements.NMLModel, NMLModelOptions> {
    @nativeProperty scale: number;

    createNative(options: NMLModelOptions) {
        // const style: com.carto.styles.NMLModelStyle = options.style || options.styleBuilder.buildStyle();
        const modelPath = getRelativePathToApp(options.name);
        if (modelPath) {
            const pos = options.pos;
            let nativePos;
            if (options.projection) {
                nativePos = options.projection.getNative().fromWgs84(toNativeMapPos(pos));
            } else {
                nativePos = toNativeMapPos(pos);
            }
            const result = new com.carto.vectorelements.NMLModel(nativePos, com.carto.utils.AssetUtils.loadAsset(modelPath));
            // result['owner'] = new WeakRef(this);
            return result;
        } else {
            console.error(`could not find model file: ${options.name}`);
            return null;
        }
    }
}
