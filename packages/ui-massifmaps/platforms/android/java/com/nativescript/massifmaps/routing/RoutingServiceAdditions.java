package com.nativescript.massifmaps.routing;

import android.os.Handler;
import android.util.Log;

import com.nativescript.massifmaps.additions.MapView;

import org.json.JSONException;
import org.json.JSONArray;
import org.json.JSONObject;
import com.massifmaps.routing.RoutingRequest;
import com.massifmaps.routing.RoutingResult;
import com.massifmaps.routing.RouteMatchingRequest;
import com.massifmaps.routing.RouteMatchingResult;
import com.massifmaps.routing.RoutingInstructionVector;
import com.massifmaps.routing.RoutingInstruction;
import com.massifmaps.routing.RoutingService;
import com.massifmaps.routing.PackageManagerValhallaRoutingService;
import com.massifmaps.routing.ValhallaOfflineRoutingService;
import com.massifmaps.routing.ValhallaOnlineRoutingService;
import com.massifmaps.routing.MultiValhallaOfflineRoutingService;

import java.io.IOException;


public class RoutingServiceAdditions {
    static final String TAG = "RoutingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateRoute (final RoutingService service, final RoutingRequest request, final String profile, final boolean stringify,  final RoutingServiceRouteCallback callback) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RoutingResult result = null;
                String strResult = null;
                try {
                    service.setProfile(profile);
                    result = service.calculateRoute(request);
                    if (stringify) {
                        strResult = stringifyRoutingResult(result);
                    }
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onRoutingResult(e, null, null);
                            }
                        });
                    } else {
                        callback.onRoutingResult(e, null, null);
                    }
                    return;
                }
                
                final RoutingResult fRa = result;
                final String fStrResult = strResult;
                if (MapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onRoutingResult(null, fRa, fStrResult);
                        }
                    });
                } else {
                    callback.onRoutingResult(null, fRa, fStrResult);
                }

            }
        });
        thread.start();
    }

    public static String stringifyRoutingResult(final RoutingResult routingResult) throws JSONException {
        RoutingInstructionVector rInstructions = routingResult.getInstructions();
        JSONArray instructions = new JSONArray();
        for (int i = 0; i < rInstructions.size(); i++) {
            RoutingInstruction instruction = rInstructions.get(i);
            int index = instruction.getPointIndex();
            JSONObject obj = new JSONObject();
            // getAction() IS the ordinal now that the SDK's Java enums are int constants, so the
            // name round trip is gone - and with it the throw on ENTER_FERRY / LEAVE_FERRY, which
            // the local mirror of the enum never listed. Same numbers for every other action.
            obj.put("a", instruction.getAction());
            obj.put("az", Math.round(instruction.getAzimuth()));
            obj.put("dist", instruction.getDistance());
            obj.put("time", instruction.getTime());
            obj.put("index", index);
            obj.put("angle", Math.round(instruction.getTurnAngle()));
            final String name = instruction.getStreetName();
            if (name != null && name.length() > 0) {
                obj.put("name", name);
            }
            obj.put("inst", instruction.getInstruction());
            instructions.put(obj);
        }

        JSONObject route = new JSONObject();
        route.put("totalTime", routingResult.getTotalTime());
        route.put("totalDistance", routingResult.getTotalDistance());

        JSONObject result = new JSONObject();
        result.put("route", route);
        result.put("instructions", instructions);
        return result.toString();
    }
    public static void routingResultToJSON (final RoutingResult routingResult, final RoutingResultToJSONCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                
                String result = null;
                try {
                    result = stringifyRoutingResult(routingResult);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onJSON(e, null);
                            }
                        });
                    } else {
                        callback.onJSON(e, null);
                    }
                    return;
                }
                
                final String fRa = result;
                if (MapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onJSON(null, fRa);
                        }
                    });
                } else {
                    callback.onJSON(null, fRa);
                }

            }
        });
        thread.start();
    }


    public static void matchRoute (final PackageManagerValhallaRoutingService service, final RouteMatchingRequest request, final String profile, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    service.setProfile(profile);
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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
                if (MapView.RUN_ON_MAIN_THREAD) {
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

    public static void matchRoute (final ValhallaOfflineRoutingService service, final RouteMatchingRequest request, final String profile, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    service.setProfile(profile);
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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
                if (MapView.RUN_ON_MAIN_THREAD) {
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

    public static void matchRoute (final ValhallaOnlineRoutingService service, final RouteMatchingRequest request, final String profile, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    service.setProfile(profile);
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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
                if (MapView.RUN_ON_MAIN_THREAD) {
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
    public static void matchRoute (final MultiValhallaOfflineRoutingService service, final RouteMatchingRequest request, final String profile, final RoutingServiceRouteMatchingCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RouteMatchingResult result = null;
                try {
                    service.setProfile(profile);
                    result = service.matchRoute(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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
                if (MapView.RUN_ON_MAIN_THREAD) {
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
    //                 if (MapView.RUN_ON_MAIN_THREAD) {
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
    //             if (MapView.RUN_ON_MAIN_THREAD) {
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
