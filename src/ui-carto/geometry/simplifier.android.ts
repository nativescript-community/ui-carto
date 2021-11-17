import { BaseNative } from "../BaseNative";
import { DouglasPeuckerGeometrySimplifierOptions, GeometrySimplifierOptions } from './simplifier';

export abstract class GeometrySimplifier<T extends com.carto.geometry.GeometrySimplifier, U extends GeometrySimplifierOptions> extends BaseNative<T, U> {}

export class DouglasPeuckerGeometrySimplifier extends BaseNative<com.carto.geometry.GeometrySimplifier, DouglasPeuckerGeometrySimplifierOptions> {
    createNative(options: DouglasPeuckerGeometrySimplifierOptions) {
        return new com.carto.geometry.DouglasPeuckerGeometrySimplifier(options.tolerance);
    }
}
