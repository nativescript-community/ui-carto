import { Position } from '../core/core';
import { ProjectionOptions } from './projection';
import { BaseNative } from '../carto.common';

export abstract class BaseProjection<T, U extends ProjectionOptions> extends BaseNative<T, U> {}

export abstract class ProjectionClassBase<T, U extends ProjectionOptions> extends BaseProjection<T, U> {
    abstract fromWgs84(pos: Position): Position;
    abstract toWgs84(pos: Position): Position;
}
