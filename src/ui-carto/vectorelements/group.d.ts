import { BasePointVectorElement, PointVectorElementOptions, VectorElement, VectorElementVector } from '.';
import { DefaultLatLonKeys, GenericMapPos, MapPos } from '../core';
import { Projection } from '../projections';

export class GroupOptions<T = DefaultLatLonKeys> extends PointVectorElementOptions<T> {
    elements: { id: string; element: VectorElement<any, any> }[];
}

export class Group<T = DefaultLatLonKeys> extends VectorElementVector implements BasePointVectorElement<any, GroupOptions<T>, T> {
    position: GenericMapPos<T>;
    projection?: Projection;
    getNativePos(pos: GenericMapPos<T>): any;
    visible?: boolean;
    metaData: { [k: string]: string };
}
