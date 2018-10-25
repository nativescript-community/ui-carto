import { Observable } from 'tns-core-modules/ui/core/view';
import { MapPos, MapPosVector, MapPosVectorVector } from './core/core';
import { Projection } from './projections/projection';

export abstract class BaseNative<T, U extends {}> extends Observable {
    options?: U;
    constructor(options?: U, native?: T);
    native: T;
    initNativeView(native: T, options: U);
    getNative(): T;
    createNative(options: U): T;
}

export function mapPosVectorFromArgs(positions:  MapPos[] | MapPosVector, projection?: Projection): any;
export function mapPosVectorVectorFromArgs(positions: MapPos[][] | MapPosVectorVector, projection?: Projection): any;
