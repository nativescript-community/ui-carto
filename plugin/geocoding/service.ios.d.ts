import { Address, GeocodingRequest, GeocodingResult as IGeocodingResult, GeocodingServiceOptions } from './service';
import { BaseGeocodingService } from './service.common';
import { FeatureCollection } from '../geometry/feature';
export declare class GeocodingService extends BaseGeocodingService<NTGeocodingService, GeocodingServiceOptions> {
    createNative(options: GeocodingServiceOptions): NTGeocodingService;
    calculateAddresses(options: GeocodingRequest): GeocodingResult[];
}
export declare class GeocodingResult implements IGeocodingResult {
    private native;
    constructor(native: NTGeocodingResult);
    getAddress(): Address;
    getRank(): number;
    getFeatureCollection(): FeatureCollection;
}
