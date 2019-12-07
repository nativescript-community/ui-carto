import { BaseNative } from '../carto.common';
import { fromNativeMapPos, MapPos } from '../core';
import { BaseVectorElement, VectorElementVector } from '../vectorelements';
import { ClusterElementBuilderOptions } from './cluster';

export class ClusterElementBuilderImpl extends NTClusterElementBuilder {
    private _owner: WeakRef<ClusterElementBuilder>;
    public static initWithOwner(owner: WeakRef<ClusterElementBuilder>): ClusterElementBuilderImpl {
        const delegate = ClusterElementBuilderImpl.new() as ClusterElementBuilderImpl;
        delegate._owner = owner;
        return delegate;
    }
    buildClusterElementSwigExplicitNTClusterElementBuilderElements(position: NTMapPos, nElements: NTVectorElementVector | number) {
        const owner = this._owner.get();
        if (owner.buildClusterElement) {
            const result = owner.buildClusterElement(fromNativeMapPos(position), new VectorElementVector(undefined, nElements));
            if (result instanceof BaseVectorElement) {
                return result.getNative();
            } else if (result) {
                return result;
            }
        }
        return super.buildClusterElementSwigExplicitNTClusterElementBuilderElements(position, nElements as NTVectorElementVector);
    }
}

export class ClusterElementBuilder extends BaseNative<NTClusterElementBuilder, ClusterElementBuilderOptions> {
    createNative() {
        return ClusterElementBuilderImpl.initWithOwner(new WeakRef(this));
    }
    buildClusterElement?: (position: MapPos, elements: VectorElementVector) => BaseVectorElement<any, any> | NTVectorElement;
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
