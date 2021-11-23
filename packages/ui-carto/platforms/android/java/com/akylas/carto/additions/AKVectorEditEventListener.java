package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.geometry.Geometry;
import com.carto.layers.VectorEditEventListener;
import com.carto.layers.VectorElementDragPointStyle;
import com.carto.layers.VectorElementDragResult;
import com.carto.styles.PointStyle;
import com.carto.ui.VectorElementClickInfo;
import com.carto.ui.VectorElementDragInfo;
import com.carto.vectorelements.VectorElement;

public class AKVectorEditEventListener extends VectorEditEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onElementSelect(VectorElement element);

        PointStyle onSelectDragPointStyle(VectorElement element, VectorElementDragPointStyle dragPointStyle);

        VectorElementDragResult onDragEnd(VectorElementDragInfo dragInfo);

        VectorElementDragResult onDragMove(VectorElementDragInfo dragInfo);

        VectorElementDragResult onDragStart(VectorElementDragInfo dragInfo);

        void onElementDelete(VectorElement element);

        void onElementDeselected(VectorElement element);

        void onElementModify(VectorElement element, Geometry geometry);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public AKVectorEditEventListener(Listener listener) {
        super();
        setListener(listener);
    }


    @Override
    public boolean onElementSelect(final VectorElement element) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = new Boolean(listener.onElementSelect(element));
                    } else {
                        arr[0] = new Boolean(AKVectorEditEventListener.super.onElementSelect(element));
                    }
                }
            });

            return (Boolean) arr[0];
        } else {
            if (listener != null) {
                return new Boolean(listener.onElementSelect(element));
            } else {
                return new Boolean(super.onElementSelect(element));
            }
        }
    }

    @Override
    public void onElementDelete(final VectorElement element) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementDelete(element);
                    } else {
                        AKVectorEditEventListener.super.onElementDelete(element);
                    }
                }
            });
        } else {
            if (listener != null) {
                listener.onElementDelete(element);
            } else {
                super.onElementDelete(element);
            }
        }
    }

    @Override
    public void onElementDeselected(final VectorElement element) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementDeselected(element);
                    } else {
                        AKVectorEditEventListener.super.onElementDeselected(element);
                    }
                }
            });
        } else {
            if (listener != null) {
                listener.onElementDeselected(element);
            } else {
                super.onElementDeselected(element);
            }
        }
    }

    @Override
    public void onElementModify(final VectorElement element, final Geometry geometry) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementModify(element, geometry);
                    } else {
                        AKVectorEditEventListener.super.onElementModify(element, geometry);
                    }
                }
            });
        } else {
            if (listener != null) {
                listener.onElementModify(element, geometry);
            } else {
                super.onElementModify(element, geometry);
            }
        }
    }

    @Override
    public PointStyle onSelectDragPointStyle(final VectorElement element, final VectorElementDragPointStyle dragPointStyle) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = (listener.onSelectDragPointStyle(element, dragPointStyle));
                    } else {
                        arr[0] = (AKVectorEditEventListener.super.onSelectDragPointStyle(element, dragPointStyle));
                    }
                }
            });

            return (PointStyle) arr[0];
        } else {
            if (listener != null) {
                return listener.onSelectDragPointStyle(element, dragPointStyle);
            } else {
                return super.onSelectDragPointStyle(element, dragPointStyle);
            }
        }
    }

    @Override
    public VectorElementDragResult onDragEnd(final VectorElementDragInfo dragInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = (listener.onDragEnd(dragInfo));
                    } else {
                        arr[0] = (AKVectorEditEventListener.super.onDragEnd(dragInfo));
                    }
                }
            });

            return (VectorElementDragResult) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragEnd(dragInfo);
            } else {
                return super.onDragEnd(dragInfo);
            }
        }
    }

    @Override
    public VectorElementDragResult onDragMove(final VectorElementDragInfo dragInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = (listener.onDragMove(dragInfo));
                    } else {
                        arr[0] = (AKVectorEditEventListener.super.onDragMove(dragInfo));
                    }
                }
            });

            return (VectorElementDragResult) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragMove(dragInfo);
            } else {
                return super.onDragMove(dragInfo);
            }
        }
    }

    @Override
    public VectorElementDragResult onDragStart(final VectorElementDragInfo dragInfo) {
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        arr[0] = (listener.onDragStart(dragInfo));
                    } else {
                        arr[0] = (AKVectorEditEventListener.super.onDragStart(dragInfo));
                    }
                }
            });

            return (VectorElementDragResult) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragStart(dragInfo);
            } else {
                return super.onDragStart(dragInfo);
            }
        }
    }

}
