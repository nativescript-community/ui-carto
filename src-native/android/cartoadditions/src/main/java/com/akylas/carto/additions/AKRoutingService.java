package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.routing.RoutingService;
import com.carto.routing.RoutingRequest;

public class AKRoutingService extends RoutingService {
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}