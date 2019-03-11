package com.akylas.carto.additions;

import android.content.Context;
import android.os.Handler;

import com.carto.ui.MapClickInfo;
import com.carto.ui.MapEventListener;
import com.carto.ui.MapView;

public class AKMapView extends MapView {
    Handler mainHandler = null;
    public AKMapView(Context context) {
        super(context);
        this.mainHandler = new Handler(context.getMainLooper());
        this.setMapEventListener(mapEventListener);
    }

    private final MapEventListener mapEventListener = new MapEventListener() {
        @Override
        public void onMapMoved() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapMoved();
                }
            });
            //            AKMapView.this.onMapMoved();
        }

        @Override
        public void onMapIdle() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapIdle();
                }
            });
//            AKMapView.this.onMapIdle();
        }

        @Override
        public void onMapStable() {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapStable();
                }
            });
//            AKMapView.this.onMapStable();
        }

        @Override
        public void onMapClicked(final MapClickInfo mapClickInfo) {
            mainHandler.post(new Runnable() {
                @Override
                public void run() {
                    AKMapView.this.onMapClicked(mapClickInfo);
                }
            });
//            AKMapView.this.onMapClicked(mapClickInfo);
        }
    };

    public void onMapMoved() {

    }

    public void onMapIdle() {

    }

    public void onMapStable() {

    }

    public void onMapClicked(MapClickInfo mapClickInfo) {
    }
}
