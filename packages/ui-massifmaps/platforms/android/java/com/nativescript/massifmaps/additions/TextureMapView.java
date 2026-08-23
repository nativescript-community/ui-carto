package com.nativescript.massifmaps.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.massifmaps.ui.MapInteractionInfo;
import com.massifmaps.ui.MapClickInfo;

public class TextureMapView extends com.massifmaps.ui.TextureMapView {
    static final String TAG = "TextureMapView";
    Handler mainHandler = null;
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


    private final com.massifmaps.ui.MapEventListener mapEventListener = new com.massifmaps.ui.MapEventListener() {
        @Override
        public void onMapMoved(int reason) {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapMoved(reason);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapMoved(reason);
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
        public void onMapStable(int reason) {
            if (TextureMapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (TextureMapView.this.listener != null) {
                            TextureMapView.this.listener.onMapStable(reason);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapStable(reason);
                }
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
                            TextureMapView.this.listener.onMapInteraction(interaction, com.massifmaps.ui.MapMoveReason.MAP_MOVE_REASON_GESTURE);
                        }
                    }
                });
            } else {
                if (TextureMapView.this.listener != null) {
                    TextureMapView.this.listener.onMapInteraction(interaction, com.massifmaps.ui.MapMoveReason.MAP_MOVE_REASON_GESTURE);
                }
            }
        }
    };
}
