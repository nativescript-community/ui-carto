package com.akylas.carto.additions;

import android.os.Handler;

import com.carto.graphics.Bitmap;

public class RendererCaptureListener extends com.carto.renderers.RendererCaptureListener {
    Handler mainHandler = null;
    public interface Listener {
        void onMapRendered(Bitmap bitmap);
    }
    Listener listener = null;
    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public RendererCaptureListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public void onMapRendered(final Bitmap bitmap) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onMapRendered(bitmap);
                    } else {
                        RendererCaptureListener.super.onMapRendered(bitmap);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onMapRendered(bitmap);
            } else {
                super.onMapRendered(bitmap);
            }
        }
    }
}
