package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.ReverseGeocodingRequest;
import com.carto.geocoding.GeocodingResult;
import com.carto.geocoding.GeocodingResultVector;
import com.carto.geocoding.GeocodingService;
import com.carto.geocoding.ReverseGeocodingService;

import java.io.IOException;

public class AKGeocodingServiceAdditions {
    static final String TAG = "AKGeocodingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateAddress (final GeocodingService service, final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                GeocodingResultVector results = null;
                try {
                    results = service.calculateAddresses(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onGeoCodingResult(e, null);
                        }
                    });
                    return;
                }
                
                final GeocodingResultVector fRa = results;
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onGeoCodingResult(null, fRa);
                    }
                });

            }
        });
        thread.start();
    }
    public static void calculateAddress (final ReverseGeocodingService service, final ReverseGeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                GeocodingResultVector results = null;
                try {
                    results = service.calculateAddresses(request);
                } catch (final Exception e) {
                    e.printStackTrace();
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onGeoCodingResult(e, null);
                        }
                    });
                    return;
                }
                
                final GeocodingResultVector fRa = results;
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onGeoCodingResult(null, fRa);
                    }
                });

            }
        });
        thread.start();
    }
}
