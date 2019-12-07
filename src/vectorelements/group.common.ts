import { applyMixins } from 'nativescript-carto/core/index.common';
import { GroupOptions } from './group';
import { BasePointVectorElement, VectorElementVector } from '.';
import { MapPos } from 'nativescript-carto/core';
import { Projection } from 'nativescript-carto/projections';

export abstract class GroupBase extends VectorElementVector implements BasePointVectorElement<any, GroupOptions> {
    position: MapPos;
    projection?: Projection;
    elements: Array<BasePointVectorElement<any, any>>;
    getNativePos(pos: MapPos, projection: Projection) {
        throw new Error('Method not implemented.');
    }
    visible?: boolean;
    metaData: { [k: string]: string };
    initNativeView(native, options) {
        // No init for a group right now
        // for (const key in options) {
        //     (this as any)[key] = options[key];
        // }
    }
}
// applyMixins(GroupBase, [BasePointVectorElement]);
