package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.VectorElementEventListener;
import com.carto.ui.VectorElementClickInfo;

public class AKVectorElementEventListener extends VectorElementEventListener {
    Handler mainHandler = null;

    public boolean onClicked(VectorElementClickInfo clickInfo) {
        return super.onVectorElementClicked(clickInfo);
    }

    @Override
    public boolean onVectorElementClicked(final VectorElementClickInfo clickInfo) {
        final Object[] arr = new Object[1];
        if (mainHandler == null) {
            mainHandler = new Handler(android.os.Looper.getMainLooper());
        }
        SynchronousHandler.postAndWait(mainHandler, new Runnable() {
            @Override
            public void run() {
                arr[0] = new Boolean(AKVectorElementEventListener.this.onClicked(clickInfo));
            }
        });

        return (Boolean)arr[0];
    }
}
