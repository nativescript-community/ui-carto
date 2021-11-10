import { ProjectionOptions } from '.';
import { BaseNative } from '../BaseNative';

export abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {}
