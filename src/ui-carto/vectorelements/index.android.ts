import { AnimationStyle, BillboardStyleBuilderOptions, LineVectorElementOptions, PointVectorElementOptions, VectorElementOptions } from '.';
// import { BaseVectorElement } from './vectorelements.common';
import { nativeProperty } from '../index.common';
import { BaseNative } from '../BaseNative';
import { JSVariantToNative, nativeMapToJS, nativeVariantToJS } from '../utils';
import { Projection } from '../projections';
import { MapPos, MapPosVector, fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core';
import { mapPosVectorFromArgs } from '..';
import { BaseVectorElementStyleBuilder } from './index.common';
import { Geometry } from '../geometry';
export { BaseVectorElementStyleBuilder };

export const BillboardOrientation = {
    get FACE_CAMERA() {
        return com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_FACE_CAMERA;
    },
    get FACE_CAMERA_GROUND() {
        return com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_FACE_CAMERA_GROUND;
    },
    get GROUND() {
        return com.carto.styles.BillboardOrientation.BILLBOARD_ORIENTATION_GROUND;
    }
};

export const BillboardScaling = {
    get CONST_SCREEN_SIZE() {
        return com.carto.styles.BillboardScaling.BILLBOARD_SCALING_CONST_SCREEN_SIZE;
    },
    get SCREEN_SIZE() {
        return com.carto.styles.BillboardScaling.BILLBOARD_SCALING_SCREEN_SIZE;
    },
    get WORLD_SIZE() {
        return com.carto.styles.BillboardScaling.BILLBOARD_SCALING_WORLD_SIZE;
    }
};

export abstract class BaseVectorElement<T extends com.carto.vectorelements.VectorElement, U extends VectorElementOptions> extends BaseNative<T, U> {
    @nativeProperty visible: boolean;
    createNative(options: U) {
        return null;
    }

    get metaData(): { [k: string]: string } {
        if (this.native) {
            return nativeMapToJS(this.native.getMetaData());
        }
        return this.options.metaData;
    }
    set metaData(value: { [k: string]: string }) {
        this.options.metaData = value;
        if (this.native) {
            const theMap = new com.carto.core.StringVariantMap();
            for (const key in value) {
                theMap.set(key, new com.carto.core.Variant(value[key]));
            }
            this.native.setMetaData(theMap);
        }
    }

    abstract buildStyle();

    rebuildStyle() {
        (this.native as any).setStyle(this.buildStyle());
    }
}
export abstract class BasePointVectorElement<
    T extends com.carto.vectorelements.VectorElement & {
        getPos?(): com.carto.core.MapPos;
        setPos?(pos: com.carto.core.MapPos);
    },
    U extends PointVectorElementOptions
> extends BaseVectorElement<T, U> {
    projection?: Projection;
    get position() {
        if (this.native && this.native.getPos) {
            const nativePos = this.native.getPos();
            return fromNativeMapPos(nativePos);
        }
        return this.options.position;
    }
    set position(pos: MapPos) {
        this.options.position = pos;
        if (this.native && this.native.setPos) {
            this.native.setPos(this.getNativePos(pos));
        }
    }

    getNativePos(pos: MapPos, projection?: Projection): com.carto.core.MapPos {
        return toNativeMapPos(pos);
    }
}

export abstract class BaseBillboardVectorElement<T extends com.carto.vectorelements.Billboard, U extends PointVectorElementOptions> extends BasePointVectorElement<T, U> {
    @nativeProperty rotation: number;
}

export abstract class BaseLineVectorElement<
    T extends com.carto.vectorelements.VectorElement & {
        getPoses?(): com.carto.core.MapPosVector;
        setPoses?(pos: com.carto.core.MapPosVector);
    },
    U extends LineVectorElementOptions
> extends BaseVectorElement<T, U> {
    projection?: Projection;
    get positions() {
        // if (this.native && this.native.getPoses) {
        //     const nativePos = this.native.getPoses();
        //     if (this.projection) {
        //         return fromNativeMapPos(this.projection.getNative().toWgs84(nativePos));
        //     }
        //     return fromNativeMapPos(nativePos);
        // }
        return this.options.positions;
    }
    set positions(positions: MapPosVector | MapPos[]) {
        this.options.positions = positions;
        if (this.native && this.native.setPoses) {
            this.native.setPoses(mapPosVectorFromArgs(positions, this.options.ignoreAltitude));
        }
    }
}

export class VectorElement extends BaseVectorElement<com.carto.vectorelements.VectorElement, VectorElementOptions> {
    @nativeProperty id: number;

    containsMetaDataKey(key: string): boolean {
        return this.native ? this.native.containsMetaDataKey(key) : false;
    }
    getMetadataElement(key: string): { [k: string]: string } {
        if (this.native) {
            return nativeVariantToJS(this.native.getMetaDataElement(key));
        }
        return undefined;
    }
    setMetadataElement(key: string, element: { [k: string]: string }): void {
        if (this.native) {
            this.native.setMetaDataElement(key, JSVariantToNative(element));
        }
    }
    getGeometry() {
        return this.getNative().getGeometry();
    }
    getBounds() {
        return fromNativeMapBounds(this.getNative().getBounds());
    }

    buildStyle() {}
}

export class VectorElementVector extends BaseNative<com.carto.vectorelements.VectorElementVector, any> {
    elements: BaseVectorElement<any, any>[] = [];
    createNative() {
        const result = new com.carto.vectorelements.VectorElementVector();
        if (this.elements.length > 0) {
            this.elements.forEach((element) => {
                result.add(element.getNative());
            });
        }
        return result;
    }
    getElement(index: number): BaseVectorElement<any, any> {
        return this.elements[index] || new VectorElement(undefined, this.native.get(index));
    }
    size() {
        if (this.native) {
            return this.native.size();
        }
        return this.elements.length;
    }
    add(element: BaseVectorElement<any, any>) {
        this.elements.push(element);
        if (this.native) {
            this.native.add(element.getNative());
        }
    }
}

export abstract class BillboardStyleBuilder<T extends com.carto.styles.BillboardStyleBuilder, U extends BillboardStyleBuilderOptions> extends BaseVectorElementStyleBuilder<T, U> {
    createNative(options: BillboardStyleBuilderOptions) {
        return null;
    }
    @nativeProperty scaleWithDPI: boolean;
    @nativeProperty hideIfOverlapped: boolean;
    @nativeProperty horizontalOffset: number;
    @nativeProperty verticalOffset: number;
    @nativeProperty animationStyle: AnimationStyle;
    @nativeProperty placementPriority: number;
    @nativeProperty causesOverlap: boolean;
    @nativeProperty attachAnchorPointX: number;
    @nativeProperty attachAnchorPointY: number;

    mBuildStyle: com.carto.styles.Style;
    abstract buildStyle();

    dispose(): void {
        this.mBuildStyle = null;
        super.dispose();
    }
}
