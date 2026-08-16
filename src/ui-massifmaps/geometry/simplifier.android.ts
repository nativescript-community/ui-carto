import { BaseNative } from '../BaseNative';
import { DouglasPeuckerGeometrySimplifierOptions, GeometrySimplifierOptions } from './simplifier';

export abstract class GeometrySimplifier<T extends com.massifmaps.geometry.GeometrySimplifier, U extends GeometrySimplifierOptions> extends BaseNative<T, U> {}

export class DouglasPeuckerGeometrySimplifier extends BaseNative<com.massifmaps.geometry.GeometrySimplifier, DouglasPeuckerGeometrySimplifierOptions> {
    createNative(options: DouglasPeuckerGeometrySimplifierOptions) {
        return new com.massifmaps.geometry.DouglasPeuckerGeometrySimplifier(options.tolerance);
    }
}
