package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.routing.RoutingRequest;
import com.carto.routing.RoutingResult;
import com.carto.routing.RoutingService;

import java.io.IOException;

public class AKRoutingServiceAdditions {
    static final String TAG = "AKRoutingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateRoute (final RoutingService service, final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                RoutingResult result = null;
                try {
                    result = service.calculateRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onRoutingResult(e, null);
                        }
                    });
                    return;
                }
                
                final RoutingResult fRa = result;
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onRoutingResult(null, fRa);
                    }
                });

            }
        });
        thread.start();
    }
}
