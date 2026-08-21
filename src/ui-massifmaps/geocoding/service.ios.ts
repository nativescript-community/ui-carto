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
import {
    ACCESSORS as ACC_GeocodingResult,
    Accessors as Acc_GeocodingResult,
    METHODS as MET_GeocodingResult,
    Methods as Met_GeocodingResult,
    SELECTORS as SEL_GeocodingResult
} from '../bindings/geocoding/GeocodingResult';
import { bindNative } from '../nativeclass.common';
import {
    ACCESSORS as ACC_PeliasOnlineGeocodingService,
    Accessors as Acc_PeliasOnlineGeocodingService,
    METHODS as MET_PeliasOnlineGeocodingService,
    Methods as Met_PeliasOnlineGeocodingService,
    SELECTORS as SEL_PeliasOnlineGeocodingService
} from '../bindings/geocoding/PeliasOnlineGeocodingService';
import {
    ACCESSORS as ACC_PeliasOnlineReverseGeocodingService,
    Accessors as Acc_PeliasOnlineReverseGeocodingService,
    METHODS as MET_PeliasOnlineReverseGeocodingService,
    Methods as Met_PeliasOnlineReverseGeocodingService,
    SELECTORS as SEL_PeliasOnlineReverseGeocodingService
} from '../bindings/geocoding/PeliasOnlineReverseGeocodingService';
import {
    ACCESSORS as ACC_TomTomOnlineGeocodingService,
    Accessors as Acc_TomTomOnlineGeocodingService,
    METHODS as MET_TomTomOnlineGeocodingService,
    Methods as Met_TomTomOnlineGeocodingService,
    SELECTORS as SEL_TomTomOnlineGeocodingService
} from '../bindings/geocoding/TomTomOnlineGeocodingService';
import {
    ACCESSORS as ACC_TomTomOnlineReverseGeocodingService,
    Accessors as Acc_TomTomOnlineReverseGeocodingService,
    METHODS as MET_TomTomOnlineReverseGeocodingService,
    Methods as Met_TomTomOnlineReverseGeocodingService,
    SELECTORS as SEL_TomTomOnlineReverseGeocodingService
} from '../bindings/geocoding/TomTomOnlineReverseGeocodingService';
import {
    ACCESSORS as ACC_MapBoxOnlineGeocodingService,
    Accessors as Acc_MapBoxOnlineGeocodingService,
    METHODS as MET_MapBoxOnlineGeocodingService,
    Methods as Met_MapBoxOnlineGeocodingService,
    SELECTORS as SEL_MapBoxOnlineGeocodingService
} from '../bindings/geocoding/MapBoxOnlineGeocodingService';
import {
    ACCESSORS as ACC_MapBoxOnlineReverseGeocodingService,
    Accessors as Acc_MapBoxOnlineReverseGeocodingService,
    METHODS as MET_MapBoxOnlineReverseGeocodingService,
    Methods as Met_MapBoxOnlineReverseGeocodingService,
    SELECTORS as SEL_MapBoxOnlineReverseGeocodingService
} from '../bindings/geocoding/MapBoxOnlineReverseGeocodingService';
import {
    ACCESSORS as ACC_OSMOfflineGeocodingService,
    Accessors as Acc_OSMOfflineGeocodingService,
    METHODS as MET_OSMOfflineGeocodingService,
    Methods as Met_OSMOfflineGeocodingService,
    SELECTORS as SEL_OSMOfflineGeocodingService
} from '../bindings/geocoding/OSMOfflineGeocodingService';
import {
    ACCESSORS as ACC_OSMOfflineReverseGeocodingService,
    Accessors as Acc_OSMOfflineReverseGeocodingService,
    METHODS as MET_OSMOfflineReverseGeocodingService,
    Methods as Met_OSMOfflineReverseGeocodingService,
    SELECTORS as SEL_OSMOfflineReverseGeocodingService
} from '../bindings/geocoding/OSMOfflineReverseGeocodingService';
import {
    ACCESSORS as ACC_MultiOSMOfflineGeocodingService,
    Accessors as Acc_MultiOSMOfflineGeocodingService,
    METHODS as MET_MultiOSMOfflineGeocodingService,
    Methods as Met_MultiOSMOfflineGeocodingService,
    SELECTORS as SEL_MultiOSMOfflineGeocodingService
} from '../bindings/geocoding/MultiOSMOfflineGeocodingService';
import {
    ACCESSORS as ACC_MultiOSMOfflineReverseGeocodingService,
    Accessors as Acc_MultiOSMOfflineReverseGeocodingService,
    METHODS as MET_MultiOSMOfflineReverseGeocodingService,
    Methods as Met_MultiOSMOfflineReverseGeocodingService,
    SELECTORS as SEL_MultiOSMOfflineReverseGeocodingService
} from '../bindings/geocoding/MultiOSMOfflineReverseGeocodingService';
import {
    ACCESSORS as ACC_GeocodingService,
    Accessors as Acc_GeocodingService,
    METHODS as MET_GeocodingService,
    Methods as Met_GeocodingService,
    SELECTORS as SEL_GeocodingService
} from '../bindings/geocoding/GeocodingService';
import {
    ACCESSORS as ACC_ReverseGeocodingService,
    Accessors as Acc_ReverseGeocodingService,
    METHODS as MET_ReverseGeocodingService,
    Methods as Met_ReverseGeocodingService,
    SELECTORS as SEL_ReverseGeocodingService
} from '../bindings/geocoding/ReverseGeocodingService';

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

        NSMSFGeocodingServiceAdditions.calculateAddress(this.getNative(), nRequest, (res, err) => {
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
        NSMSFGeocodingServiceAdditions.calculateAddressReverse(this.getNative(), nRequest, (res, err) => {
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
    createNative(options: PeliasOnlineGeocodingServiceOptions) {
        return MSFPeliasOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class PeliasOnlineReverseGeocodingService extends ReverseGeocodingService<MSFPeliasOnlineReverseGeocodingService, PeliasOnlineReverseGeocodingServiceOptions> {
    createNative(options: PeliasOnlineReverseGeocodingServiceOptions) {
        return MSFPeliasOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class TomTomOnlineGeocodingService extends GeocodingService<MSFTomTomOnlineGeocodingService, TomTomOnlineGeocodingServiceOptions> {
    createNative(options: TomTomOnlineGeocodingServiceOptions) {
        return MSFTomTomOnlineGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}
export class TomTomOnlineReverseGeocodingService extends ReverseGeocodingService<MSFTomTomOnlineReverseGeocodingService, TomTomOnlineReverseGeocodingServiceOptions> {
    createNative(options: TomTomOnlineReverseGeocodingServiceOptions) {
        return MSFTomTomOnlineReverseGeocodingService.alloc().initWithApiKey(options.apiKey);
    }
}

export class MapBoxOnlineGeocodingService extends GeocodingService<MSFMapBoxOnlineGeocodingService, MapBoxOnlineGeocodingServiceOptions> {
    createNative(options: MapBoxOnlineGeocodingServiceOptions) {
        return MSFMapBoxOnlineGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}
export class MapBoxOnlineReverseGeocodingService extends ReverseGeocodingService<MSFMapBoxOnlineReverseGeocodingService, MapBoxOnlineReverseGeocodingServiceOptions> {
    createNative(options: MapBoxOnlineReverseGeocodingServiceOptions) {
        return MSFMapBoxOnlineReverseGeocodingService.alloc().initWithAccessToken(options.apiKey);
    }
}

export class OSMOfflineGeocodingService extends GeocodingService<MSFOSMOfflineGeocodingService, OSMOfflineGeocodingServiceOptions> {
    createNative(options: OSMOfflineGeocodingServiceOptions) {
        return MSFOSMOfflineGeocodingService.alloc().initWithPath(options.path);
    }
}

export class OSMOfflineReverseGeocodingService extends ReverseGeocodingService<MSFOSMOfflineReverseGeocodingService, OSMOfflineReverseGeocodingServiceOptions> {
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

export interface GeocodingResult extends Acc_GeocodingResult, Met_GeocodingResult {}
bindNative(GeocodingResult, MET_GeocodingResult, ACC_GeocodingResult, { selectors: SEL_GeocodingResult });

export interface PeliasOnlineGeocodingService extends Acc_PeliasOnlineGeocodingService, Omit<Met_PeliasOnlineGeocodingService, 'calculateAddresses'> {}
bindNative(PeliasOnlineGeocodingService, MET_PeliasOnlineGeocodingService, ACC_PeliasOnlineGeocodingService, { selectors: SEL_PeliasOnlineGeocodingService });

export interface PeliasOnlineReverseGeocodingService extends Acc_PeliasOnlineReverseGeocodingService, Omit<Met_PeliasOnlineReverseGeocodingService, 'calculateAddresses'> {}
bindNative(PeliasOnlineReverseGeocodingService, MET_PeliasOnlineReverseGeocodingService, ACC_PeliasOnlineReverseGeocodingService, { selectors: SEL_PeliasOnlineReverseGeocodingService });

export interface TomTomOnlineGeocodingService extends Acc_TomTomOnlineGeocodingService, Omit<Met_TomTomOnlineGeocodingService, 'calculateAddresses'> {}
bindNative(TomTomOnlineGeocodingService, MET_TomTomOnlineGeocodingService, ACC_TomTomOnlineGeocodingService, { selectors: SEL_TomTomOnlineGeocodingService });

export interface TomTomOnlineReverseGeocodingService extends Acc_TomTomOnlineReverseGeocodingService, Omit<Met_TomTomOnlineReverseGeocodingService, 'calculateAddresses'> {}
bindNative(TomTomOnlineReverseGeocodingService, MET_TomTomOnlineReverseGeocodingService, ACC_TomTomOnlineReverseGeocodingService, { selectors: SEL_TomTomOnlineReverseGeocodingService });

export interface MapBoxOnlineGeocodingService extends Acc_MapBoxOnlineGeocodingService, Omit<Met_MapBoxOnlineGeocodingService, 'calculateAddresses'> {}
bindNative(MapBoxOnlineGeocodingService, MET_MapBoxOnlineGeocodingService, ACC_MapBoxOnlineGeocodingService, { selectors: SEL_MapBoxOnlineGeocodingService });

export interface MapBoxOnlineReverseGeocodingService extends Acc_MapBoxOnlineReverseGeocodingService, Omit<Met_MapBoxOnlineReverseGeocodingService, 'calculateAddresses'> {}
bindNative(MapBoxOnlineReverseGeocodingService, MET_MapBoxOnlineReverseGeocodingService, ACC_MapBoxOnlineReverseGeocodingService, { selectors: SEL_MapBoxOnlineReverseGeocodingService });

export interface OSMOfflineGeocodingService extends Acc_OSMOfflineGeocodingService, Omit<Met_OSMOfflineGeocodingService, 'calculateAddresses'> {}
bindNative(OSMOfflineGeocodingService, MET_OSMOfflineGeocodingService, ACC_OSMOfflineGeocodingService, { selectors: SEL_OSMOfflineGeocodingService });

export interface OSMOfflineReverseGeocodingService extends Acc_OSMOfflineReverseGeocodingService, Omit<Met_OSMOfflineReverseGeocodingService, 'calculateAddresses'> {}
bindNative(OSMOfflineReverseGeocodingService, MET_OSMOfflineReverseGeocodingService, ACC_OSMOfflineReverseGeocodingService, { selectors: SEL_OSMOfflineReverseGeocodingService });

export interface MultiOSMOfflineGeocodingService extends Acc_MultiOSMOfflineGeocodingService, Omit<Met_MultiOSMOfflineGeocodingService, 'add' | 'calculateAddresses' | 'remove'> {}
bindNative(MultiOSMOfflineGeocodingService, MET_MultiOSMOfflineGeocodingService, ACC_MultiOSMOfflineGeocodingService, { selectors: SEL_MultiOSMOfflineGeocodingService });

export interface MultiOSMOfflineReverseGeocodingService extends Acc_MultiOSMOfflineReverseGeocodingService, Omit<Met_MultiOSMOfflineReverseGeocodingService, 'add' | 'calculateAddresses' | 'remove'> {}
bindNative(MultiOSMOfflineReverseGeocodingService, MET_MultiOSMOfflineReverseGeocodingService, ACC_MultiOSMOfflineReverseGeocodingService, { selectors: SEL_MultiOSMOfflineReverseGeocodingService });

export interface GeocodingService<T extends MSFGeocodingService, U extends GeocodingServiceOptions> extends Acc_GeocodingService, Omit<Met_GeocodingService, 'calculateAddresses'> {}
bindNative(GeocodingService, MET_GeocodingService, ACC_GeocodingService, { selectors: SEL_GeocodingService });

export interface ReverseGeocodingService<T extends MSFReverseGeocodingService, U extends ReverseGeocodingServiceOptions>
    extends Acc_ReverseGeocodingService, Omit<Met_ReverseGeocodingService, 'calculateAddresses'> {}
bindNative(ReverseGeocodingService, MET_ReverseGeocodingService, ACC_ReverseGeocodingService, { selectors: SEL_ReverseGeocodingService });
