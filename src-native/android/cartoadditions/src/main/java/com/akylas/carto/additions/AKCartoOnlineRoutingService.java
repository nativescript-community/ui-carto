package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.CartoOnlineRoutingService;

public class AKCartoOnlineRoutingService extends CartoOnlineRoutingService {
    public AKCartoOnlineRoutingService(String source) {
        super(source);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}
