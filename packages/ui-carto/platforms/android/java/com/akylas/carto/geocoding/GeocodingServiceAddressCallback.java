package com.akylas.carto.geocoding;

import com.carto.geocoding.GeocodingResultVector;

public interface GeocodingServiceAddressCallback {
    void onGeoCodingResult(Exception e, GeocodingResultVector result);
}