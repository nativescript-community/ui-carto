package com.nativescript.massifmaps.geocoding;

import com.massifmaps.geocoding.ReverseGeocodingRequest;
import com.massifmaps.packagemanager.PackageManager;

public class PackageManagerReverseGeocodingService extends com.massifmaps.geocoding.PackageManagerReverseGeocodingService {
    public PackageManagerReverseGeocodingService(PackageManager manager) {
        super(manager);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        GeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
