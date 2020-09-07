package com.akylas.carto.additions;

import android.os.Handler;
import android.content.Context;
import android.graphics.BitmapFactory;
import android.graphics.Paint;
import android.util.Log;

// import com.carto.layers.VectorLayer;
import com.carto.core.MapPos;
import com.carto.vectorelements.VectorElement;
import com.carto.vectorelements.VectorElementVector;
import com.carto.layers.ClusterElementBuilder;
import com.carto.styles.MarkerStyle;
import com.carto.styles.Style;
import com.carto.styles.BillboardStyle;
import com.carto.styles.PointStyle;
import com.carto.vectorelements.Marker;
import com.carto.vectorelements.Point;
import com.carto.utils.BitmapUtils;
import com.carto.styles.StyleBuilder;
import com.carto.styles.PointStyleBuilder;
import com.carto.styles.MarkerStyleBuilder;
import com.carto.graphics.Bitmap;

import java.util.HashMap;
import java.util.Map;

public class AKClusterElementBuilder extends ClusterElementBuilder {

    public interface Interface {
        VectorElement buildClusterElement(MapPos pos, VectorElementVector nElements);
    }
    Interface inter = null;
    public void setInterface(Interface inter) {
        this.inter = inter;
        this.useNativeBuilder = false;
    }
    Handler mainHandler = null;

    private Map<Integer, Style> markerStyles = new HashMap<>();
    private android.graphics.Bitmap markerBitmap = null;
    private com.carto.graphics.Color markerColor = null;
    private int markerSize = 20;

    private String shape = "marker";
    private final String TAG = "AKClusterElementBuilder";

    boolean useNativeBuilder = true;

    public void setUseNativeBuilder(boolean value) {
        useNativeBuilder = value;
    }

    public void setBitmap(android.graphics.Bitmap value) {
        markerBitmap = value;
    }
    public void setColor(com.carto.graphics.Color value) {
        markerColor = value;
    }
    public void setSize(int value) {
        markerSize = value;
    }
    public void setShape(String value) {
        Log.d(TAG, "setShape " + value);
        shape = value;
    }

    @Override
    public VectorElement buildClusterElement(final MapPos pos, final VectorElementVector elements) {
        if (useNativeBuilder) {
            return nativeBuildClusterElement(pos, elements);
        }
        if (AKMapView.RUN_ON_MAIN_THREAD) {
            final Object[] arr = new Object[1];
            if (mainHandler == null) {
                mainHandler = new Handler(android.os.Looper.getMainLooper());
            }

            SynchronousHandler.postAndWait(mainHandler, new Runnable() {
                @Override
                public void run() {
                    // Log.d("AKCartoAdditions", "buildClusterElement runnable");
                    if (inter != null) {
                        arr[0] = inter.buildClusterElement(pos, elements);
                    } else {
                        arr[0] = AKClusterElementBuilder.super.buildClusterElement(pos, elements);
                    }
                }
            });
            return (VectorElement) arr[0];
        } else {
            if (inter != null) {
                return this.inter.buildClusterElement(pos, elements);
            } else {
                return super.buildClusterElement(pos, elements);
            }
        }
        // Log.d("AKCartoAdditions", "buildClusterElement4: done");
        // Runnable r = new Runnable() {
        // @Override
        // public void run() {
        // Log.d("AKCartoAdditions", "buildClusterElement runnable1 " );
        // synchronized (this) {
        // try {
        // Log.d("AKCartoAdditions", "buildClusterElement runnable2 " );
        // arr[0] = AKClusterElementBuilder.this.buildCluster(pos, nElements);
        // } catch (Exception e) {
        // // if (discardUncaughtJsExceptions) {
        // Log.e("AKCartoAdditions", "Error off currentThread for callJSMethodNative: "
        // + e.getMessage());
        // e.printStackTrace();
        // // } else {
        // throw e;
        // // }
        // } finally {
        // Log.d("AKCartoAdditions", "buildClusterElement runnable done " );
        // arr[1] = Boolean.TRUE;
        // this.notify();
        // }
        // }
        // }
        // };
        // boolean success = mainHandler.post(r);
        // Log.d("AKCartoAdditions", "buildClusterElement2: " + (success ? "1" : "0"));

        // if (success) {
        // synchronized (r) {
        // try {
        // if (arr[1] == null) {
        // Log.d("AKCartoAdditions", "buildClusterElement3: waiting");
        // r.wait();
        // }
        // } catch (InterruptedException e) {
        // Log.e("AKCartoAdditions", "InterruptedException: " + e.getMessage());
        // }
        // }
        // }
        // Log.d("AKCartoAdditions", "buildClusterElement4: done");

    }

    public VectorElement nativeBuildClusterElement(MapPos pos, VectorElementVector elements) {

        // Try to reuse existing marker styles
        Style style = markerStyles.get((int) elements.size());

        if (elements.size() == 1) {
            style = ((Marker) elements.get(0)).getStyle();
        }

        if (style == null) {
            StyleBuilder styleBuilder = null;
            Bitmap cBitmap = null;
            if (markerBitmap != null) {
                android.graphics.Bitmap canvasBitmap = markerBitmap.copy(android.graphics.Bitmap.Config.ARGB_8888, true);
                android.graphics.Canvas canvas = new android.graphics.Canvas(canvasBitmap);

                android.graphics.Paint paint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);

                paint.setTextAlign(Paint.Align.CENTER);
                paint.setTextSize(12);
                paint.setColor(android.graphics.Color.argb(255, 0, 0, 0));

                float x = markerBitmap.getWidth() / 2;
                float y = markerBitmap.getHeight() / 2 - 5;

                canvas.drawText(Integer.toString((int) elements.size()), x, y, paint);
                cBitmap = BitmapUtils.createBitmapFromAndroidBitmap(canvasBitmap);
            }
            if (shape.equals("point")) {
                styleBuilder = new PointStyleBuilder();
                ((PointStyleBuilder)styleBuilder).setSize(markerSize);
                if (cBitmap != null) {
                    ((PointStyleBuilder)styleBuilder).setBitmap(cBitmap);
                }
            } else {
                styleBuilder = new MarkerStyleBuilder();
                ((MarkerStyleBuilder)styleBuilder).setSize(markerSize);
                ((MarkerStyleBuilder)styleBuilder).setPlacementPriority((int) elements.size());
                if (cBitmap != null) {
                    ((MarkerStyleBuilder)styleBuilder).setBitmap(cBitmap);

                }
            }
            

            if (markerColor != null) {
                styleBuilder.setColor(markerColor);
            }
            if (styleBuilder instanceof PointStyleBuilder) {
                style = ((PointStyleBuilder)styleBuilder).buildStyle();
            } else if (styleBuilder instanceof MarkerStyleBuilder) {
                style = ((MarkerStyleBuilder)styleBuilder).buildStyle();
            }
            markerStyles.put((int) elements.size(), style);
        }

        // Create marker for the cluster
        if (style instanceof PointStyle) {
            return new Point(pos, (PointStyle)style); 
        }
        if (style instanceof MarkerStyle) {
            return new Marker(pos, (MarkerStyle)style); 
        }
        return null;
    }
}
