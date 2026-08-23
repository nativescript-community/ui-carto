package com.nativescript.massifmaps.geocoding;

import com.nativescript.massifmaps.additions.SynchronousHandler;
import android.os.Handler;
import android.util.Log;



import com.massifmaps.geocoding.GeocodingRequest;
import com.massifmaps.geocoding.ReverseGeocodingRequest;
import com.massifmaps.geocoding.GeocodingResult;
import com.massifmaps.geocoding.GeocodingResultVector;
import com.massifmaps.geocoding.GeocodingService;
import com.massifmaps.geocoding.ReverseGeocodingService;

import java.io.IOException;

public class GeocodingServiceAdditions {
    static final String TAG = "GeocodingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateAddress (final GeocodingService service, final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                
                GeocodingResultVector results = null;
                try {
                    results = service.calculateAddresses(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onGeoCodingResult(e, null);
                            }
                        });
                    } else {
                        callback.onGeoCodingResult(e, null);
                    }
                    return;
                }
                
                final GeocodingResultVector fRa = results;
                if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onGeoCodingResult(null, fRa);
                        }
                    });
                } else {
                    callback.onGeoCodingResult(null, fRa);
                }

            }
        });
        thread.start();
    }
    public static void calculateAddress (final ReverseGeocodingService service, final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
          
                GeocodingResultVector results = null;
                try {
                    results = service.calculateAddresses(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onGeoCodingResult(e, null);
                            }
                        });
                    } else {
                        callback.onGeoCodingResult(e, null);
                    }
                    return;
                }
                
                final GeocodingResultVector fRa = results;
                if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onGeoCodingResult(null, fRa);
                        }
                    });
                } else {
                    callback.onGeoCodingResult(null, fRa);
                }

            }
        });
        thread.start();
    }
}
