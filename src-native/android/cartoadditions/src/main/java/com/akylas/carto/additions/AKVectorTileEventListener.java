package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.VectorTileEventListener;
import com.carto.ui.VectorTileClickInfo;

public class AKVectorTileEventListener extends VectorTileEventListener {
    Handler mainHandler = null;

    public boolean onClicked(VectorTileClickInfo clickInfo) {
        return super.onVectorTileClicked(clickInfo);
    }

    @Override
    public boolean onVectorTileClicked(final VectorTileClickInfo clickInfo) {
        final Object[] arr = new Object[1];
        if (mainHandler == null) {
            mainHandler = new Handler(android.os.Looper.getMainLooper());
        }
        SynchronousHandler.postAndWait(mainHandler, new Runnable() {
            @Override
            public void run() {
                arr[0] = new Boolean(AKVectorTileEventListener.this.onClicked(clickInfo));
            }
        });
        return (Boolean)arr[0];
    }
}
