import { ProjectionOptions } from '.';
import { BaseNative } from '../index.common';

export abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {}
