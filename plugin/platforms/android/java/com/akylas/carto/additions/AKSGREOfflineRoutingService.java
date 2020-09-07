package com.akylas.carto.additions;

import com.carto.routing.RoutingRequest;
import com.carto.routing.SGREOfflineRoutingService;
import com.carto.projections.Projection;
import com.carto.geometry.FeatureCollection;
import com.carto.core.Variant;
import java.io.IOException;

public class AKSGREOfflineRoutingService extends SGREOfflineRoutingService {
    public AKSGREOfflineRoutingService(Projection projection, FeatureCollection features, Variant variant ) throws IOException {
        super(projection, features, variant);
    }
    public void calculateRouteCallback (final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        AKRoutingServiceAdditions.calculateRoute(this, request, callback);
    }
}
