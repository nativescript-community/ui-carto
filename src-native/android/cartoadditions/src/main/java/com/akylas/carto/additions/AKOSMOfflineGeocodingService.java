package com.akylas.carto.additions;

import java.io.IOException;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.OSMOfflineGeocodingService;
import com.carto.packagemanager.PackageManager;

public class AKOSMOfflineGeocodingService extends OSMOfflineGeocodingService{
    public AKOSMOfflineGeocodingService(String databaseString) throws IOException {
        super(databaseString);
    }
    public void calculateAddressCallback (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
