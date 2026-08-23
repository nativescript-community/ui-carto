package com.nativescript.massifmaps.api;

import android.os.Handler;
import android.os.Looper;

import com.nativescript.massifmaps.additions.MapView;
import com.nativescript.massifmaps.additions.SynchronousHandler;

/**
 * The surface API's event listener, with the thread hop JavaScript needs.
 *
 * The SDK emits from its render and tile threads, and NativeScript has no JavaScript runtime
 * there - a director calling straight into JS from one of them fails to find a Runtime. So this
 * posts onto the main looper and WAITS, the same SynchronousHandler dance every other listener in
 * this plugin does. Waiting rather than posting is what lets a consuming subscription answer in
 * time, and what keeps the facade's payload alive until the handler has read it.
 *
 * It is a Java class rather than a NativeScript subclass of the SDK's director for exactly that
 * reason: the hop itself must not be JavaScript.
 */
public class EventListener extends com.massifmaps.api.EventListener {

    /** What the JavaScript side implements. Return true to consume, when the subscription may. */
    public interface Listener {
        boolean onEvent(int target, String event, int payload);
    }

    protected Listener listener = null;
    private Handler mainHandler = null;

    public EventListener(Listener listener) {
        super();
        this.listener = listener;
    }

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    @Override
    public boolean onEvent(final int target, final String event, final int payload) {
        final Listener current = listener;
        if (current == null) {
            return false;
        }
        if (!MapView.RUN_ON_MAIN_THREAD) {
            return current.onEvent(target, event, payload);
        }
        if (mainHandler == null) {
            mainHandler = new Handler(Looper.getMainLooper());
        }
        final boolean[] result = new boolean[1];
        SynchronousHandler.postAndWait(mainHandler, new Runnable() {
            @Override
            public void run() {
                result[0] = current.onEvent(target, event, payload);
            }
        });
        return result[0];
    }
}
