package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingResult;

public interface GeocodingServiceAddressCallback {
    void onGeoCodingResult(GeocodingResult[] result);
}