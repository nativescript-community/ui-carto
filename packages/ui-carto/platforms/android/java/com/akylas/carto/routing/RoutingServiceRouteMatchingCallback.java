package com.akylas.carto.routing;

import com.carto.routing.RouteMatchingResult;

public interface RoutingServiceRouteMatchingCallback {
    void onRouteMatchingResult(Exception e, RouteMatchingResult result);
}