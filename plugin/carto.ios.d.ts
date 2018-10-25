import { MapPos } from './core/core';
import { MapPosVector, MapPosVectorVector } from './core/core.ios';
import { Projection } from './projections/projection.ios';
export declare const nativeProperty: (target: Object, key: string | symbol, converter?: any) => void;
export declare function nativeColorProperty(target: Object, key: string | symbol): void;
export declare function nativeCartoImageProperty(target: Object, key: string | symbol): void;
export declare function nativeImageProperty(target: Object, key: string | symbol): void;
export declare function mapPosVectorFromArgs(positions: MapPosVector | MapPos[], projection?: Projection): NTMapPosVector;
export declare function mapPosVectorVectorFromArgs(positions: MapPosVectorVector | MapPos[][], projection?: Projection): NTMapPosVectorVector;
