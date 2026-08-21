import { BaseNative } from '..';
import { IProjection } from '../projections';
import { DefaultLatLonKeys, MapBounds, MapPos, NativeVector } from '../core';
import { FeatureCollection } from '../geometry/feature';
import { Accessors as Acc_PeliasOnlineGeocodingService, Methods as Met_PeliasOnlineGeocodingService } from '../bindings/geocoding/PeliasOnlineGeocodingService';
import { Accessors as Acc_PeliasOnlineReverseGeocodingService, Methods as Met_PeliasOnlineReverseGeocodingService } from '../bindings/geocoding/PeliasOnlineReverseGeocodingService';
import { Accessors as Acc_TomTomOnlineGeocodingService, Methods as Met_TomTomOnlineGeocodingService } from '../bindings/geocoding/TomTomOnlineGeocodingService';
import { Accessors as Acc_TomTomOnlineReverseGeocodingService, Methods as Met_TomTomOnlineReverseGeocodingService } from '../bindings/geocoding/TomTomOnlineReverseGeocodingService';
import { Accessors as Acc_MapBoxOnlineGeocodingService, Methods as Met_MapBoxOnlineGeocodingService } from '../bindings/geocoding/MapBoxOnlineGeocodingService';
import { Accessors as Acc_MapBoxOnlineReverseGeocodingService, Methods as Met_MapBoxOnlineReverseGeocodingService } from '../bindings/geocoding/MapBoxOnlineReverseGeocodingService';
import { Accessors as Acc_OSMOfflineGeocodingService, Methods as Met_OSMOfflineGeocodingService } from '../bindings/geocoding/OSMOfflineGeocodingService';
import { Accessors as Acc_OSMOfflineReverseGeocodingService, Methods as Met_OSMOfflineReverseGeocodingService } from '../bindings/geocoding/OSMOfflineReverseGeocodingService';
import { Accessors as Acc_MultiOSMOfflineGeocodingService, Methods as Met_MultiOSMOfflineGeocodingService } from '../bindings/geocoding/MultiOSMOfflineGeocodingService';
import { Accessors as Acc_MultiOSMOfflineReverseGeocodingService, Methods as Met_MultiOSMOfflineReverseGeocodingService } from '../bindings/geocoding/MultiOSMOfflineReverseGeocodingService';
import { Accessors as Acc_GeocodingService, Methods as Met_GeocodingService } from '../bindings/geocoding/GeocodingService';
import { Accessors as Acc_ReverseGeocodingService, Methods as Met_ReverseGeocodingService } from '../bindings/geocoding/ReverseGeocodingService';

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

export interface BaseOSMOfflineGeocodingServiceOptions {
    maxResults?: number;
    autocomplete?: boolean;
    language?: string;
}

export interface OSMOfflineGeocodingServiceOptions extends BaseOSMOfflineGeocodingServiceOptions {
    path?: string;
}

export abstract class BaseOSMOfflineGeocodingService<T, U extends BaseOSMOfflineGeocodingServiceOptions> extends GeocodingService<T, U> {
    maxResults?: number;
    autocomplete?: boolean;
    language?: string;
}
export class OSMOfflineGeocodingService extends BaseOSMOfflineGeocodingService<any, OSMOfflineGeocodingServiceOptions> {}

export interface BaseOSMOfflineReverseGeocodingServiceOptions {
    language?: string;
}

export interface OSMOfflineReverseGeocodingServiceOptions extends BaseOSMOfflineReverseGeocodingServiceOptions {
    path?: string;
}
export interface MultiOSMOfflineGeocodingServiceOptions extends BaseOSMOfflineGeocodingServiceOptions {}
export class MultiOSMOfflineGeocodingService extends BaseOSMOfflineGeocodingService<any, MultiOSMOfflineGeocodingServiceOptions> {
    add(database: string);
    remove(database: string);
}

export abstract class BaseOSMOfflineReverseGeocodingService<T, U extends BaseOSMOfflineReverseGeocodingServiceOptions> extends GeocodingService<T, U> {
    language?: string;
}

export class OSMOfflineReverseGeocodingService extends BaseOSMOfflineReverseGeocodingService<any, OSMOfflineReverseGeocodingServiceOptions> {}

export interface MultiOSMOfflineReverseGeocodingServiceOptions extends BaseOSMOfflineReverseGeocodingServiceOptions {}
export class MultiOSMOfflineReverseGeocodingService extends BaseOSMOfflineReverseGeocodingService<any, MultiOSMOfflineReverseGeocodingServiceOptions> {
    add(database: string);
    remove(database: string);
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

export interface PeliasOnlineGeocodingService extends Omit<Acc_PeliasOnlineGeocodingService, 'autocomplete' | 'customServiceURL' | 'language'>, Met_PeliasOnlineGeocodingService {}

export interface PeliasOnlineReverseGeocodingService extends Omit<Acc_PeliasOnlineReverseGeocodingService, 'customServiceURL' | 'language'>, Met_PeliasOnlineReverseGeocodingService {}

export interface TomTomOnlineGeocodingService extends Omit<Acc_TomTomOnlineGeocodingService, 'autocomplete' | 'customServiceURL' | 'language'>, Met_TomTomOnlineGeocodingService {}

export interface TomTomOnlineReverseGeocodingService extends Omit<Acc_TomTomOnlineReverseGeocodingService, 'customServiceURL' | 'language'>, Met_TomTomOnlineReverseGeocodingService {}

export interface MapBoxOnlineGeocodingService extends Omit<Acc_MapBoxOnlineGeocodingService, 'autocomplete' | 'customServiceURL' | 'language'>, Met_MapBoxOnlineGeocodingService {}

export interface MapBoxOnlineReverseGeocodingService extends Omit<Acc_MapBoxOnlineReverseGeocodingService, 'customServiceURL' | 'language'>, Met_MapBoxOnlineReverseGeocodingService {}

export interface OSMOfflineGeocodingService extends Acc_OSMOfflineGeocodingService, Met_OSMOfflineGeocodingService {}

export interface OSMOfflineReverseGeocodingService extends Acc_OSMOfflineReverseGeocodingService, Met_OSMOfflineReverseGeocodingService {}

export interface MultiOSMOfflineGeocodingService extends Acc_MultiOSMOfflineGeocodingService, Omit<Met_MultiOSMOfflineGeocodingService, 'add' | 'remove'> {}

export interface MultiOSMOfflineReverseGeocodingService extends Acc_MultiOSMOfflineReverseGeocodingService, Omit<Met_MultiOSMOfflineReverseGeocodingService, 'add' | 'remove'> {}

export interface GeocodingService<T, U extends GeocodingServiceOptions> extends Acc_GeocodingService, Omit<Met_GeocodingService, 'calculateAddresses'> {}

export interface ReverseGeocodingService<T, U extends ReverseGeocodingServiceOptions> extends Acc_ReverseGeocodingService, Omit<Met_ReverseGeocodingService, 'calculateAddresses'> {}

export interface PeliasOnlineGeocodingService extends Omit<Acc_GeocodingService, 'autocomplete' | 'language' | 'maxResults'>, Omit<Met_GeocodingService, 'calculateAddresses' | 'getLanguage' | 'getMaxResults' | 'isAutocomplete' | 'setAutocomplete' | 'setLanguage' | 'setMaxResults'> {}

export interface PeliasOnlineReverseGeocodingService extends Omit<Acc_ReverseGeocodingService, 'language'>, Omit<Met_ReverseGeocodingService, 'calculateAddresses' | 'getLanguage' | 'setLanguage'> {}

export interface TomTomOnlineGeocodingService extends Omit<Acc_GeocodingService, 'autocomplete' | 'language' | 'maxResults'>, Omit<Met_GeocodingService, 'calculateAddresses' | 'getLanguage' | 'getMaxResults' | 'isAutocomplete' | 'setAutocomplete' | 'setLanguage' | 'setMaxResults'> {}

export interface TomTomOnlineReverseGeocodingService extends Omit<Acc_ReverseGeocodingService, 'language'>, Omit<Met_ReverseGeocodingService, 'calculateAddresses' | 'getLanguage' | 'setLanguage'> {}

export interface MapBoxOnlineGeocodingService extends Omit<Acc_GeocodingService, 'autocomplete' | 'language' | 'maxResults'>, Omit<Met_GeocodingService, 'calculateAddresses' | 'getLanguage' | 'getMaxResults' | 'isAutocomplete' | 'setAutocomplete' | 'setLanguage' | 'setMaxResults'> {}

export interface MapBoxOnlineReverseGeocodingService extends Omit<Acc_ReverseGeocodingService, 'language'>, Omit<Met_ReverseGeocodingService, 'calculateAddresses' | 'getLanguage' | 'setLanguage'> {}

export interface OSMOfflineGeocodingService extends Omit<Acc_GeocodingService, 'autocomplete' | 'language' | 'maxResults'>, Omit<Met_GeocodingService, 'calculateAddresses' | 'getLanguage' | 'getMaxResults' | 'isAutocomplete' | 'setAutocomplete' | 'setLanguage' | 'setMaxResults'> {}

export interface OSMOfflineReverseGeocodingService extends Omit<Acc_ReverseGeocodingService, 'language'>, Omit<Met_ReverseGeocodingService, 'calculateAddresses' | 'getLanguage' | 'setLanguage'> {}

export interface MultiOSMOfflineGeocodingService extends Omit<Acc_GeocodingService, 'autocomplete' | 'language' | 'maxResults'>, Omit<Met_GeocodingService, 'calculateAddresses' | 'getLanguage' | 'getMaxResults' | 'isAutocomplete' | 'setAutocomplete' | 'setLanguage' | 'setMaxResults'> {}

export interface MultiOSMOfflineReverseGeocodingService extends Omit<Acc_ReverseGeocodingService, 'language'>, Omit<Met_ReverseGeocodingService, 'calculateAddresses' | 'getLanguage' | 'setLanguage'> {}
