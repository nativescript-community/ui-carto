package com.nativescript.massifmaps.additions;

import android.os.Handler;
import android.util.Log;

import com.massifmaps.ui.VectorTileClickInfo;

public class VectorTileEventListener extends com.massifmaps.layers.VectorTileEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onVectorTileClicked(final VectorTileClickInfo clickInfo);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public VectorTileEventListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public boolean onVectorTileClicked(final VectorTileClickInfo clickInfo) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = new Boolean(VectorTileEventListener.super.onVectorTileClicked(clickInfo));
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
