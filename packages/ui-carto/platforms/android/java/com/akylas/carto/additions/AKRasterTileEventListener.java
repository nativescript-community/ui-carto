package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.RasterTileEventListener;
import com.carto.ui.RasterTileClickInfo;

public class AKRasterTileEventListener extends RasterTileEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onRasterTileClicked(final RasterTileClickInfo clickInfo);
    }

    Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public AKRasterTileEventListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public boolean onRasterTileClicked(final RasterTileClickInfo clickInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = new Boolean(listener.onRasterTileClicked(clickInfo));
                    } else {
                        arr[0] = new Boolean(AKRasterTileEventListener.super.onRasterTileClicked(clickInfo));
                    }
                }
            });
            if (arr[0] != null) {
                return (Boolean) arr[0];
            } else {
                return false;
            }
        } else {
            if (listener != null) {
                return new Boolean(listener.onRasterTileClicked(clickInfo));
            } else {
                return new Boolean(super.onRasterTileClicked(clickInfo));
            }
        }
    }
}
