import {
    Address,
    GeocodingRequest,
    GeocodingResult as IGeocodingResult,
    GeocodingServiceOptions,
    MapBoxOnlineGeocodingServiceOptions,
    PackageManagerGeocodingServiceOptions,
    PeliasOnlineGeocodingServiceOptions,
    TomTomOnlineGeocodingServiceOptions
} from './service';
import { BaseGeocodingService } from './service.common';
import { NativeVector, toNativeMapPos } from '../core/core';
import { FeatureCollection } from '../geometry/feature';
import { nativeProperty } from '../carto';

export class GeocodingResultVector extends NativeVector<NTGeocodingResult> {
    constructor(public native: NTGeocodingResultVector) {
        super();
    }
}

abstract class GeocodingService<T extends NTGeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
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

class GeocodingResult implements IGeocodingResult {
    constructor(private native: NTGeocodingResult) {}
    getAddress() {
        return this.native.getAddress() as Address;
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
        // };
    }
    getRank() {
        return this.native.getRank();
    }
    getFeatureCollection() {
        return new FeatureCollection(this.native.getFeatureCollection());
    }
}

class PackageManagerGeocodingService extends GeocodingService<NTPackageManagerGeocodingService, PackageManagerGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    createNative(options: PackageManagerGeocodingServiceOptions) {
        return new NTPackageManagerGeocodingService(options.packageManager.getNative());
    }
}
class PeliasOnlineGeocodingService extends GeocodingService<NTPeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return NTPeliasOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

class TomTomOnlineGeocodingService extends GeocodingService<NTTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return NTTomTomOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

class MapBoxOnlineGeocodingService extends GeocodingService<NTMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return NTMapBoxOnlineGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}

export { GeocodingRequest, GeocodingService, GeocodingResult, MapBoxOnlineGeocodingService, TomTomOnlineGeocodingService, PeliasOnlineGeocodingService, PackageManagerGeocodingService };
