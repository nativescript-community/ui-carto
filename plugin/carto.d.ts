import { Observable } from 'tns-core-modules/ui/page/page';
import { MapPos, MapPosVector, MapPosVectorVector } from './core/core';
import { Projection } from './projections/projection';

export abstract class BaseNative<T, U extends {}> extends Observable {
    options: U;
    native: T;
    constructor(options?: U, native?: T);
    initNativeView(native: T, options: U): void;
    getNative(): T;
}
export function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], projection?: Projection): any;
export function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], projection?: Projection): any;
