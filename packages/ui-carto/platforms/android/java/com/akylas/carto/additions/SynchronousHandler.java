package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;
import android.os.Looper;

public class SynchronousHandler {

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