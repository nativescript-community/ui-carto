package com.akylas.carto.additions;

import android.os.Handler;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Paint;
import android.util.Log;

// import com.carto.layers.VectorLayer;
import com.carto.core.MapPos;
import com.carto.vectorelements.VectorElement;
import com.carto.vectorelements.VectorElementVector;
import com.carto.layers.ClusterElementBuilder;
import com.carto.styles.MarkerStyle;
import com.carto.vectorelements.Marker;
import com.carto.utils.BitmapUtils;
import com.carto.styles.MarkerStyleBuilder;

import java.util.HashMap;
import java.util.Map;

public class AKClusterElementBuilder extends ClusterElementBuilder {
    Handler mainHandler = null;

    private Map<Integer, MarkerStyle> markerStyles = new HashMap<>();
    private android.graphics.Bitmap markerBitmap = null;
    private com.carto.graphics.Color markerColor = null;
    private int markerSize = 20;

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

    public VectorElement buildCluster(MapPos pos, VectorElementVector nElements) {
        return super.buildClusterElement(pos, nElements);
    }

    @Override
    public VectorElement buildClusterElement(final MapPos pos, final VectorElementVector elements) {
        if (useNativeBuilder) {
            return nativeBuildClusterElement(pos, elements);
        }
        final Object[] arr = new Object[1];
        // Log.d("AKCartoAdditions", "buildClusterElement: " + elements.size());
        if (mainHandler == null) {
            mainHandler = new Handler(android.os.Looper.getMainLooper());
        }

        SynchronousHandler.postAndWait(mainHandler, new Runnable() {
            @Override
            public void run() {
                // Log.d("AKCartoAdditions", "buildClusterElement runnable");
                arr[0] = AKClusterElementBuilder.this.buildCluster(pos, elements);
            }
        });
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

        return (VectorElement) arr[0];
    }

    public VectorElement nativeBuildClusterElement(MapPos pos, VectorElementVector elements) {

        // Try to reuse existing marker styles
        MarkerStyle style = markerStyles.get((int) elements.size());

        if (elements.size() == 1) {
            style = ((Marker) elements.get(0)).getStyle();
        }

        if (style == null) {
            MarkerStyleBuilder styleBuilder = new MarkerStyleBuilder();
            if (markerBitmap != null) {
                Bitmap canvasBitmap = markerBitmap.copy(Bitmap.Config.ARGB_8888, true);
                android.graphics.Canvas canvas = new android.graphics.Canvas(canvasBitmap);

                android.graphics.Paint paint = new android.graphics.Paint(android.graphics.Paint.ANTI_ALIAS_FLAG);

                paint.setTextAlign(Paint.Align.CENTER);
                paint.setTextSize(12);
                paint.setColor(android.graphics.Color.argb(255, 0, 0, 0));

                float x = markerBitmap.getWidth() / 2;
                float y = markerBitmap.getHeight() / 2 - 5;

                canvas.drawText(Integer.toString((int) elements.size()), x, y, paint);

                styleBuilder.setBitmap(BitmapUtils.createBitmapFromAndroidBitmap(canvasBitmap));
            }

            styleBuilder.setSize(markerSize);
            styleBuilder.setPlacementPriority((int) elements.size());
            if (markerColor != null) {
                styleBuilder.setColor(markerColor);
            }
            style = styleBuilder.buildStyle();

            markerStyles.put((int) elements.size(), style);
        }

        // Create marker for the cluster
        Marker marker = new Marker(pos, style);
        return marker;
    }
}
