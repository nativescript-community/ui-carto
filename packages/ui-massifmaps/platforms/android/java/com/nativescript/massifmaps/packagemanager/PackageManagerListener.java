package com.nativescript.massifmaps.packagemanager;

import android.os.Handler;

import com.nativescript.massifmaps.additions.MapView;
import com.nativescript.massifmaps.additions.SynchronousHandler;
import com.massifmaps.packagemanager.PackageErrorType;
import com.massifmaps.packagemanager.PackageStatus;

public class PackageManagerListener extends com.massifmaps.packagemanager.PackageManagerListener {
    Handler mainHandler = null;

    public interface Listener {
        void onPackageCancelled(String id, int version);

        void onPackageFailed(String id, int version, PackageErrorType errorType);

        void onPackageListFailed();

        void onPackageListUpdated();

        void onPackageStatusChanged(String id, int version, PackageStatus status);

        void onPackageUpdated(String id, int version);

        void onStyleFailed(String styleName);

        void onStyleUpdated(String styleName);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public PackageManagerListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public void onPackageCancelled(final String id, final int version) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageCancelled(id, version);
                    } else {
                        PackageManagerListener.super.onPackageCancelled(id, version);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageCancelled(id, version);
            } else {
                super.onPackageCancelled(id, version);
            }
        }
    }

    @Override
    public void onPackageFailed(final String id, final int version, final PackageErrorType errorType) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageFailed(id, version, errorType);
                    } else {
                        PackageManagerListener.super.onPackageFailed(id, version, errorType);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageFailed(id, version, errorType);
            } else {
                super.onPackageFailed(id, version, errorType);
            }
        }
    }

    @Override
    public void onPackageListFailed() {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageListFailed();
                    } else {
                        PackageManagerListener.super.onPackageListFailed();
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageListFailed();
            } else {
                super.onPackageListFailed();
            }
        }
    }

    @Override
    public void onPackageListUpdated() {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageListUpdated();
                    } else {
                        PackageManagerListener.super.onPackageListUpdated();
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageListUpdated();
            } else {
                super.onPackageListUpdated();
            }
        }
    }

    @Override
    public void onPackageStatusChanged(final String id, final int version, final PackageStatus status) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageStatusChanged(id, version, status);
                    } else {
                        PackageManagerListener.super.onPackageStatusChanged(id, version, status);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageStatusChanged(id, version, status);
            } else {
                super.onPackageStatusChanged(id, version, status);
            }
        }
    }

    @Override
    public void onPackageUpdated(final String id, final int version) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onPackageUpdated(id, version);
                    } else {
                        PackageManagerListener.super.onPackageUpdated(id, version);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onPackageUpdated(id, version);
            } else {
                super.onPackageUpdated(id, version);
            }
        }
    }

    @Override
    public void onStyleFailed(final String styleName) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onStyleFailed(styleName);
                    } else {
                        PackageManagerListener.super.onStyleFailed(styleName);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onStyleFailed(styleName);
            } else {
                super.onStyleFailed(styleName);
            }
        }
    }

    @Override
    public void onStyleUpdated(final String styleName) {
        if (MapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onStyleUpdated(styleName);
                    } else {
                        PackageManagerListener.super.onStyleUpdated(styleName);
                    }
                }
            });

        } else {
            if (listener != null) {
                listener.onStyleUpdated(styleName);
            } else {
                super.onStyleUpdated(styleName);
            }
        }
    }
}
