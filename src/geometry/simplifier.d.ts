import { BaseNative } from '../carto';
export interface GeometrySimplifierOptions {}
export interface DouglasPeuckerGeometrySimplifierOptions extends GeometrySimplifierOptions {
    tolerance: number;
}

export abstract class GeometrySimplifier<T , U extends GeometrySimplifierOptions> extends BaseNative<T, U> {}

export class DouglasPeuckerGeometrySimplifier extends BaseNative<any, DouglasPeuckerGeometrySimplifierOptions> {}
