import { BaseNative } from '..';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { DefaultLatLonKeys, GenericMapPos, IntVector, MapPos, MapPosVector } from '../core';
import { Accessors as Acc_ElevationDataDecoder } from '../bindings/rastertiles/ElevationDecoder';
import { Accessors as Acc_MapBoxElevationDataDecoder } from '../bindings/rastertiles/MapBoxElevationDataDecoder';
import { Accessors as Acc_TerrariumElevationDataDecoder } from '../bindings/rastertiles/TerrariumElevationDataDecoder';
import { Methods as Met_ElevationDataDecoder } from '../bindings/rastertiles/ElevationDecoder';
import { Methods as Met_MapBoxElevationDataDecoder } from '../bindings/rastertiles/MapBoxElevationDataDecoder';
import { Methods as Met_TerrariumElevationDataDecoder } from '../bindings/rastertiles/TerrariumElevationDataDecoder';
import { Accessors as Acc_ElevationDecoder, Methods as Met_ElevationDecoder } from '../bindings/rastertiles/ElevationDecoder';

export interface SearchRequest {
    projection?: Projection;
    regexFilter?: string;
    filterExpression?: string;
    searchRadius?: number;
    geometry?: Geometry;
    position?: MapPos;
}

export interface ElevationDataDecoderOptions {}
export interface MapBoxElevationDataDecoderOptions extends ElevationDataDecoderOptions {}

export interface TerrariumElevationDataDecoderOptions extends ElevationDataDecoderOptions {}

export abstract class ElevationDataDecoder<T, O extends ElevationDataDecoderOptions> extends BaseNative<T, O> {}

export class MapBoxElevationDataDecoder extends ElevationDataDecoder<any, MapBoxElevationDataDecoderOptions> {}
export class TerrariumElevationDataDecoder extends ElevationDataDecoder<any, MapBoxElevationDataDecoderOptions> {}


export interface MapBoxElevationDataDecoder extends Acc_MapBoxElevationDataDecoder, Met_MapBoxElevationDataDecoder {}

export interface TerrariumElevationDataDecoder extends Acc_TerrariumElevationDataDecoder, Met_TerrariumElevationDataDecoder {}

export interface ElevationDataDecoder<T, O extends ElevationDataDecoderOptions> extends Acc_ElevationDataDecoder, Met_ElevationDataDecoder {}

export interface MapBoxElevationDataDecoder extends Acc_ElevationDecoder, Omit<Met_ElevationDecoder, 'getMinimumHeightScale'> {}

export interface TerrariumElevationDataDecoder extends Acc_ElevationDecoder, Omit<Met_ElevationDecoder, 'getMinimumHeightScale'> {}
