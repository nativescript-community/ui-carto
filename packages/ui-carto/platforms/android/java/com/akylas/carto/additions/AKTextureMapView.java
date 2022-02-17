package com.akylas.carto.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.carto.ui.MapClickInfo;
import com.carto.ui.MapEventListener;
import com.carto.ui.TextureMapView;

import android.view.MotionEvent;

public class AKTextureMapView extends TextureMapView {
    static final String TAG = "AKTextureMapView";
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

    
    public AKTextureMapView(Context context) {
        super(context);
        this.mainHandler = new Handler(context.getMainLooper());
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
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
            if (AKTextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKTextureMapView.this.listener != null) {
                            AKTextureMapView.this.listener.onMapMoved(userAction);
                        }
                    }
                });
            } else {
                if (AKTextureMapView.this.listener != null) {
                    AKTextureMapView.this.listener.onMapMoved(userAction);
                }
            }
        }

        @Override
        public void onMapIdle() {
            if (AKTextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKTextureMapView.this.listener != null) {
                            AKTextureMapView.this.listener.onMapIdle();
                        }
                    }
                });
            } else {
                if (AKTextureMapView.this.listener != null) {
                    AKTextureMapView.this.listener.onMapIdle();
                }
            }
            
        }

        @Override
        public void onMapStable() {
            if (AKTextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKTextureMapView.this.listener != null) {
                            AKTextureMapView.this.listener.onMapStable(AKTextureMapView.this.userAction);
                        }
                        AKTextureMapView.this.userAction = false;
                    }
                });
            } else {
                if (AKTextureMapView.this.listener != null) {
                    AKTextureMapView.this.listener.onMapStable(AKTextureMapView.this.userAction);
                }
                AKTextureMapView.this.userAction = false;
            }
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            if (AKTextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (AKTextureMapView.this.listener != null) {
                            AKTextureMapView.this.listener.onMapClicked(mapClickInfo);
                        }
                    }
                });
            } else {
                if (AKTextureMapView.this.listener != null) {
                    AKTextureMapView.this.listener.onMapClicked(mapClickInfo);
                }
            }
        }
    };
}
