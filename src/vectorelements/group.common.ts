import { BasePointVectorElement, VectorElementVector } from '.';
import { MapPos } from '../core';
import { Projection } from '../projections';
import { GroupOptions } from './group';

export abstract class GroupBase extends VectorElementVector implements BasePointVectorElement<any, GroupOptions> {
    position: MapPos;
    projection?: Projection;
    elements: BasePointVectorElement<any, any>[];
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
