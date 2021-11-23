package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.core.MapTile;
import com.carto.datasources.TileDownloadListener;
import com.carto.ui.VectorElementClickInfo;

public class AKTileDownloadListener extends TileDownloadListener {
    Handler mainHandler = null;

    public interface Listener {
        void onDownloadCompleted();

        void onDownloadFailed(MapTile tile);

        void onDownloadProgress(float progress);

        void onDownloadStarting(int tileCount);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public AKTileDownloadListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public void onDownloadCompleted() {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onDownloadCompleted();
                    } else {
                        AKTileDownloadListener.super.onDownloadCompleted();
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onDownloadCompleted();
            } else {
                super.onDownloadCompleted();
            }
        }
    }

    @Override
    public void onDownloadFailed(final MapTile tile) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onDownloadFailed(tile);
                    } else {
                        AKTileDownloadListener.super.onDownloadFailed(tile);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onDownloadFailed(tile);
            } else {
                super.onDownloadFailed(tile);
            }
        }
    }

    @Override
    public void onDownloadProgress(final float progress) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onDownloadProgress(progress);
                    } else {
                        AKTileDownloadListener.super.onDownloadProgress(progress);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onDownloadProgress(progress);
            } else {
                super.onDownloadProgress(progress);
            }
        }
    }

    @Override
    public void onDownloadStarting(final int tileCount) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onDownloadStarting(tileCount);
                    } else {
                        AKTileDownloadListener.super.onDownloadStarting(tileCount);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onDownloadStarting(tileCount);
            } else {
                super.onDownloadStarting(tileCount);
            }
        }
    }
}
