import { BaseNative } from '../carto';
import { IProjection } from '../projections/projection';
import { Position, Bounds } from '../core/core';

export interface GeocodingRequest {
    projection: IProjection;
    location: Position;
    locationRadius?: number;
    query: string;
}


export interface GeocodingServiceOptions {
    // metaData?: Object;
}

export abstract class BaseGeocodingService<T, U extends GeocodingServiceOptions> extends BaseNative<T, U> {}
export abstract class GeocodingService extends BaseGeocodingService<any, GeocodingServiceOptions> {}


export interface Address {
    street: string;
    country: string;
    name: string;
    neighbourhood: string;
    postcode: string;
    houseNumber: string;
    region: string;
    locality: string;
    categories: string[];
}

export interface Geometry {
    centerPos: Position,
    bounds: Bounds
}

export interface Feature {
    properties: {};
    geometry: any;
}

export interface FeatureCollection {
    getFeature(index: number): Feature;
    getFeatureCount(): number;
}

export interface GeocodingResult {
    getAddress(): Address;
    getRank(): number;
    getFeatureCollection(): FeatureCollection;
}
