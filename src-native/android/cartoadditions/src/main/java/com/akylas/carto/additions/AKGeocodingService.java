package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.geocoding.GeocodingService;
import com.carto.geocoding.GeocodingRequest;

public class AKGeocodingService extends GeocodingService {
    public void calculateAddressCallback (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}