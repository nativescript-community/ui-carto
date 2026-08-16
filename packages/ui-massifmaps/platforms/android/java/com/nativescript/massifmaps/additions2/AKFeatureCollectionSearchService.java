package com.nativescript.massifmaps.additions2;

import android.os.Handler;
import android.util.Log;

import com.nativescript.massifmaps.additions.AKMapView;
import com.nativescript.massifmaps.additions.SynchronousHandler;
import com.nativescript.massifmaps.additions.FeatureCollectionSearchServiceCallback;
import com.massifmaps.search.FeatureCollectionSearchService;
import com.massifmaps.search.SearchRequest;
import com.massifmaps.projections.Projection;
import com.massifmaps.geometry.FeatureCollection;

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
