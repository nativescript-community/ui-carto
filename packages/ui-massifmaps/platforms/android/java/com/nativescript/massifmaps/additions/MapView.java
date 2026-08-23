package com.nativescript.massifmaps.additions;

import android.content.Context;
import android.os.Handler;
import android.util.Log;

import com.massifmaps.ui.MapInteractionInfo;
import com.massifmaps.ui.MapClickInfo;

public class MapView extends com.massifmaps.ui.MapView {
    static final String TAG = "MapView";
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


    private final com.massifmaps.ui.MapEventListener mapEventListener = new com.massifmaps.ui.MapEventListener() {
        @Override
        public void onMapMoved(int reason) {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapMoved(reason);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapMoved(reason);
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
        public void onMapStable(int reason) {
            if (MapView.RUN_ON_MAIN_THREAD) {
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        if (MapView.this.listener != null) {
                            MapView.this.listener.onMapStable(reason);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapStable(reason);
                }
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
                            MapView.this.listener.onMapInteraction(interaction, com.massifmaps.ui.MapMoveReason.MAP_MOVE_REASON_GESTURE);
                        }
                    }
                });
            } else {
                if (MapView.this.listener != null) {
                    MapView.this.listener.onMapInteraction(interaction, com.massifmaps.ui.MapMoveReason.MAP_MOVE_REASON_GESTURE);
                }
            }
        }
    };
}
