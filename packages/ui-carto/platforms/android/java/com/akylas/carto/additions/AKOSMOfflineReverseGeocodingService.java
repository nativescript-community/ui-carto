package com.akylas.carto.additions;

import java.io.IOException;

import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.OSMOfflineReverseGeocodingService;

public class AKOSMOfflineReverseGeocodingService extends OSMOfflineReverseGeocodingService {
    public AKOSMOfflineReverseGeocodingService(String databaseString) throws IOException {
        super(databaseString);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
