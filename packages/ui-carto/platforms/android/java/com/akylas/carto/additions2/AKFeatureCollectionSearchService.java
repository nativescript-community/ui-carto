package com.akylas.carto.additions2;

import android.os.Handler;
import android.util.Log;

import com.akylas.carto.additions.AKMapView;
import com.akylas.carto.additions.SynchronousHandler;
import com.akylas.carto.additions.FeatureCollectionSearchServiceCallback;
import com.carto.search.FeatureCollectionSearchService;
import com.carto.search.SearchRequest;
import com.carto.projections.Projection;
import com.carto.geometry.FeatureCollection;

import java.io.IOException;

public class AKFeatureCollectionSearchService extends FeatureCollectionSearchService {
    private final String TAG = "AKFeatureCollectionSearchService";


    public AKFeatureCollectionSearchService(Projection projection , FeatureCollection features) {
        super(projection, features);
    }

    static Handler mainHandler = null;

    public void findFeaturesCallback(final SearchRequest request, final FeatureCollectionSearchServiceCallback callback) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                final FeatureCollection results = AKFeatureCollectionSearchService.this.findFeatures(request);
                if (AKMapView.RUN_ON_MAIN_THREAD) {
                    if (mainHandler == null) {
                        mainHandler = new Handler(android.os.Looper.getMainLooper());
                    }
                    mainHandler.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onFindFeatures(results);
                        }
                    });
                } else {
                    callback.onFindFeatures(results);
                }

            }
        }).start();
    }
}
