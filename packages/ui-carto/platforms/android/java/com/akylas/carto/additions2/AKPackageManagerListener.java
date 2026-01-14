package com.akylas.carto.additions2;

import android.os.Handler;

import com.akylas.carto.additions.AKMapView;
import com.akylas.carto.additions.SynchronousHandler;
import com.carto.packagemanager.PackageErrorType;
import com.carto.packagemanager.PackageManagerListener;
import com.carto.packagemanager.PackageStatus;

public class AKPackageManagerListener extends PackageManagerListener {
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

    public AKPackageManagerListener(Listener listener) {
        super();
        setListener(listener);
    }

    @Override
    public void onPackageCancelled(final String id, final int version) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageCancelled(id, version);
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageFailed(id, version, errorType);
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageListFailed();
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageListUpdated();
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageStatusChanged(id, version, status);
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onPackageUpdated(id, version);
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onStyleFailed(styleName);
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
        if (AKMapView.RUN_ON_MAIN_THREAD) {
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
                        AKPackageManagerListener.super.onStyleUpdated(styleName);
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
