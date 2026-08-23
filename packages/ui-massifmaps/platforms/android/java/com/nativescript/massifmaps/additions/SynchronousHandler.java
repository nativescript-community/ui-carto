package com.nativescript.massifmaps.additions;

import android.os.Handler;
import android.util.Log;
import android.os.Looper;

public class SynchronousHandler {

    /**
     * Whether the plugin's listeners hop to the main thread and WAIT before calling into
     * JavaScript.
     *
     * It lives here, next to the hop, rather than on a map view: the SDK emits from its render,
     * tile and routing threads, where NativeScript has no runtime at all, and every listener in
     * this plugin - map events, routing, geocoding, search, hillshade, tile downloads - has the
     * same problem whether or not the surface API is in play. It is plugin policy, so it does not
     * belong on the SDK's MapView either.
     *
     * Waiting rather than posting is what lets a consuming callback answer in time, and what
     * keeps a facade payload alive until the handler has read it.
     */
    public static boolean RUN_ON_MAIN_THREAD = true;

    public static void setRunOnMainThread(boolean value) {
        RUN_ON_MAIN_THREAD = value;
    }

    /** The whole pattern in one call: hop and wait when asked to, otherwise run here. */
    public static void run(final Handler handler, final Runnable r) {
        if (RUN_ON_MAIN_THREAD) {
            postAndWait(handler, r);
        } else {
            r.run();
        }
    }

    private static class NotifyRunnable implements Runnable {
        private final Runnable mRunnable;
        private boolean mFinished = false;

        public NotifyRunnable(final Runnable r) {
            mRunnable = r;
        }

        public boolean isFinished() {
            return mFinished;
        }

        @Override
        public void run() {
            synchronized (this) {
                try {
                    mRunnable.run();
                } catch (Exception e) {
                    // if (discardUncaughtJsExceptions) {
                    e.printStackTrace();
                    // } else {
                    throw e;
                    // }
                } finally {
                    mFinished = true;
                    runningTasks -= 1;
                    this.notify();
                }
            }
        }
    }

    /**
     * Posts a runnable on a handler's thread and waits until it has finished
     * running.
     *
     * The handler may be on the same or a different thread than the one calling
     * this method.
     *
     */

    static int runningTasks = 0;

    public static void postAndWait(final Handler handler, final Runnable r) {
        // Log.d("SynchronousHandler", "postAndWait: " + ((handler.getLooper() == Looper.myLooper()) ? "true" : "false") + " " + runningTasks);
        if (handler.getLooper() == Looper.myLooper()) {
            r.run();
        } else {
            runningTasks += 1;
            synchronized (handler) {
                NotifyRunnable runnable = new NotifyRunnable(r);
                boolean success = handler.post(runnable);
                // Log.d("SynchronousHandler", "posted: " + (success ? "true" : "false"));
                if (success) {
                    synchronized (runnable) {
                        try {
                            if (!runnable.isFinished()) {
                                runnable.wait(300);
                            }
                        } catch (InterruptedException is) {
                            // ignore
                            Log.e("SynchronousHandler", is.getMessage());
                        }
                    }
                }

            }
        }
    }
}