package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingResultVector;

public interface GeocodingServiceAddressCallback {
    void onGeoCodingResult(Exception e, GeocodingResultVector result);
}