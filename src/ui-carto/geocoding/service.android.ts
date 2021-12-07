import { toNativeMapPos } from '../core';
import { FeatureCollection } from '../geometry/feature';
import {
    GeocodingRequest,
    GeocodingServiceOptions,
    GeocodingResult as IGeocodingResult,
    MapBoxOnlineGeocodingServiceOptions,
    MapBoxOnlineReverseGeocodingServiceOptions,
    OSMOfflineGeocodingServiceOptions,
    OSMOfflineReverseGeocodingServiceOptions,
    PackageManagerGeocodingServiceOptions,
    PackageManagerReverseGeocodingServiceOptions,
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
        com.akylas.carto.additions.AKGeocodingServiceAdditions.calculateAddress(
            this.getNative(),
            nRequest,
            new com.akylas.carto.additions.GeocodingServiceAddressCallback({
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
        com.akylas.carto.additions.AKGeocodingServiceAdditions.calculateAddress(
            this.getNative(),
            nRequest,
            new com.akylas.carto.additions.GeocodingServiceAddressCallback({
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
export class PackageManagerGeocodingService extends GeocodingService<com.carto.geocoding.PackageManagerGeocodingService, PackageManagerGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    createNative(options: PackageManagerGeocodingServiceOptions) {
        return new com.carto.geocoding.PackageManagerGeocodingService(options.packageManager.getNative());
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

export class PackageManagerReverseGeocodingService extends ReverseGeocodingService<com.carto.geocoding.PackageManagerReverseGeocodingService, PackageManagerReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: PackageManagerReverseGeocodingServiceOptions) {
        return new com.carto.geocoding.PackageManagerReverseGeocodingService(options.packageManager.getNative());
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

