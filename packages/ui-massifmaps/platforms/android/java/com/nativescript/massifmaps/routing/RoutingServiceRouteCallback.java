package com.nativescript.massifmaps.routing;

import com.massifmaps.routing.RoutingResult;

public interface RoutingServiceRouteCallback {
    void onRoutingResult(Exception e, RoutingResult result, String strResult);
}