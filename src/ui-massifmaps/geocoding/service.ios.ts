import {
    Address,
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
import { BaseGeocodingService } from './service.common';
import { toNativeMapPos } from '../core';
import { FeatureCollection } from '../geometry/feature';
import { nativeProperty } from '..';
import { BaseNative } from '../BaseNative';
import { NativeVector } from '../core/index.ios';

export abstract class GeocodingService<T extends MSFGeocodingService, U extends GeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    createNative(options: GeocodingServiceOptions) {
        return null;
    }
    public calculateAddresses(options: GeocodingRequest, callback: (err: Error, res: GeocodingResultVector) => void) {
        const nRequest = MSFGeocodingRequest.alloc().initWithProjectionQuery(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }

        AKGeocodingServiceAdditions.calculateAddress(this.getNative(), nRequest, (res, err) => {
            callback(err as any, res ? new GeocodingResultVector(res) : null);
        });
    }
}
export abstract class ReverseGeocodingService<T extends MSFReverseGeocodingService, U extends ReverseGeocodingServiceOptions> extends BaseGeocodingService<T, U> {
    createNative(options: ReverseGeocodingServiceOptions) {
        return null;
    }
    public calculateAddresses(options: ReverseGeocodingRequest, callback: (err: Error, res: GeocodingResultVector) => void) {
        const nRequest = MSFReverseGeocodingRequest.alloc().initWithProjectionLocation(options.projection.getNative(), toNativeMapPos(options.location));
        if (options.searchRadius !== undefined) {
            nRequest.setSearchRadius(options.searchRadius);
        }
        AKGeocodingServiceAdditions.calculateAddressReverse(this.getNative(), nRequest, (res, err) => {
            callback(err as any, res ? new GeocodingResultVector(res) : null);
        });
        const vector = this.getNative().calculateAddresses(nRequest);
        const result = vector ? new GeocodingResultVector(vector) : null;
        callback(null, result);
    }
}
export class GeocodingResult extends BaseNative<MSFGeocodingResult, {}> implements IGeocodingResult {
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

export class GeocodingResultVector extends NativeVector<GeocodingResult, MSFGeocodingResultVector> {
    public get(index: number) {
        return new GeocodingResult(this.native.get(index));
    }
}

export class PeliasOnlineGeocodingService extends GeocodingService<MSFPeliasOnlineGeocodingService, PeliasOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return MSFPeliasOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<MSFPeliasOnlineReverseGeocodingService, PeliasOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: PeliasOnlineReverseGeocodingServiceOptions) {
        return MSFPeliasOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<MSFTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return MSFTomTomOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<MSFTomTomOnlineReverseGeocodingService, TomTomOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: TomTomOnlineReverseGeocodingServiceOptions) {
        return MSFTomTomOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class MapBoxOnlineGeocodingService extends GeocodingService<MSFMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return MSFMapBoxOnlineGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}
export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<MSFMapBoxOnlineReverseGeocodingService, MapBoxOnlineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    @nativeProperty customServiceURL: string;
    createNative(options: MapBoxOnlineReverseGeocodingServiceOptions) {
        return MSFMapBoxOnlineReverseGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}

export class OSMOfflineGeocodingService extends GeocodingService<MSFOSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
    @nativeProperty autocomplete: boolean;
    @nativeProperty language: string;
    @nativeProperty maxResults: number;
    createNative(options: OSMOfflineGeocodingServiceOptions) {
        return MSFOSMOfflineGeocodingService.alloc().initWithPath(options.path);
    }
}

export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<MSFOSMOfflineReverseGeocodingService, OSMOfflineReverseGeocodingServiceOptions> {
    @nativeProperty language: string;
    createNative(options: OSMOfflineReverseGeocodingServiceOptions) {
        return MSFOSMOfflineReverseGeocodingService.alloc().initWithPath(options.path);
    }
}

export class MultiOSMOfflineGeocodingService extends GeocodingService<MSFMultiOSMOfflineGeocodingService, MultiOSMOfflineGeocodingServiceOptions> {
    createNative(options: MultiOSMOfflineGeocodingServiceOptions) {
        return MSFMultiOSMOfflineGeocodingService.alloc().init();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}

export class MultiOSMOfflineReverseGeocodingService extends ReverseGeocodingService<MSFMultiOSMOfflineReverseGeocodingService, MultiOSMOfflineReverseGeocodingServiceOptions> {
    createNative(options: MultiOSMOfflineReverseGeocodingServiceOptions) {
        return MSFMultiOSMOfflineReverseGeocodingService.alloc().init();
    }
    add(database: string) {
        this.getNative().add(database);
    }
    remove(database: string) {
        this.getNative().remove(database);
    }
}
