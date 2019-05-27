package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.ValhallaOnlineRoutingService;

public class AKValhallaOnlineRoutingService extends ValhallaOnlineRoutingService {
    public AKValhallaOnlineRoutingService(String apiKey) {
        super(apiKey);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}
