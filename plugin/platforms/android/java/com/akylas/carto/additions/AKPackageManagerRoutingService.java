package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.PackageManagerRoutingService;
import com.carto.packagemanager.PackageManager;

public class AKPackageManagerRoutingService extends PackageManagerRoutingService {
    public AKPackageManagerRoutingService(PackageManager manager) {
        super(manager);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}
