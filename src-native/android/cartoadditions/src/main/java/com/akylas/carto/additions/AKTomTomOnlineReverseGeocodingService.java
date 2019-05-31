package com.akylas.carto.additions;

import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.TomTomOnlineReverseGeocodingService;

public class AKTomTomOnlineReverseGeocodingService extends TomTomOnlineReverseGeocodingService {
    public AKTomTomOnlineReverseGeocodingService(String token) {
        super(token);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
