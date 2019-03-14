// import { BaseVectorElementStyleBuilder } from './vectorelements.common';
import { BasePointVectorElement } from './vectorelements.ios';
import { NMLModelOptions } from './nmlmodel';
// import { Color } from 'tns-core-modules/color/color';
import { nativeProperty } from 'nativescript-carto/carto.common';
import { getRelativePathToApp } from '../carto.common';
// import { nativeColorProperty, nativeCartoImageProperty, nativeProperty } from '../carto.ios';

// export class NMLModelStyleBuilder extends BaseVectorElementStyleBuilder<NTNMLModelStyleBuilder, NMLModelStyleBuilderOptions> {
//     createNative(options: NMLModelStyleBuilderOptions) {
//         return NTNMLModelStyleBuilder.alloc().init();
//     }
//     // @nativeCartoImageProperty image: string;

//     _buildStyle: NTNMLModelStyle;
//     buildStyle() {
//         if (!this._buildStyle) {
//             this._buildStyle = this.getNative().buildStyle();
//         }
//         return this._buildStyle;
//     }
// }

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
