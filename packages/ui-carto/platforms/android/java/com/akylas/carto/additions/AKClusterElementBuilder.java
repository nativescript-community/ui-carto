package com.akylas.carto.additions;

import android.os.Handler;
import android.content.Context;
import android.graphics.BitmapFactory;
import android.graphics.Paint;
import android.graphics.Color;
import android.graphics.Rect;
import android.util.Log;

// import com.carto.layers.VectorLayer;
import com.carto.core.VariantArrayBuilder;
import com.carto.core.MapPos;
import com.carto.core.MapBounds;
import com.carto.vectorelements.VectorElement;
import com.carto.vectorelements.VectorElementVector;
import com.carto.layers.ClusterElementBuilder;
import com.carto.styles.MarkerStyle;
import com.carto.styles.Style;
import com.carto.styles.BillboardStyle;
import com.carto.styles.PointStyle;
import com.carto.vectorelements.Marker;
import com.carto.vectorelements.Point;
import com.carto.vectorelements.VectorElement;
import com.carto.utils.BitmapUtils;
import com.carto.styles.StyleBuilder;
import com.carto.styles.PointStyleBuilder;
import com.carto.styles.MarkerStyleBuilder;
import com.carto.graphics.Bitmap;
import android.graphics.Typeface;
import com.carto.geometry.PointGeometryVector;
import com.carto.geometry.PointGeometry;
import com.carto.geometry.MultiPointGeometry;

import java.util.HashMap;
import java.util.Map;

public class AKClusterElementBuilder extends ClusterElementBuilder {
    static final Rect tempRect = new Rect();
    static final Rect tempRect2 = new Rect();
    static final Paint paint = new Paint(Paint.ANTI_ALIAS_FLAG);
    public interface Interface {
        VectorElement buildClusterElement(MapPos pos, VectorElementVector nElements);
    }

    public AKClusterElementBuilder(float screenScale) {
        super();
        this.screenScale = screenScale;
    }
    private float screenScale;
    Interface inter = null;
    public void setInterface(Interface inter) {
        this.inter = inter;
        this.useNativeBuilder = false;
    }
    Handler mainHandler = null;

    private Map<Integer, Style> markerStyles = new HashMap<>();
    private android.graphics.Bitmap markerBitmap = null;
    private com.carto.graphics.Color markerColor = null;
    private com.carto.graphics.Color textColor = null;
    private int markerSize = 20;
    private float textSize = 12;
    private boolean setBbox = false;
    private Typeface typeface = null;

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
        shape = value;
    }

    public void setFont(Typeface value) {
        typeface = value;
    }
    public void setTextSize(float value) {
        textSize = value;
    }
    public void setTextColor(com.carto.graphics.Color value) {
        textColor = value;
    }
    public void setBbox(boolean value) {
        setBbox = value;
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
    }

    public VectorElement nativeBuildClusterElement(MapPos pos, VectorElementVector elements) {

        // Try to reuse existing marker styles
        int nbElements = (int) elements.size();
        Style style = markerStyles.get(nbElements);
        if (nbElements == 1) {
            if (elements.get(0) instanceof Marker) {
                style = ((Marker) elements.get(0)).getStyle();
            } else if (elements.get(0) instanceof  Point) {
                style = ((Point) elements.get(0)).getStyle();
            }
        }

        if (style == null) {
            StyleBuilder styleBuilder = null;
            Bitmap cBitmap = null;
            if (markerBitmap != null || textColor != null) {
                int size = (int)(markerSize * screenScale);
                android.graphics.Bitmap canvasBitmap = android.graphics.Bitmap.createBitmap(size, size, android.graphics.Bitmap.Config.ARGB_8888);
                android.graphics.Canvas canvas = new android.graphics.Canvas(canvasBitmap);
                canvas.scale(screenScale, screenScale);
                Paint paint = AKClusterElementBuilder.paint;
                Rect bounds = AKClusterElementBuilder.tempRect;
                if (markerBitmap != null) {
                    bounds.set(0,0, markerBitmap.getWidth(), markerBitmap.getHeight());
                    Rect dst = AKClusterElementBuilder.tempRect2;
                    dst.set(0,0, markerSize, markerSize);
                    canvas.drawBitmap(markerBitmap, bounds, dst, paint);
                } else {
                    paint.setColor(markerColor.getARGB());
                    canvas.drawCircle(markerSize / 2, markerSize / 2, markerSize / 2, paint);
                }

                paint.setTextAlign(Paint.Align.CENTER);
                paint.setTextSize(textSize);
                if (typeface != null) {
                    paint.setTypeface(typeface);
                }
                String text = Integer.toString(nbElements);
                paint.getTextBounds(text, 0, text.length(), bounds);

                if (textColor != null) {
                    paint.setColor(textColor.getARGB());
                } else {
                    paint.setColor(Color.WHITE);
                }

                float x = markerSize / 2;
                float y = markerSize / 2 + bounds.height()/2;

                canvas.drawText(text, x, y, paint);
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
                ((MarkerStyleBuilder)styleBuilder).setPlacementPriority(nbElements);
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
            markerStyles.put(nbElements, style);
        }

        // Create marker for the cluster
        VectorElement marker = null;
        if (style instanceof PointStyle) {
            marker = new Point(pos, (PointStyle)style); 
        }
        if (style instanceof MarkerStyle) {
            marker = new Marker(pos, (MarkerStyle)style); 
        }
        if (marker != null) {
            marker.setMetaDataElement("elements", new com.carto.core.Variant((long)nbElements));
            if (setBbox) {
                PointGeometryVector vector = new PointGeometryVector();
                for (int i = 0; i<nbElements; i++) {
                    vector.add((PointGeometry)elements.get(i).getGeometry());
                }
                MapBounds mapBounds = new MultiPointGeometry(vector).getBounds();
                VariantArrayBuilder builder = new VariantArrayBuilder();
                builder.addDouble(mapBounds.getMin().getX());
                builder.addDouble(mapBounds.getMin().getY());
                builder.addDouble(mapBounds.getMax().getX());
                builder.addDouble(mapBounds.getMax().getY());
                marker.setMetaDataElement("bbox", builder.buildVariant());
            }
            
        }

        return marker;
    }
}
