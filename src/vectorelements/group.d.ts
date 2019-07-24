import { BasePointVectorElement, PointVectorElementOptions, VectorElement, VectorElementVector } from './vectorelements';
import { MapPos } from 'nativescript-carto/core/core';
import { Projection } from 'nativescript-carto/projections/projection';

export class GroupOptions extends PointVectorElementOptions {
    elements: Array<{ id: string; element: VectorElement<any, any> }>;
}

export class Group extends VectorElementVector implements BasePointVectorElement<any, GroupOptions> {
    options: GroupOptions;
    constructor(options?: GroupOptions, native?: any);
    position: MapPos;
    projection?: Projection;
    getNativePos(pos: MapPos): MapPos;
    visible?: boolean;
    metaData: { [k: string]: string };
}
