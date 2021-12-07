package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONArray;
import org.json.JSONObject;
import com.carto.routing.RoutingRequest;
import com.carto.routing.RoutingResult;
import com.carto.routing.RouteMatchingRequest;
import com.carto.routing.RouteMatchingResult;
import com.carto.routing.RoutingInstructionVector;
import com.carto.routing.RoutingInstruction;
import com.carto.routing.RoutingService;
import com.carto.routing.PackageManagerValhallaRoutingService;
import com.carto.routing.ValhallaOfflineRoutingService;

import java.io.IOException;


public class AKRoutingServiceAdditions {
    enum RoutingAction {
        HEAD_ON,
        FINISH,
        NO_TURN,
        GO_STRAIGHT,
        TURN_RIGHT,
        UTURN,
        TURN_LEFT,
        REACH_VIA_LOCATION,
        ENTER_ROUNDABOUT,
        LEAVE_ROUNDABOUT,
        STAY_ON_ROUNDABOUT,
        START_AT_END_OF_STREET,
        ENTER_AGAINST_ALLOWED_DIRECTION,
        LEAVE_AGAINST_ALLOWED_DIRECTION,
        GO_UP,
        GO_DOWN,
        WAIT
    }

    static final String TAG = "AKRoutingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateRoute (final RoutingService service, final RoutingRequest request, final String profile, final RoutingServiceRouteCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                RoutingResult result = null;
                try {
                    Log.d("JS", "setProfile " + profile);
                    service.setProfile(profile);
                    Log.d("JS", "calculateRoute " + request);
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

    public static String stringifyRoutingResult(final RoutingResult routingResult) throws JSONException {
        RoutingInstructionVector rInstructions = routingResult.getInstructions();
        JSONArray instructions = new JSONArray();
        for (int i = 0; i < rInstructions.size(); i++) {
            RoutingInstruction instruction = rInstructions.get(i);
            int index = instruction.getPointIndex();
            JSONObject obj = new JSONObject();
            obj.put("a", RoutingAction.valueOf(instruction.getAction().toString().replace("ROUTING_ACTION_", "")).ordinal());
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
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                if (AKMapView.RUN_ON_MAIN_THREAD) {
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
