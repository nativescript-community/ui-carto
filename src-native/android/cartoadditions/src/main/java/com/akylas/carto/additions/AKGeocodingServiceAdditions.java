package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.GeocodingResult;
import com.carto.geocoding.GeocodingResultVector;
import com.carto.geocoding.GeocodingService;

import java.io.IOException;

public class AKGeocodingServiceAdditions {
    static final String TAG = "AKGeocodingServiceAdditions";
    static Handler mainHandler = null;

    public static void calculateAddress (final GeocodingService service, final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        // Log.d(AKGeocodingServiceAdditions.TAG, "calculateAddress");
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                GeocodingResultVector results = null;
                // Log.d(TAG, "calculateAddress run in thread");
                try {
                    results = service.calculateAddresses(request);
                    // Log.d(TAG, "calculateAddress result " + results.size());
                } catch (final IOException e) {
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
                        // Log.d(TAG, "calculateAddress done");
                        callback.onGeoCodingResult(null, fRa);
                    }
                });

            }
        });
        thread.start();
    }
}
