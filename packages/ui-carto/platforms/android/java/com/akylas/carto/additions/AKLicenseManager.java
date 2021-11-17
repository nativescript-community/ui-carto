package com.akylas.carto.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;


public class AKLicenseManager {
    static final String TAG = "AKLicenseManager";

    static public void registerLicenseCallback(final String key, final android.content.Context context,
            final RegisterLicenseCallback callback) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final Boolean result = com.carto.ui.MapView.registerLicense(key, context);
                new Handler(android.os.Looper.getMainLooper()).post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onLicenseRegistered(result);
                    }
                });

            }
        });
        thread.start();
    }
}
