package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.TomTomOnlineGeocodingService;

public class AKTomTomOnlineGeocodingService extends TomTomOnlineGeocodingService {
    public AKTomTomOnlineGeocodingService(String token) {
        super(token);
    }
    public void calculateAddressCallback (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
