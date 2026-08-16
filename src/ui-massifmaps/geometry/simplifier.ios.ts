import { BaseNative } from '../BaseNative';
import { DouglasPeuckerGeometrySimplifierOptions, GeometrySimplifierOptions } from './simplifier';

export abstract class GeometrySimplifier<T extends MSFGeometrySimplifier, U extends GeometrySimplifierOptions> extends BaseNative<T, U> {}

export class DouglasPeuckerGeometrySimplifier extends BaseNative<MSFGeometrySimplifier, DouglasPeuckerGeometrySimplifierOptions> {
    createNative(options: DouglasPeuckerGeometrySimplifierOptions) {
        return MSFDouglasPeuckerGeometrySimplifier.alloc().initWithTolerance(options.tolerance);
    }
}
