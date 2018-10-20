import { Address, GeocodingRequest, GeocodingResult as IGeocodingResult, GeocodingServiceOptions } from './service';
import { BaseGeocodingService } from './service.common';
import { toNativeMapPos } from '../core/core';
import { nativeVectorToArray } from '../utils/utils';
import { FeatureCollection } from '../geometry/feature';

export class GeocodingService extends BaseGeocodingService<com.carto.geocoding.GeocodingService, GeocodingServiceOptions> {
    createNative(options: GeocodingServiceOptions) {
        return new com.carto.geocoding.GeocodingService();
    }
    public calculateAddresses(options: GeocodingRequest) {
        const nRequest = new com.carto.geocoding.GeocodingRequest(options.projection.getNative(), options.query);
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
    constructor(private native: com.carto.geocoding.GeocodingResult) {}
    getAddress() {
        const nResult = this.native.getAddress();
        return {
            street: nResult.getStreet(),
            country: nResult.getCountry(),
            name: nResult.getName(),
            neighbourhood: nResult.getNeighbourhood(),
            postcode: nResult.getPostcode(),
            houseNumber: nResult.getHouseNumber(),
            region: nResult.getRegion(),
            locality: nResult.getLocality(),
            categories: nativeVectorToArray(nResult.getCategories())
        } as Address;
    }
    getRank() {
        return this.native.getRank();
    }
    getFeatureCollection() {
        return new FeatureCollection(this.native.getFeatureCollection());
    }
}
