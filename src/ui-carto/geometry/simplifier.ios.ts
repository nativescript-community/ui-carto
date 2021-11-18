import { BaseNative } from '../BaseNative';
import { DouglasPeuckerGeometrySimplifierOptions, GeometrySimplifierOptions } from './simplifier';

export abstract class GeometrySimplifier<T extends NTGeometrySimplifier, U extends GeometrySimplifierOptions> extends BaseNative<T, U> {}

export class DouglasPeuckerGeometrySimplifier extends BaseNative<NTGeometrySimplifier, DouglasPeuckerGeometrySimplifierOptions> {
    createNative(options: DouglasPeuckerGeometrySimplifierOptions) {
        return  NTDouglasPeuckerGeometrySimplifier.alloc().initWithTolerance(options.tolerance);
    }
}
