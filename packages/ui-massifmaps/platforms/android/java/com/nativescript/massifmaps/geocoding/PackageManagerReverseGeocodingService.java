package com.nativescript.massifmaps.geocoding;

import com.massifmaps.geocoding.ReverseGeocodingRequest;
import com.massifmaps.geocoding.PackageManagerReverseGeocodingService;
import com.massifmaps.packagemanager.PackageManager;

public class AKPackageManagerReverseGeocodingService extends PackageManagerReverseGeocodingService {
    public AKPackageManagerReverseGeocodingService(PackageManager manager) {
        super(manager);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
