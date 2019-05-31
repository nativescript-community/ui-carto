package com.akylas.carto.additions;

import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.PeliasOnlineReverseGeocodingService;

public class AKPeliasOnlineReverseGeocodingService extends PeliasOnlineReverseGeocodingService {
    public AKPeliasOnlineReverseGeocodingService(String key) {
        super(key);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
