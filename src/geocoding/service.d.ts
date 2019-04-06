import { BaseNative } from '../carto';
import { IProjection } from '../projections/projection';
import { MapBounds, MapPos, NativeVector } from '../core/core';
import { FeatureCollection } from '../geometry/feature';
import { CartoPackageManager } from '../packagemanager/packagemanager';

export interface GeocodingRequest {
    projection: IProjection;
    location?: MapPos;
    locationRadius?: number;
    query: string;
}

export interface GeocodingServiceOptions {
    // metaData?: Object;
}

export abstract class GeocodingService<T, U extends GeocodingServiceOptions> extends BaseNative<T, U> {
    public calculateAddresses(options: GeocodingRequest, callback: (error: Error, res: GeocodingResultVector) => void);
}

export interface GeocodingServiceOptions {
    // metaData?: Object;
}

export interface Address {
    // street: string;
    // country: string;
    // name: string;
    // neighbourhood: string;
    // postcode: string;
    // houseNumber: string;
    // region: string;
    // locality: string;
    // categories: string[];
    getStreet(): string;
    getCountry(): string;
    getCounty(): string;
    getName(): string;
    getCategories(): any;
    getNeighbourhood(): string;
    getPostcode(): string;
    getHouseNumber(): string;
    getRegion(): string;
    getLocality(): string;
}

export interface GeocodingResult {
    getAddress(): Address;
    getRank(): number;
    getFeatureCollection(): FeatureCollection;
}
export class GeocodingResultVector extends NativeVector<GeocodingResult> {}

export interface PackageManagerGeocodingServiceOptions extends GeocodingServiceOptions {
    language?: string;
    packageManager: CartoPackageManager;
}
export class PackageManagerGeocodingService extends GeocodingService<any, PackageManagerGeocodingServiceOptions> {}

export interface OSMOfflineGeocodingServiceOptions {}
export class POSMOfflineGeocodingService extends GeocodingService<any, OSMOfflineGeocodingServiceOptions> {}

export interface PeliasOnlineGeocodingServiceOptions {
    autoComplete?: boolean;
    language?: string;
    customServiceURL?: string;
}
export class PeliasOnlineGeocodingService extends GeocodingService<any, PeliasOnlineGeocodingServiceOptions> {}

export interface TomTomOnlineGeocodingServiceOptions {
    autoComplete?: boolean;
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class TomTomOnlineGeocodingService extends GeocodingService<any, TomTomOnlineGeocodingServiceOptions> {}

export interface MapBoxOnlineGeocodingServiceOptions {
    autoComplete?: boolean;
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class MapBoxOnlineGeocodingService extends GeocodingService<any, MapBoxOnlineGeocodingServiceOptions> {}
