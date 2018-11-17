package com.akylas.carto.additions;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.PeliasOnlineGeocodingService;
import com.carto.packagemanager.PackageManager;

public class AKPeliasOnlineGeocodingService extends PeliasOnlineGeocodingService {
    public AKPeliasOnlineGeocodingService(String key) {
        super(key);
    }
    public void calculateAddress (final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        AKGeocodingServiceAdditions.calculateAddress(this, request, callback);
    }
}
