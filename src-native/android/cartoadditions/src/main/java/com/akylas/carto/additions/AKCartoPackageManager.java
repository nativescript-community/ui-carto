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
        Log.d(TAG, "getServerPackagesCallback");
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final PackageInfoVector results = AKCartoPackageManager.this.getServerPackages();
                // final long size = results.size();
                // PackageInfo[] resultArray = new PackageInfo[(int) size];
                // for (int i = 0; i < size; i++) {
                //     resultArray[i] = results.get(i);
                // }

                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                // final PackageInfo[] fRa = resultArray;
                Log.d(TAG, "getServerPackagesCallback about to run result");
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        Log.d(TAG, "getServerPackagesCallback run main callback");
                        callback.onServerPackages(results);
                    }
                });

            }
        });
        thread.start();
    }

    public void getLocalPackagesCallback(final ServerPackagesCallback callback) {
        Log.d(TAG, "getLocalPackagesCallback");
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                final PackageInfoVector results = AKCartoPackageManager.this.getLocalPackages();
                // final long size = results.size();
                // PackageInfo[] resultArray = new PackageInfo[(int) size];
                // for (int i = 0; i < size; i++) {
                //     resultArray[i] = results.get(i);
                // }

                if (mainHandler == null) {
                    mainHandler = new Handler(android.os.Looper.getMainLooper());
                }
                // final PackageInfo[] fRa = resultArray;
                Log.d(TAG, "getLocalPackagesCallback about to run result");
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        callback.onServerPackages(results);
                    }
                });

            }
        });
        thread.start();
    }
}
