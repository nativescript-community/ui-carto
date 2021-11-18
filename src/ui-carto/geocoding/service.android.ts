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

export abstract class GeocodingService<T extends com.akylas.carto.additions.AKGeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    public calculateAddresses(options: GeocodingRequest, callback: (err: any, res: GeocodingResultVector) => void) {
        const nRequest = new com.carto.geocoding.GeocodingRequest(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }
        this.getNative().calculateAddressCallback(
            nRequest,
            new com.akylas.carto.additions.GeocodingServiceAddressCallback({
                onGeoCodingResult(err, res) {
                    callback(err, res ? new GeocodingResultVector(res) : null);
                }
            })
        );
    }
}
export abstract class ReverseGeocodingService<T extends com.akylas.carto.additions.AKReverseGeocodingService, U extends ReverseGeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    public calculateAddresses(options: ReverseGeocodingRequest, callback: (err: any, res: GeocodingResultVector) => void) {
        const nRequest = new com.carto.geocoding.ReverseGeocodingRequest(options.projection.getNative(), toNativeMapPos(options.location));
        if (options.searchRadius !== undefined) {
            nRequest.setSearchRadius(options.searchRadius);
        }
        this.getNative().calculateAddressCallback(
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
export class PackageManagerGeocodingService extends GeocodingService<com.akylas.carto.additions.AKPackageManagerGeocodingService, PackageManagerGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    createNative(options: PackageManagerGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPackageManagerGeocodingService(options.packageManager.getNative());
    }
}
export class PeliasOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKPeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPeliasOnlineGeocodingService(options.apiKey);
    }
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<com.akylas.carto.additions.AKPeliasOnlineReverseGeocodingService, PeliasOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineReverseGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPeliasOnlineReverseGeocodingService(options.apiKey);
    }
}

export class PackageManagerReverseGeocodingService extends ReverseGeocodingService<com.akylas.carto.additions.AKPackageManagerReverseGeocodingService, PackageManagerReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: PackageManagerReverseGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPackageManagerReverseGeocodingService(options.packageManager.getNative());
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKTomTomOnlineGeocodingService(options.apiKey);
    }
}

export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<com.akylas.carto.additions.AKTomTomOnlineReverseGeocodingService, TomTomOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineReverseGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKTomTomOnlineReverseGeocodingService(options.apiKey);
    }
}
export class MapBoxOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKMapBoxOnlineGeocodingService(options.apiKey);
    }
}

export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<com.akylas.carto.additions.AKMapBoxOnlineReverseGeocodingService, MapBoxOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineReverseGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKMapBoxOnlineReverseGeocodingService(options.apiKey);
    }
}

export class OSMOfflineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKOSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty maxResults: number;
    createNative(options: OSMOfflineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKOSMOfflineGeocodingService(options.path);
    }
}

export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<com.akylas.carto.additions.AKOSMOfflineReverseGeocodingService, OSMOfflineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: OSMOfflineReverseGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKOSMOfflineReverseGeocodingService(options.path);
    }
}
