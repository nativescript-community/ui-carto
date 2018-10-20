import { MapPos } from '../core/core';
import { ProjectionOptions } from './projection';
import { BaseNative } from '../carto.common';

export abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {}
