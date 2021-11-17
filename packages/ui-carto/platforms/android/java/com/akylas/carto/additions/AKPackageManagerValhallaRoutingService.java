package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.RouteMatchingRequest;
import com.carto.routing.PackageManagerValhallaRoutingService;
import com.carto.packagemanager.PackageManager;

public class AKPackageManagerValhallaRoutingService extends PackageManagerValhallaRoutingService {
    public AKPackageManagerValhallaRoutingService(PackageManager manager) {
        super(manager);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
    public void matchRouteCallback (final RouteMatchingRequest request, final RoutingServiceRouteMatchingCallback callback  ) {
        AKRoutingServiceAdditions.matchRoute(this, request, callback);
    }
}
