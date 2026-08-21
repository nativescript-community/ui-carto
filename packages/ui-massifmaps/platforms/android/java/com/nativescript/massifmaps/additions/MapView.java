package com.nativescript.massifmaps.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.massifmaps.ui.MapInteractionInfo;
import com.massifmaps.ui.MapClickInfo;
import android.view.MotionEvent;

public class MapView extends com.massifmaps.ui.MapView {
    static final String TAG = "MapView";
    Handler mainHandler = null;
    public boolean userAction = false;
    private MapEventListener listener = null;

    static public boolean RUN_ON_MAIN_THREAD = true;

    static public void setRunOnMainThread(boolean value) {
        RUN_ON_MAIN_THREAD = value;
    }

    public void setMapEventListener(MapEventListener listener) {
        this.listener = listener;
        if (listener != null) {
            super.setMapEventListener(mapEventListener);
        } else {
            super.setMapEventListener(null);
        }
    }

    
    public MapView(Context context) {
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

    private final com.massifmaps.ui.MapEventListener mapEventListener = new com.massifmaps.ui.MapEventListener() {
        @Override
        public void onMapMoved() {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapMoved(userAction);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapMoved(userAction);
                }
            }
        }

        @Override
        public void onMapIdle() {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapIdle();
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapIdle();
                }
            }
            
        }

        @Override
        public void onMapStable() {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapStable(MapView.this.userAction);
                        }
                        MapView.this.userAction = false;
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapStable(MapView.this.userAction);
                }
                MapView.this.userAction = false;
            }
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapClicked(mapClickInfo);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapClicked(mapClickInfo);
                }
            }
        }

        @Override
        public void onMapInteraction(final MapInteractionInfo interaction) {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapInteraction(interaction, MapView.this.userAction);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapInteraction(interaction, MapView.this.userAction);
                }
            }
        }
    };
}
