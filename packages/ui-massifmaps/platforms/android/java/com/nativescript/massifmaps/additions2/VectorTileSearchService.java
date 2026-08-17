package com.nativescript.massifmaps.additions2;

import android.os.Handler;
import android.util.Log;

import com.nativescript.massifmaps.additions.AKMapView;
import com.nativescript.massifmaps.additions.SynchronousHandler;
import com.massifmaps.search.VectorTileSearchService;
import com.massifmaps.search.SearchRequest;
import com.massifmaps.datasources.TileDataSource;
import com.massifmaps.geometry.VectorTileFeatureCollection;
import com.massifmaps.vectortiles.VectorTileDecoder;

import java.io.IOException;

public class AKVectorTileSearchService extends VectorTileSearchService {
    private final String TAG = "AKVectorTileSearchService";


    public AKVectorTileSearchService(TileDataSource source, VectorTileDecoder decoder) {
        super(source, decoder);
    }

    static Handler mainHandler = null;

    public void findFeaturesCallback(final SearchRequest request, final VectorTileSearchServiceCallback callback) {
        final AKVectorTileSearchService that = this;
        new Thread(new Runnable() {
            @Override
            public void run() {
                final VectorTileFeatureCollection results = that.findFeatures(request);
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
