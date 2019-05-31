package com.akylas.carto.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.carto.ui.MapClickInfo;
import com.carto.ui.MapEventListener;
import com.carto.ui.MapView;

import android.view.MotionEvent;

public class AKMapView extends MapView {
    static final String TAG = "AKMapView";
    Handler mainHandler = null;
    public boolean userAction = false;

    
    public AKMapView(Context context) {
        super(context);
        this.mainHandler = new Handler(context.getMainLooper());
        this.setMapEventListener(mapEventListener);
    }

    @Override
    public  boolean onTouchEvent(MotionEvent event) {

        boolean clickable = isClickable() || isLongClickable();
        if (!isEnabled() || !clickable) {
            return clickable;
        }

        switch (event.getActionMasked()) {
            case MotionEvent.ACTION_POINTER_DOWN:
            case MotionEvent.ACTION_DOWN:
                this.userAction = false;
                break;
            case MotionEvent.ACTION_MOVE:
                this.userAction = true;
                break;
            case MotionEvent.ACTION_CANCEL:
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_POINTER_UP:
                // this.userAction = false;
                break;
        }
        return super.onTouchEvent(event);
    }

    private final MapEventListener mapEventListener = new MapEventListener() {
        @Override
        public void onMapMoved() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapMoved(userAction);
                }
            });
        }

        @Override
        public void onMapIdle() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapIdle();
                }
            });
        }

        @Override
        public void onMapStable() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapStable(AKMapView.this.userAction);
                    AKMapView.this.userAction = false;
                }
            });
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapClicked(mapClickInfo);
                }
            });
        }
    };
    public void onMapMoved(boolean userAction) {

    }

    public void onMapIdle() {

    }

    public void onMapStable(boolean userAction) {

    }

    public void onMapClicked(MapClickInfo mapClickInfo) {
    }
}
