import { BaseNative } from '..';
import { IProjection } from '../projections';
import { DefaultLatLonKeys, MapBounds, MapPos, NativeVector } from '../core';
import { FeatureCollection } from '../geometry/feature';
import { CartoPackageManager } from '../packagemanager';

export interface GeocodingRequest<T = DefaultLatLonKeys> {
    projection: IProjection;
    location?: MapPos<T>;
    locationRadius?: number;
    query: string;
}

export interface ReverseGeocodingRequest<T = DefaultLatLonKeys> {
    projection: IProjection;
    location?: MapPos<T>;
    searchRadius?: number;
}

export interface GeocodingServiceOptions {
    // metaData?: { [k: string]: string };
}

export interface ReverseGeocodingServiceOptions {
    // metaData?: { [k: string]: string };
}

export abstract class GeocodingService<T, U extends GeocodingServiceOptions> extends BaseNative<T, U> {
    public calculateAddresses(options: GeocodingRequest, callback: (error: Error, res: GeocodingResultVector) => void);
}
export abstract class ReverseGeocodingService<T, U extends ReverseGeocodingServiceOptions> extends BaseNative<T, U> {
    public calculateAddresses(options: ReverseGeocodingRequest, callback: (error: Error, res: GeocodingResultVector) => void);
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
export class PackageManagerGeocodingService extends GeocodingService<any, PackageManagerGeocodingServiceOptions> {
    language: string;
}
export interface PackageManagerReverseGeocodingServiceOptions extends ReverseGeocodingServiceOptions {
    language?: string;
    packageManager: CartoPackageManager;
}
export class PackageManagerReverseGeocodingService extends ReverseGeocodingService<any, PackageManagerReverseGeocodingServiceOptions> {
    language: string;
}

export interface OSMOfflineGeocodingServiceOptions {
    maxResults?: number;
    autocomplete?: boolean;
    language?: string;
    path?: string;
}
export class OSMOfflineGeocodingService extends GeocodingService<any, OSMOfflineGeocodingServiceOptions> {
    maxResults?: number;
    autocomplete?: boolean;
    language?: string;
}

export interface OSMOfflineReverseGeocodingServiceOptions {
    language?: string;
    path?: string;
}
export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<any, OSMOfflineReverseGeocodingServiceOptions> {
    language?: string;
}

export interface PeliasOnlineGeocodingServiceOptions {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class PeliasOnlineGeocodingService extends GeocodingService<any, PeliasOnlineGeocodingServiceOptions> {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
}

export interface PeliasOnlineReverseGeocodingServiceOptions {
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<any, PeliasOnlineReverseGeocodingServiceOptions> {
    language?: string;
    customServiceURL?: string;
}

export interface TomTomOnlineGeocodingServiceOptions {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class TomTomOnlineGeocodingService extends GeocodingService<any, TomTomOnlineGeocodingServiceOptions> {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
}

export interface TomTomOnlineReverseGeocodingServiceOptions {
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<any, TomTomOnlineReverseGeocodingServiceOptions> {
    language?: string;
    customServiceURL?: string;
}

export interface MapBoxOnlineGeocodingServiceOptions {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class MapBoxOnlineGeocodingService extends GeocodingService<any, MapBoxOnlineGeocodingServiceOptions> {
    autocomplete?: boolean;
    language?: string;
    customServiceURL?: string;
}

export interface MapBoxOnlineReverseGeocodingServiceOptions {
    language?: string;
    customServiceURL?: string;
    apiKey: string;
}
export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<any, MapBoxOnlineReverseGeocodingServiceOptions> {
    language?: string;
    customServiceURL?: string;
}
