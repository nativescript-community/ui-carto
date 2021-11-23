package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.VectorTileEventListener;
import com.carto.ui.VectorTileClickInfo;

public class AKVectorTileEventListener extends VectorTileEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onVectorTileClicked(final VectorTileClickInfo clickInfo);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public AKVectorTileEventListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public boolean onVectorTileClicked(final VectorTileClickInfo clickInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = new Boolean(listener.onVectorTileClicked(clickInfo));
                    } else {
                        arr[0] = new Boolean(AKVectorTileEventListener.super.onVectorTileClicked(clickInfo));
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
                return new Boolean(listener.onVectorTileClicked(clickInfo));
            } else {
                return new Boolean(super.onVectorTileClicked(clickInfo));
            }
        }
    }
}
