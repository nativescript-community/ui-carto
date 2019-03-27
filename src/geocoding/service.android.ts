import {
    Address,
    GeocodingRequest,
    GeocodingResult as IGeocodingResult,
    GeocodingServiceOptions,
    MapBoxOnlineGeocodingServiceOptions,
    OSMOfflineGeocodingServiceOptions,
    PackageManagerGeocodingServiceOptions,
    PeliasOnlineGeocodingServiceOptions,
    TomTomOnlineGeocodingServiceOptions
} from './service';
import { BaseGeocodingService } from './service.common';
import { NativeVector, toNativeMapPos } from '../core/core';
import { nativeVectorToArray } from '../utils/utils';
import { FeatureCollection } from '../geometry/feature';
import { nativeProperty } from 'nativescript-carto/carto.common';

export class GeocodingResultVector extends NativeVector<com.carto.geocoding.GeocodingResult> {
    constructor(public native: com.carto.geocoding.GeocodingResultVector) {
        super();
    }
}

export abstract class GeocodingService<T extends com.akylas.carto.additions.AKGeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    // createNative(options: GeocodingServiceOptions) {
    //     return new com.carto.geocoding.GeocodingService();
    // }
    public calculateAddresses(options: GeocodingRequest, callback: (err: Error, res: GeocodingResultVector) => void) {
        const nRequest = new com.carto.geocoding.GeocodingRequest(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }
        console.log('calculateAddresses', options);
        this.getNative().calculateAddressCallback(
            nRequest,
            new com.akylas.carto.additions.GeocodingServiceAddressCallback({
                onGeoCodingResult(err, res) {
                    console.log('onGeoCodingResult', res);
                    callback(err, res ? new GeocodingResultVector(res) : null);
                }
            })
        );
    }
}

export class GeocodingResult implements IGeocodingResult {
    constructor(private native: com.carto.geocoding.GeocodingResult) {}
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

export class PackageManagerGeocodingService extends GeocodingService<com.akylas.carto.additions.AKPackageManagerGeocodingService, PackageManagerGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    createNative(options: PackageManagerGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPackageManagerGeocodingService(options.packageManager.getNative());
    }
}
export class PeliasOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKPeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKPeliasOnlineGeocodingService();
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKTomTomOnlineGeocodingService(options.apiKey);
    }
}

export class MapBoxOnlineGeocodingService extends GeocodingService<com.akylas.carto.additions.AKMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty
    autoComplete: boolean;
    @nativeProperty
    language: string;
    @nativeProperty
    customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return new com.akylas.carto.additions.AKMapBoxOnlineGeocodingService(options.apiKey);
    }
}

// export class OSMOfflineGeocodingService extends GeocodingService<com.carto.geocoding.OSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
//     // @nativeProperty
//     // autoComplete: number;
//     createNative(options: PackageManagerGeocodingServiceOptions) {
//         return new com.carto.geocoding.OSMOfflineGeocodingService(options.packageManager.getNative());
//     }
// }
