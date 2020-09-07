package com.akylas.carto.additions;

import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.MapBoxOnlineReverseGeocodingService;

public class AKMapBoxOnlineReverseGeocodingService extends MapBoxOnlineReverseGeocodingService {
    public AKMapBoxOnlineReverseGeocodingService(String token) {
        super(token);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
