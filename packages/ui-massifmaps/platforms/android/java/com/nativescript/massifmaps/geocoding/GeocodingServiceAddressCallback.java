package com.nativescript.massifmaps.geocoding;

import com.massifmaps.geocoding.GeocodingResultVector;

public interface GeocodingServiceAddressCallback {
    void onGeoCodingResult(Exception e, GeocodingResultVector result);
}