import { BaseNative, nativeProperty } from '..';
import { LayerOptions, TileSubstitutionPolicy } from '.';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';

export abstract class BaseLayer<T, U extends LayerOptions> extends BaseNative<T, U> {
    @nativeProperty opacity: number;
    @nativeProperty updatePriority: number;
    @nativeProperty visible: boolean;
}
