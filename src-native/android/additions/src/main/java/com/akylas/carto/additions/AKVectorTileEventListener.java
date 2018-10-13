package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.layers.VectorLayer;
import com.carto.layers.VectorTileEventListener;
import com.carto.ui.VectorTileClickInfo;


public class AKVectorTileEventListener extends VectorTileEventListener {
    Handler mainHandler = new Handler(android.os.Looper.getMainLooper());
    VectorLayer layer;

    public class WaitRunnable implements Runnable{
        public Boolean result  = false;
        public Boolean needWait  = true;
        public void run() {
            //Code
        }

        protected void setResult(Boolean result) {
            this.result = result;
            this.needWait = false;
            synchronized (this) {
                this.notify();
            }
        }
    }

    public boolean onClicked(VectorTileClickInfo clickInfo) {
        return super.onVectorTileClicked(clickInfo);
    }

    @Override
    public boolean onVectorTileClicked(final VectorTileClickInfo clickInfo)
    {
        
        WaitRunnable myRunnable = new WaitRunnable() {
            @Override
            public void run() {
                this.setResult(AKVectorTileEventListener.this.onClicked(clickInfo));
            }
        };
        mainHandler.post(myRunnable);

        while(myRunnable.needWait){
            synchronized (myRunnable) {
                try {
                    myRunnable.wait();
                } catch (InterruptedException e) {
                    // handle it somehow
                }
            }
        }

        return myRunnable.result;
    }
}
