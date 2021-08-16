import { BaseNative } from '..';
import { TileDataSource } from '../datasources';
import { Projection } from '../projections';
import { Geometry } from '../geometry';
import { DefaultLatLonKeys, GenericMapPos, IntVector, MapPos, MapPosVector } from '../core';

// export interface SearchRequest {
//     projection?: Projection;
//     regexFilter?: string;
//     filterExpression?: string;
//     searchRadius?: number;
//     geometry?: Geometry;
//     position?: MapPos;
// }

// export interface ElevationDataDecoderOptions {}
// export interface MapBoxElevationDataDecoderOptions extends ElevationDataDecoderOptions {}

// export interface TerrariumElevationDataDecoderOptions extends ElevationDataDecoderOptions {}

// export abstract class ElevationDataDecoder<T, O extends ElevationDataDecoderOptions> extends BaseNative<T, O> {
//     public getElevation<T = DefaultLatLonKeys>(dataSource: TileDataSource<any, any>, pos: GenericMapPos<T>): number;
//     public getElevations<T = DefaultLatLonKeys>(dataSource: TileDataSource<any, any>, pos: MapPosVector<T> | GenericMapPos<T>[]): IntVector;
// }

// export class MapBoxElevationDataDecoder extends ElevationDataDecoder<any, MapBoxElevationDataDecoderOptions> {}
// export class TerrariumElevationDataDecoder extends ElevationDataDecoder<any, MapBoxElevationDataDecoderOptions> {}
