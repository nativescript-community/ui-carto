package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.routing.RoutingRequest;
import com.carto.routing.RoutingResult;
import com.carto.routing.RouteMatchingRequest;
import com.carto.routing.RouteMatchingResult;
import com.carto.routing.RoutingService;
import com.carto.routing.PackageManagerValhallaRoutingService;
import com.carto.routing.ValhallaOfflineRoutingService;

import java.io.IOException;

public class AKRoutingServiceAdditions {
    static final String TAG = "AKRoutingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateRoute (final RoutingService service, final RoutingRequest request, final RoutingServiceRouteCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                
                RoutingResult result = null;
                try {
                    result = service.calculateRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onRoutingResult(e, null);
                            }
                        });
                    } else {
                        callback.onRoutingResult(e, null);
                    }
                    return;
                }
                
                final RoutingResult fRa = result;
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onRoutingResult(null, fRa);
                        }
                    });
                } else {
                    callback.onRoutingResult(null, fRa);
                }

            }
        });
        thread.start();
    }

    public static void matchRoute (final PackageManagerValhallaRoutingService service, final RouteMatchingRequest request, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onRouteMatchingResult(e, null);
                            }
                        });
                    } else {
                        callback.onRouteMatchingResult(e, null);
                    }
                    return;
                }
                
                final RouteMatchingResult fRa = result;
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onRouteMatchingResult(null, fRa);
                        }
                    });
                } else {
                    callback.onRouteMatchingResult(null, fRa);
                }

            }
        });
        thread.start();
    }

    public static void matchRoute (final ValhallaOfflineRoutingService service, final RouteMatchingRequest request, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onRouteMatchingResult(e, null);
                            }
                        });
                    } else {
                        callback.onRouteMatchingResult(e, null);
                    }
                    return;
                }
                
                final RouteMatchingResult fRa = result;
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onRouteMatchingResult(null, fRa);
                        }
                    });
                } else {
                    callback.onRouteMatchingResult(null, fRa);
                }

            }
        });
        thread.start();
    }


    // public static void rawCall (final ValhallaOfflineRoutingService service, final String option, final String request, final RoutingServiceRawCallCallback callback  ) {
    //     Thread thread = new Thread(new Runnable() {
    //         @Override
    //         public void run() {
    //             String result = null;
    //             try {
    //                 result = service.rawCall(option, request);
    //             } catch (final Exception e) {
    //                 e.printStackTrace();
    //                 if (AKMapView.RUN_ON_MAIN_THREAD) {
    //                     if (mainHandler == null) {
    //                         mainHandler = new Handler(android.os.Looper.getMainLooper());
    //                     }
    //                     mainHandler.post(new Runnable() {
    //                         @Override
    //                         public void run() {
    //                             callback.onRoutingResult(e, null);
    //                         }
    //                     });
    //                 } else {
    //                     callback.onRoutingResult(e, null);
    //                 }
    //                 return;
    //             }
                
    //             final String fRa = result;
    //             if (AKMapView.RUN_ON_MAIN_THREAD) {
    //                 if (mainHandler == null) {
    //                     mainHandler = new Handler(android.os.Looper.getMainLooper());
    //                 }
    //                 mainHandler.post(new Runnable() {
    //                     @Override
    //                     public void run() {
    //                         callback.onRoutingResult(null, fRa);
    //                     }
    //                 });
    //             } else {
    //                 callback.onRoutingResult(null, fRa);
    //             }

    //         }
    //     });
    //     thread.start();
    // }
}
