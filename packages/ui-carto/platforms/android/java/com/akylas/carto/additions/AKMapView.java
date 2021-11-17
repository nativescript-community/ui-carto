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
    private AKMapEventListener listener = null;

    static public boolean RUN_ON_MAIN_THREAD = true;

    static public void setRunOnMainThread(boolean value) {
        RUN_ON_MAIN_THREAD = value;
    }

    public void setMapEventListener(AKMapEventListener listener) {
        this.listener = listener;
        if (listener != null) {
            super.setMapEventListener(mapEventListener);
        } else {
            super.setMapEventListener(null);
        }
    }

    
    public AKMapView(Context context) {
        super(context);
        this.mainHandler = new Handler(context.getMainLooper());
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
            if (AKMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKMapView.this.listener != null) {
                            AKMapView.this.listener.onMapMoved(userAction);
                        }
                    }
                });
            } else {
                if (AKMapView.this.listener != null) {
                    AKMapView.this.listener.onMapMoved(userAction);
                }
            }
        }

        @Override
        public void onMapIdle() {
            if (AKMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKMapView.this.listener != null) {
                            AKMapView.this.listener.onMapIdle();
                        }
                    }
                });
            } else {
                if (AKMapView.this.listener != null) {
                    AKMapView.this.listener.onMapIdle();
                }
            }
            
        }

        @Override
        public void onMapStable() {
            if (AKMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKMapView.this.listener != null) {
                            AKMapView.this.listener.onMapStable(AKMapView.this.userAction);
                        }
                        AKMapView.this.userAction = false;
                    }
                });
            } else {
                if (AKMapView.this.listener != null) {
                    AKMapView.this.listener.onMapStable(AKMapView.this.userAction);
                }
                AKMapView.this.userAction = false;
            }
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            if (AKMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKMapView.this.listener != null) {
                            AKMapView.this.listener.onMapClicked(mapClickInfo);
                        }
                    }
                });
            } else {
                if (AKMapView.this.listener != null) {
                    AKMapView.this.listener.onMapClicked(mapClickInfo);
                }
            }
        }
    };
}
