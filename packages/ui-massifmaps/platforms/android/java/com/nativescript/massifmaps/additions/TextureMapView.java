package com.nativescript.massifmaps.additions;

import android.content.Context;

public class TextureMapView extends com.massifmaps.ui.TextureMapView {
    static final String TAG = "TextureMapView";

    // Still load-bearing, and now for the surface API's listener rather than this class':
    // com.nativescript.massifmaps.api.EventListener reads it, and hops to the main looper and
    // WAITS unless it is false. Every other listener in the plugin reads it too.
    static public boolean RUN_ON_MAIN_THREAD = true;

    static public void setRunOnMainThread(boolean value) {
        RUN_ON_MAIN_THREAD = value;
    }

    
    public TextureMapView(Context context) {
        super(context);
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

}
