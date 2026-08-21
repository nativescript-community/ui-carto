package com.nativescript.massifmaps.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.massifmaps.ui.MapInteractionInfo;
import com.massifmaps.ui.MapClickInfo;
import android.view.MotionEvent;

public class TextureMapView extends com.massifmaps.ui.TextureMapView {
    static final String TAG = "TextureMapView";
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

    
    public TextureMapView(Context context) {
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
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapMoved(userAction);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapMoved(userAction);
                }
            }
        }

        @Override
        public void onMapIdle() {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapIdle();
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapIdle();
                }
            }
            
        }

        @Override
        public void onMapStable() {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapStable(TextureMapView.this.userAction);
                        }
                        TextureMapView.this.userAction = false;
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapStable(TextureMapView.this.userAction);
                }
                TextureMapView.this.userAction = false;
            }
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapClicked(mapClickInfo);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapClicked(mapClickInfo);
                }
            }
        }
        @Override
        public void onMapInteraction(final MapInteractionInfo interaction) {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapInteraction(interaction, TextureMapView.this.userAction);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapInteraction(interaction, TextureMapView.this.userAction);
                }
            }
        }
    };
}
