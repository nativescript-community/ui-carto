package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.GeocodingResult;
import com.carto.geocoding.GeocodingResultVector;
import com.carto.geocoding.GeocodingService;

import java.io.IOException;

public class AKGeocodingServiceAdditions {
    static Handler mainHandler = null;

    public static void calculateAddress (final GeocodingService service, final GeocodingRequest request, final GeocodingServiceAddressCallback callback  ) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                GeocodingResultVector results = null;
                GeocodingResult[] resultArray = null;
                try {
                    results = service.calculateAddresses(request);
                    final long size = results.size();
                    resultArray = new GeocodingResult[(int) size];
                    for (int i = 0; i < size; i++) {
                        resultArray[i] = results.get(i);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                    return;
                }

                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                final GeocodingResult[] fRa = resultArray;
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onGeoCodingResult(fRa);
                    }
                });

            }
        });
    }
}
