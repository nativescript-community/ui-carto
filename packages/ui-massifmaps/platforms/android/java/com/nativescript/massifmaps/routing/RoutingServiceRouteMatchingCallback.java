package com.nativescript.massifmaps.routing;

import com.massifmaps.routing.RouteMatchingResult;

public interface RoutingServiceRouteMatchingCallback {
    void onRouteMatchingResult(Exception e, RouteMatchingResult result);
}