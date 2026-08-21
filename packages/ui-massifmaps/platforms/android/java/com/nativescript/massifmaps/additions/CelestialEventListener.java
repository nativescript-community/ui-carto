// SCAFFOLD - generated starting point, review before use.
package com.nativescript.massifmaps.additions;

import android.os.Handler;

import com.massifmaps.celestial.CelestialObject;
import com.massifmaps.ui.ClickInfo;

public class CelestialEventListener extends com.massifmaps.layers.CelestialEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onCelestialObjectClicked(final ClickInfo arg0, final CelestialObject arg1);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public CelestialEventListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public boolean onCelestialObjectClicked(final ClickInfo arg0, final CelestialObject arg1) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            final Object[] arr = new Object[1];
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = listener.onCelestialObjectClicked(arg0, arg1);
                    } else {
                        arr[0] = CelestialEventListener.super.onCelestialObjectClicked(arg0, arg1);
                    }
                }
            });
            return arr[0] != null ? (Boolean) arr[0] : false;
        } else {
            if (listener != null) {
                return listener.onCelestialObjectClicked(arg0, arg1);
            } else {
                return super.onCelestialObjectClicked(arg0, arg1);
            }
        }
    }
}
