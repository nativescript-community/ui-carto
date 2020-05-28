import { Color } from '@nativescript/core/color';
import { nativeColorProperty, nativeImageProperty } from '..';
import { BaseNative, nativeProperty } from '../index.common';
import { MapPos, fromNativeMapPos } from '../core';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

export class ClusterElementBuilder extends BaseNative<com.akylas.carto.additions.AKClusterElementBuilder, ClusterElementBuilderOptions> {
    @nativeImageProperty bitmap: string;
    @nativeColorProperty color: string | Color;
    @nativeProperty size: number;
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | com.carto.vectorelements.VectorElement;
    createNative(options: ClusterElementBuilderOptions) {
        // initClusterElementBuilderNative();
        const result = new com.akylas.carto.additions.AKClusterElementBuilder();
        if (!!options.buildClusterElement) {
            result.setInterface(
                new com.akylas.carto.additions.AKClusterElementBuilder.Interface({
                    buildClusterElement: this.nBuildClusterElement.bind(this),
                })
            );
        } else {
        }

        return result;
    }
    nBuildClusterElement (position: com.carto.core.MapPos, nElements: com.carto.vectorelements.VectorElementVector) {
        const result = this.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
        if (result instanceof BaseVectorElement) {
            return result.getNative();
        } else if (result) {
            return result;
        }
    }
    // private setImageFromSource(value: string | ImageSource | ImageAsset) {
    //     console.log('setImageFromSource', value);
    //     const source = _createImageSourceFromSrc(value);
    //     console.log('got cluster image', source.width, source.height, !!source.android);
    //     this.native.setClusterBitmap(source.android as android.graphics.Bitmap);
    // }

    // get image() {
    //     return this.options.image;
    // }
    // set image(value: string | ImageSource | ImageAsset) {
    //     if (this.native) {
    //         console.log('getting cluster builder image');
    //         const source = _createImageSourceFromSrc(value);
    //         console.log('got cluster builder image', !!source.android);
    //         // this.native.setBitmap(source.android);

    //         // this.setImageFromSource(value);
    //         console.log('cluster builder image set');
    //         // this.native.setBitmap(getImage(value));
    //         // this._buildStyle = null;
    //     }
    // }
}

// export class ClusterElementBuilder extends  ClusterElementBuilder() {

//     var image: Bitmap? = null
//     var elements: MutableMap<Long, MarkerStyle> = mutableMapOf()

//     override fun buildClusterElement(mapPos: MapPos?, elements: VectorElementVector?): VectorElement {

//         val count = elements?.size()!!
//         var style = findByKey(count)

//         if (count <= 1.0) {
//             style = (elements.get(0) as Marker).style
//         }

//         if (style == null) {
//             val canvasBitmap = image?.copy(Bitmap.Config.ARGB_8888, true)
//             val canvas = Canvas(canvasBitmap)

//             val paint = Paint(Paint.ANTI_ALIAS_FLAG)

//             paint.textAlign = Paint.Align.CENTER
//             paint.textSize = 12.0f
//             paint.color = Color.BLACK

//             val x: Float = (image?.width!! / 2).toFloat()
//             val y: Float = (image?.height!! / 2).toFloat() - 5.0f

//             val text = count.toString()
//             canvas.drawText(text, x, y, paint)

//             val builder = MarkerStyleBuilder()
//             builder.bitmap = BitmapUtils.createBitmapFromAndroidBitmap(canvasBitmap)
//             builder.size = 30.0f
//             builder.placementPriority = -count.toInt()

//             style = builder.buildStyle()

//             this.elements.put(count, style)
//         }

//         return Marker(mapPos, style)
//     }

//     fun findByKey(count: Long): MarkerStyle? {

//         if (elements.containsKey(count)) {
//             return elements[count]!!
//         }

//         return null
//     }
// }
