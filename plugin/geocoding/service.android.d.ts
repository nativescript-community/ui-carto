import { Address, GeocodingRequest, GeocodingResult as IGeocodingResult, GeocodingServiceOptions } from './service';
import { BaseGeocodingService } from './service.common';
import { FeatureCollection } from '../geometry/feature';
export declare class GeocodingService extends BaseGeocodingService<com.carto.geocoding.GeocodingService, GeocodingServiceOptions> {
    createNative(options: GeocodingServiceOptions): com.carto.geocoding.GeocodingService;
    calculateAddresses(options: GeocodingRequest): GeocodingResult[];
}
export declare class GeocodingResult implements IGeocodingResult {
    private native;
    constructor(native: com.carto.geocoding.GeocodingResult);
    getAddress(): Address;
    getRank(): number;
    getFeatureCollection(): FeatureCollection;
}
