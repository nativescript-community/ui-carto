package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.geocoding.GeocodingRequest;
import com.carto.geocoding.GeocodingResult;
import com.carto.geocoding.GeocodingResultVector;
import com.carto.geocoding.GeocodingService;
import com.carto.packagemanager.CartoPackageManager;
import com.carto.packagemanager.PackageInfo;
import com.carto.packagemanager.PackageInfoVector;

import java.io.IOException;

public class AKCartoPackageManager extends CartoPackageManager {
    private final String TAG = "AKCartoPackageManager";

    public AKCartoPackageManager(String source, String dataFolder) throws IOException {
        super(source, dataFolder);
    }

    static Handler mainHandler = null;

    public void getServerPackagesCallback(final ServerPackagesCallback callback) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final PackageInfoVector results = AKCartoPackageManager.this.getServerPackages();
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onServerPackages(results);
                        }
                    });
                } else {
                    callback.onServerPackages(results);
                }

            }
        });
        thread.start();
    }

    public void getLocalPackagesCallback(final ServerPackagesCallback callback) {
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final PackageInfoVector results = AKCartoPackageManager.this.getLocalPackages();
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onServerPackages(results);
                        }
                    });
                } else {
                    callback.onServerPackages(results);
                }

            }
        });
        thread.start();
    }
}
