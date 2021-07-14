import {
    Address,
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
    TomTomOnlineReverseGeocodingServiceOptions,
} from './service';
import { BaseGeocodingService } from './service.common';
import { NativeVector, toNativeMapPos } from '../core';
import { FeatureCollection } from '../geometry/feature';
import { nativeProperty } from '..';

export abstract class GeocodingService<T extends NTGeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    createNative(options: GeocodingServiceOptions) {
        return null;
    }
    public calculateAddresses(options: GeocodingRequest, callback: (err: Error, res: GeocodingResultVector) => void) {
        const nRequest = NTGeocodingRequest.alloc().initWithProjectionQuery(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }
        const vector = this.getNative().calculateAddresses(nRequest);
        const result = vector ? new GeocodingResultVector(vector) : null;
        callback(null, result);
    }
}
export abstract class ReverseGeocodingService<T extends NTReverseGeocodingService, U extends ReverseGeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    createNative(options: ReverseGeocodingServiceOptions) {
        return null;
    }
    public calculateAddresses(options: ReverseGeocodingRequest, callback: (err: Error, res: GeocodingResultVector) => void) {
        const nRequest = NTReverseGeocodingRequest.alloc().initWithProjectionLocation(options.projection.getNative(), toNativeMapPos(options.location));
        if (options.searchRadius !== undefined) {
            nRequest.setSearchRadius(options.searchRadius);
        }
        const vector = this.getNative().calculateAddresses(nRequest);
        const result = vector ? new GeocodingResultVector(vector) : null;
        callback(null, result);
    }
}
export class GeocodingResult implements IGeocodingResult {
    constructor(private native: NTGeocodingResult) {}
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

export class GeocodingResultVector extends NativeVector<GeocodingResult> {
    constructor(public native: NTGeocodingResultVector) {
        super();
    }
    public get(index: number) {
        return new GeocodingResult(this.native.get(index));
    }
}

export class PackageManagerGeocodingService extends GeocodingService<NTPackageManagerGeocodingService, PackageManagerGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    createNative(options: PackageManagerGeocodingServiceOptions) {
        return new NTPackageManagerGeocodingService(options.packageManager.getNative());
    }
}

export class PackageManagerReverseGeocodingService extends ReverseGeocodingService<NTPackageManagerReverseGeocodingService, PackageManagerReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: PackageManagerReverseGeocodingServiceOptions) {
        return NTPackageManagerReverseGeocodingService.alloc().initWithPackageManager(options.packageManager.getNative());
    }
}

export class PeliasOnlineGeocodingService extends GeocodingService<NTPeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return NTPeliasOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<NTPeliasOnlineReverseGeocodingService, PeliasOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineReverseGeocodingServiceOptions) {
        return NTPeliasOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<NTTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return NTTomTomOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<NTTomTomOnlineReverseGeocodingService, TomTomOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineReverseGeocodingServiceOptions) {
        return NTTomTomOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class MapBoxOnlineGeocodingService extends GeocodingService<NTMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return NTMapBoxOnlineGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}
export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<NTMapBoxOnlineReverseGeocodingService, MapBoxOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineReverseGeocodingServiceOptions) {
        return NTMapBoxOnlineReverseGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}

export class OSMOfflineGeocodingService extends GeocodingService<NTOSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty maxResults: number;
    createNative(options: OSMOfflineGeocodingServiceOptions) {
        return NTOSMOfflineGeocodingService.alloc().initWithPath(options.path);
    }
}

export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<NTOSMOfflineReverseGeocodingService, OSMOfflineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: OSMOfflineReverseGeocodingServiceOptions) {
        return NTOSMOfflineReverseGeocodingService.alloc().initWithPath(options.path);
    }
}
