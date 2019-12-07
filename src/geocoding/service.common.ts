import { BaseNative } from '../index.common';
import { GeocodingServiceOptions } from './service';

export abstract class BaseGeocodingService<T, U extends GeocodingServiceOptions> extends BaseNative<T, U> {}
