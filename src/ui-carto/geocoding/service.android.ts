import { toNativeMapPos } from '../core';
import { FeatureCollection } from '../geometry/feature';
import {
    GeocodingRequest,
    GeocodingServiceOptions,
    GeocodingResult as IGeocodingResult,
    MapBoxOnlineGeocodingServiceOptions,
    MapBoxOnlineReverseGeocodingServiceOptions,
    MultiOSMOfflineGeocodingServiceOptions,
    MultiOSMOfflineReverseGeocodingServiceOptions,
    OSMOfflineGeocodingServiceOptions,
    OSMOfflineReverseGeocodingServiceOptions,
    PeliasOnlineGeocodingServiceOptions,
    PeliasOnlineReverseGeocodingServiceOptions,
    ReverseGeocodingRequest,
    ReverseGeocodingServiceOptions,
    TomTomOnlineGeocodingServiceOptions,
    TomTomOnlineReverseGeocodingServiceOptions
} from './service';
import { nativeProperty } from '..';
import { BaseGeocodingService } from './service.common';
import { BaseNative } from '../BaseNative';
import { NativeVector } from '../core/index.android';

export abstract class GeocodingService<T extends com.carto.geocoding.GeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    public calculateAddresses(options: GeocodingRequest, callback: (err: any, res: GeocodingResultVector) => void) {
        const nRequest = new com.carto.geocoding.GeocodingRequest(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }
        com.akylas.carto.geocoding.AKGeocodingServiceAdditions.calculateAddress(
            this.getNative(),
            nRequest,
            new com.akylas.carto.geocoding.GeocodingServiceAddressCallback({
                onGeoCodingResult(err, res) {
                    callback(err, res ? new GeocodingResultVector(res) : null);
                }
            })
        );
    }
}
export abstract class ReverseGeocodingService<T extends com.carto.geocoding.ReverseGeocodingService, U extends ReverseGeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    public calculateAddresses(options: ReverseGeocodingRequest, callback: (err: any, res: GeocodingResultVector) => void) {
        const nRequest = new com.carto.geocoding.ReverseGeocodingRequest(options.projection.getNative(), toNativeMapPos(options.location));
        if (options.searchRadius !== undefined) {
            nRequest.setSearchRadius(options.searchRadius);
        }
        com.akylas.carto.geocoding.AKGeocodingServiceAdditions.calculateAddress(
            this.getNative(),
            nRequest,
            new com.akylas.carto.geocoding.GeocodingServiceAddressCallback({
                onGeoCodingResult(err, res) {
                    callback(err, res ? new GeocodingResultVector(res) : null);
                }
            })
        );
    }
}

export class GeocodingResult extends BaseNative<com.carto.geocoding.GeocodingResult, {}> implements IGeocodingResult {
    constructor(native) {
        super(null, native);
    }
    getAddress() {
        return this.native.getAddress();
        // return {
        //     street: nResult.getStreet(),
        //     country: nResult.getCountry(),
        //     name: nResult.getName(),
        //     neighbourhood: nResult.getNeighbourhood(),
        //     postcode: nResult.getPostcode(),
        //     houseNumber: nResult.getHouseNumber(),
        //     region: nResult.getRegion(),
        //     locality: nResult.getLocality(),
        //     categories: nativeVectorToArray(nResult.getCategories())
        // } as Address;
    }
    getRank() {
        return this.native.getRank();
    }
    getFeatureCollection() {
        return new FeatureCollection(this.native.getFeatureCollection());
    }
}

export class GeocodingResultVector extends NativeVector<GeocodingResult, com.carto.geocoding.GeocodingResultVector> {
    public get(index: number) {
        return new GeocodingResult(this.native.get(index));
    }
}
export class PeliasOnlineGeocodingService extends GeocodingService<com.carto.geocoding.PeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return new com.carto.geocoding.PeliasOnlineGeocodingService(options.apiKey);
    }
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.PeliasOnlineReverseGeocodingService, PeliasOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.PeliasOnlineReverseGeocodingService(options.apiKey);
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<com.carto.geocoding.TomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return new com.carto.geocoding.TomTomOnlineGeocodingService(options.apiKey);
    }
}

export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.TomTomOnlineReverseGeocodingService, TomTomOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.TomTomOnlineReverseGeocodingService(options.apiKey);
    }
}
export class MapBoxOnlineGeocodingService extends GeocodingService<com.carto.geocoding.MapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return new com.carto.geocoding.MapBoxOnlineGeocodingService(options.apiKey);
    }
}

export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.MapBoxOnlineReverseGeocodingService, MapBoxOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.MapBoxOnlineReverseGeocodingService(options.apiKey);
    }
}

export class OSMOfflineGeocodingService extends GeocodingService<com.carto.geocoding.OSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty maxResults: number;
    createNative(options: OSMOfflineGeocodingServiceOptions) {
        return new com.carto.geocoding.OSMOfflineGeocodingService(options.path);
    }
}

export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.OSMOfflineReverseGeocodingService, OSMOfflineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: OSMOfflineReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.OSMOfflineReverseGeocodingService(options.path);
    }
}
export class MultiOSMOfflineGeocodingService extends GeocodingService<com.carto.geocoding.MultiOSMOfflineGeocodingService, MultiOSMOfflineGeocodingServiceOptions> {
    createNative(options: MultiOSMOfflineGeocodingServiceOptions) {
        return new com.carto.geocoding.MultiOSMOfflineGeocodingService();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class MultiOSMOfflineReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.MultiOSMOfflineReverseGeocodingService, MultiOSMOfflineReverseGeocodingServiceOptions> {
    createNative(options: MultiOSMOfflineReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.MultiOSMOfflineReverseGeocodingService();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}
