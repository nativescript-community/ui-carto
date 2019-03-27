package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.PackageManagerGeocodingService;
import com.carto.packagemanager.PackageManager;

public class AKPackageManagerGeocodingService extends PackageManagerGeocodingService {
    public AKPackageManagerGeocodingService(PackageManager manager) {
        super(manager);
    }
    public void calculateAddressCallback (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
