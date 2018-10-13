import { Address, Feature, FeatureCollection as IFeatureCollection, GeocodingRequest, GeocodingResult as IGeocodingResult, GeocodingServiceOptions, Geometry } from './service';
import { BaseGeocodingService } from './service.common';
import { fromNativeMapBounds, fromNativeMapPos, toNativeMapPos } from '../core/core';
import { nativeVariantToJS, nativeVectorToArray } from '../utils/utils';

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

export class FeatureCollection implements IFeatureCollection {
    constructor(private native: com.carto.geometry.FeatureCollection) {}

    getFeature(index: number) {
        const nResult = this.native.getFeature(index);
        const nGeo = nResult.getGeometry();
        return {
            properties: nativeVariantToJS(nResult.getProperties()),
            geometry: {
                centerPos: fromNativeMapPos(nGeo.getCenterPos()),
                bounds: fromNativeMapBounds(nGeo.getBounds())
            } as Geometry
        } as Feature;
    }
    getFeatureCount() {
        return this.native.getFeatureCount();
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
