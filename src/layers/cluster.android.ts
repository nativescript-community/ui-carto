import { Color } from 'tns-core-modules/color/color';
import { nativeColorProperty, nativeImageProperty } from '../carto';
import { BaseNative, nativeProperty } from '../carto.common';
import { fromNativeMapPos, MapPos } from '../core/core';
import { BaseVectorElement, VectorElementVector } from '../vectorelements/vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

let ClusterElementBuilderNative: ClusterElementBuilderNative;

export interface ClusterElementBuilderNative extends com.akylas.carto.additions.AKClusterElementBuilder {
    // tslint:disable-next-line:no-misused-new
    new (owner: WeakRef<ClusterElementBuilder>): ClusterElementBuilderNative;
}

// let MapEventListener: MapEventListener;

function initClusterElementBuilderNative() {
    if (ClusterElementBuilderNative) {
        return;
    }
    class ClusterElementBuilderImpl extends com.akylas.carto.additions.AKClusterElementBuilder {
        constructor(private owner: WeakRef<ClusterElementBuilder>) {
            super();
            return global.__native(this);
        }
        // buildClusterElement( position: com.carto.core.MapPos, nElements: any) {
        //     const owner = this.owner.get();
        //     if (owner.buildClusterElement) {
        //         const result = owner.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
        //         if (result instanceof BaseVectorElement) {
        //             return result.getNative();
        //         } else if (result) {
        //             return result;
        //         }
        //     }
        //     return super.buildClusterElement(position, nElements);
        // }
        buildCluster(position: com.carto.core.MapPos, nElements: com.carto.vectorelements.VectorElementVector) {
            const owner = this.owner.get();
            if (owner.buildClusterElement) {
                const result = owner.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
                if (result instanceof BaseVectorElement) {
                    return result.getNative();
                } else if (result) {
                    return result;
                }
            }
            return super.buildCluster(position, nElements);
        }
    }
    ClusterElementBuilderNative = ClusterElementBuilderImpl as any;
}

export class ClusterElementBuilder extends BaseNative<com.akylas.carto.additions.AKClusterElementBuilder, ClusterElementBuilderOptions> {
    @nativeImageProperty bitmap: string;
    @nativeColorProperty color: string | Color ;
    @nativeProperty size: number;
    createNative(options: ClusterElementBuilderOptions) {
        this.log('create ClusterElementBuilder', !!this.buildClusterElement, !!this.options.buildClusterElement, !!options.buildClusterElement);
        initClusterElementBuilderNative();
        const result = new ClusterElementBuilderNative(new WeakRef(this));
        if (!!options.buildClusterElement) {
            result.setUseNativeBuilder(false);
        }
        // result.setUseNativeBuilder(false);
        return result;
        // return new com.carto.layers.ClusterElementBuilder();
    }
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | com.carto.vectorelements.VectorElement;

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
