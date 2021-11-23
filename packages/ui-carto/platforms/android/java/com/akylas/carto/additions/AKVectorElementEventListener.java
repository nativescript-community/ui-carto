package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.VectorElementEventListener;
import com.carto.ui.VectorElementClickInfo;

public class AKVectorElementEventListener extends VectorElementEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onVectorElementClicked(final VectorElementClickInfo clickInfo);
    }
    protected Listener listener = null;
    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public AKVectorElementEventListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public boolean onVectorElementClicked(final VectorElementClickInfo clickInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = new Boolean(listener.onVectorElementClicked(clickInfo));
                    } else {
                        arr[0] = new Boolean(AKVectorElementEventListener.super.onVectorElementClicked(clickInfo));
                    }
                }
            });

            return (Boolean)arr[0];
        } else {
            if (listener != null) {
                return new Boolean(listener.onVectorElementClicked(clickInfo));
            } else {
                return new Boolean(super.onVectorElementClicked(clickInfo));
            }
        }
    }
}
