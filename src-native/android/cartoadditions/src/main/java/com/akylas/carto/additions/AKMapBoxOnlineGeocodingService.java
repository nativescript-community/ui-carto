package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.MapBoxOnlineGeocodingService;

public class AKMapBoxOnlineGeocodingService extends MapBoxOnlineGeocodingService {
    public AKMapBoxOnlineGeocodingService(String token) {
        super(token);
    }
    public void calculateAddress (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
