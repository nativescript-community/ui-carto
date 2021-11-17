package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.geocoding.ReverseGeocodingService;
import com.carto.geocoding.ReverseGeocodingRequest;

public class AKReverseGeocodingService extends ReverseGeocodingService {
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}