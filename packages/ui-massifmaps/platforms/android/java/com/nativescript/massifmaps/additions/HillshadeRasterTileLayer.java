package com.nativescript.massifmaps.additions;

import android.os.Handler;
import android.util.Log;

import com.massifmaps.core.MapPos;
import com.massifmaps.core.MapPosVector;
import com.massifmaps.core.DoubleVector;

import com.massifmaps.datasources.TileDataSource;
import com.massifmaps.rastertiles.ElevationDecoder;

import java.io.IOException;

public class HillshadeRasterTileLayer extends com.massifmaps.layers.HillshadeRasterTileLayer {
    public interface ElevationCallback {
        void onElevation(Exception e, Double elevation);
    }

    public interface ElevationsCallback {
        void onElevations(Exception e, DoubleVector elevations);
    }

    static Handler mainHandler = null;

    public HillshadeRasterTileLayer(TileDataSource datasource, ElevationDecoder decoder) {
        super(datasource, decoder);
    }
    public HillshadeRasterTileLayer(TileDataSource datasource) {
        super(datasource, null);
    }

    public void getElevationCallback(final MapPos pos, final ElevationCallback callback) {
        final HillshadeRasterTileLayer fThis = this;
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {

                Double result = null;
                try {
                    result = fThis.getElevation(pos);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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

                final Double fRa = result;
                if (MapView.RUN_ON_MAIN_THREAD) {
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
        final HillshadeRasterTileLayer fThis = this;
        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {

                DoubleVector result = null;
                try {
                    result = fThis.getElevations(poses);
                } catch (final Exception e) {
                    e.printStackTrace();
                    if (MapView.RUN_ON_MAIN_THREAD) {
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

                final DoubleVector fRa = result;
                if (MapView.RUN_ON_MAIN_THREAD) {
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
