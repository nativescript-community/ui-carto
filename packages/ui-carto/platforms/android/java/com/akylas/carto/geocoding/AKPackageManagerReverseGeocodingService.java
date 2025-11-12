package com.akylas.carto.geocoding;

import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.PackageManagerReverseGeocodingService;
import com.carto.packagemanager.PackageManager;

public class AKPackageManagerReverseGeocodingService extends PackageManagerReverseGeocodingService {
    public AKPackageManagerReverseGeocodingService(PackageManager manager) {
        super(manager);
    }
    public void calculateAddressCallback (final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
