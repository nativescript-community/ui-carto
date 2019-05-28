package com.akylas.carto.additions;

import com.carto.routing.RouteMatchingResult;

public interface RoutingServiceRouteMatchingCallback {
    void onRouteMatchingResult(Exception e, RouteMatchingResult result);
}