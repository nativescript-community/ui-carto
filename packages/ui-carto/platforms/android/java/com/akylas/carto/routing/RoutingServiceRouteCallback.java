package com.akylas.carto.routing;

import com.carto.routing.RoutingResult;

public interface RoutingServiceRouteCallback {
    void onRoutingResult(Exception e, RoutingResult result, String strResult);
}