import { BasePointVectorElement, PointVectorElementOptions, VectorElement, VectorElementVector } from '.';
import { MapPos } from 'nativescript-carto/core';
import { Projection } from 'nativescript-carto/projections';
import { DefaultLatLonKeys, GenericMapPos } from 'nativescript-carto/core/index.common';

export class GroupOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    elements: Array<{ id: string; element: VectorElement<any, any> }>;
}

export class Group<T = DefaultLatLonKeys> extends VectorElementVector implements BasePointVectorElement<any, GroupOptions<T>, T> {
    position: GenericMapPos<T>;
    projection?: Projection;
    getNativePos(pos: GenericMapPos<T>): any;
    visible?: boolean;
    metaData: { [k: string]: string };
}
