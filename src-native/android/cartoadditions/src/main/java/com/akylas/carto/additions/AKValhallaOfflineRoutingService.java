package com.akylas.carto.additions;

import com.carto.routing.RouteMatchingRequest;
import com.carto.routing.RoutingRequest;
import com.carto.routing.ValhallaOfflineRoutingService;
import java.io.IOException;

public class AKValhallaOfflineRoutingService extends ValhallaOfflineRoutingService {
    public AKValhallaOfflineRoutingService(String path) throws IOException {
        super(path);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }

    public void matchRouteCallback (final RouteMatchingRequest request, final RoutingServiceRouteMatchingCallback callback  ) {
        AKRoutingServiceAdditions.matchRoute(this, request, callback);
    }
}
