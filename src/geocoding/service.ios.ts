import { Address, GeocodingRequest, GeocodingResult as IGeocodingResult, GeocodingServiceOptions } from './service';
import { BaseGeocodingService } from './service.common';
import { toNativeMapPos } from '../core/core';
import { FeatureCollection } from '../geometry/feature';

export class GeocodingService extends BaseGeocodingService<NTGeocodingService, GeocodingServiceOptions> {
    createNative(options: GeocodingServiceOptions) {
        return NTGeocodingService.alloc().init();
    }
    public calculateAddresses(options: GeocodingRequest) {
        const nRequest = NTGeocodingRequest.alloc().initWithProjectionQuery(options.projection.getNative(), options.query);
        if (options.locationRadius !== undefined) {
            nRequest.setLocationRadius(options.locationRadius);
        }
        if (options.location) {
            nRequest.setLocation(toNativeMapPos(options.location));
        }
        const vector = this.getNative().calculateAddresses(nRequest);
        const result: GeocodingResult[] = [];
        for (let index = 0; index < vector.size(); index++) {
            result[index] = new GeocodingResult(vector.get(index));
        }
        return result;
    }
}


export class GeocodingResult implements IGeocodingResult {
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
