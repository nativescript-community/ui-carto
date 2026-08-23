package com.nativescript.massifmaps.additions2;

import android.os.Handler;
import android.util.Log;

import com.nativescript.massifmaps.additions.SynchronousHandler;
import com.massifmaps.geometry.Geometry;
import com.massifmaps.layers.VectorElementDragPointStyle;
import com.massifmaps.layers.VectorElementDragResult;
import com.massifmaps.styles.PointStyle;
import com.massifmaps.ui.VectorElementClickInfo;
import com.massifmaps.ui.VectorElementDragInfo;
import com.massifmaps.vectorelements.VectorElement;

public class VectorEditEventListener extends com.massifmaps.layers.VectorEditEventListener {
    Handler mainHandler = null;

    public interface Listener {
        boolean onElementSelect(VectorElement element);

        PointStyle onSelectDragPointStyle(VectorElement element,
                @VectorElementDragPointStyle.Value int dragPointStyle);

        @VectorElementDragResult.Value int onDragEnd(VectorElementDragInfo dragInfo);

        @VectorElementDragResult.Value int onDragMove(VectorElementDragInfo dragInfo);

        @VectorElementDragResult.Value int onDragStart(VectorElementDragInfo dragInfo);

        void onElementDelete(VectorElement element);

        void onElementDeselected(VectorElement element);

        void onElementModify(VectorElement element, Geometry geometry);
    }

    protected Listener listener = null;

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public VectorEditEventListener(Listener listener) {
        super();
        setListener(listener);
    }


    @Override
    public boolean onElementSelect(final VectorElement element) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = new Boolean(VectorEditEventListener.super.onElementSelect(element));
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
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementDelete(element);
                    } else {
                        VectorEditEventListener.super.onElementDelete(element);
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
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementDeselected(element);
                    } else {
                        VectorEditEventListener.super.onElementDeselected(element);
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
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }
            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    if (listener != null) {
                        listener.onElementModify(element, geometry);
                    } else {
                        VectorEditEventListener.super.onElementModify(element, geometry);
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
    public PointStyle onSelectDragPointStyle(final VectorElement element,
            final @VectorElementDragPointStyle.Value int dragPointStyle) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = (VectorEditEventListener.super.onSelectDragPointStyle(element, dragPointStyle));
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
    public @VectorElementDragResult.Value int onDragEnd(final VectorElementDragInfo dragInfo) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = (VectorEditEventListener.super.onDragEnd(dragInfo));
                    }
                }
            });

            return (Integer) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragEnd(dragInfo);
            } else {
                return super.onDragEnd(dragInfo);
            }
        }
    }

    @Override
    public @VectorElementDragResult.Value int onDragMove(final VectorElementDragInfo dragInfo) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = (VectorEditEventListener.super.onDragMove(dragInfo));
                    }
                }
            });

            return (Integer) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragMove(dragInfo);
            } else {
                return super.onDragMove(dragInfo);
            }
        }
    }

    @Override
    public @VectorElementDragResult.Value int onDragStart(final VectorElementDragInfo dragInfo) {
        if (SynchronousHandler.RUN_ON_MAIN_THREAD) {
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
                        arr[0] = (VectorEditEventListener.super.onDragStart(dragInfo));
                    }
                }
            });

            return (Integer) arr[0];
        } else {
            if (listener != null) {
                return listener.onDragStart(dragInfo);
            } else {
                return super.onDragStart(dragInfo);
            }
        }
    }

}
