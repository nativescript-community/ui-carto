package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.OSRMOfflineRoutingService;
import java.io.IOException;

public class AKOSRMOfflineRoutingService extends OSRMOfflineRoutingService {
    public AKOSRMOfflineRoutingService(String path) throws IOException {
        super(path);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}
