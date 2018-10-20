package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;
import android.os.Looper;

public class SynchronousHandler {

    private static class NotifyRunnable implements Runnable {
        private final Runnable mRunnable;
        private boolean mFinished = false;

        public NotifyRunnable( final Runnable r) {
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
                    Log.e("SynchronousHandler", "Error off currentThread for callJSMethodNative: " + e.getMessage());
                    e.printStackTrace();
                    // } else {
                    throw e;
                    // }
                } finally {
                    mFinished = true;
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
    public static void postAndWait(final Handler handler, final Runnable r) {
        Log.d("SynchronousHandler", "postAndWait: " + ((handler.getLooper() == Looper.myLooper()) ? "true" : "false"));
        if (handler.getLooper() == Looper.myLooper()) {
            r.run();
        } else {
            synchronized (handler) {
                NotifyRunnable runnable = new NotifyRunnable(r);
                boolean success = handler.post(runnable);
                Log.d("SynchronousHandler", "posted: " + (success ? "true" : "false"));
                if (success) {
                    synchronized (runnable) {
                        try {
                            if (!runnable.isFinished()) {
                                runnable.wait();
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