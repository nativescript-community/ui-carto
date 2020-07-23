package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.core.MapPos;
import com.carto.core.MapPosVector;
import com.carto.core.IntVector;

import com.carto.layers.HillshadeRasterTileLayer;
import com.carto.datasources.TileDataSource;
import com.carto.rastertiles.ElevationDecoder;

import java.io.IOException;

public class AKHillshadeRasterTileLayer extends HillshadeRasterTileLayer {
    public interface ElevationCallback {
        void onElevation(Exception e, Integer elevation);
    }

    public interface ElevationsCallback {
        void onElevations(Exception e, IntVector elevations);
    }

    static Handler mainHandler = null;

    public AKHillshadeRasterTileLayer(TileDataSource datasource, ElevationDecoder decoder) {
        super(datasource, decoder);
    }

    public void getElevationCallback(final MapPos pos, final ElevationCallback callback) {
        final AKHillshadeRasterTileLayer fThis = this;
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {

                Integer result = null;
                try {
                    result = fThis.getElevation(pos);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onElevation(e, null);
                            }
                        });
                    } else {
                        callback.onElevation(e, null);
                    }
                    return;
                }

                final Integer fRa = result;
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onElevation(null, fRa);
                        }
                    });
                } else {
                    callback.onElevation(null, fRa);
                }

            }
        });
        thread.start();
    }

    public void getElevationsCallback(final MapPosVector poses,  final ElevationsCallback callback) {
        final AKHillshadeRasterTileLayer fThis = this;
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {

                IntVector result = null;
                try {
                    result = fThis.getElevations(poses);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (AKMapView.RUN_ON_MAIN_THREAD) {
                        if (mainHandler == null) {
                            mainHandler = new Handler(android.os.Looper.getMainLooper());
                        }
                        mainHandler.post(new Runnable() {
                            @Override
                            public void run() {
                                callback.onElevations(e, null);
                            }
                        });
                    } else {
                        callback.onElevations(e, null);
                    }
                    return;
                }

                final IntVector fRa = result;
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onElevations(null, fRa);
                        }
                    });
                } else {
                    callback.onElevations(null, fRa);
                }

            }
        });
        thread.start();
    }
}
