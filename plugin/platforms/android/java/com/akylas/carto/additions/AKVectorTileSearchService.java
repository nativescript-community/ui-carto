package com.akylas.carto.additions;

import android.os.Handler;
import android.util.Log;

import com.carto.search.VectorTileSearchService;
import com.carto.search.SearchRequest;
import com.carto.datasources.TileDataSource;
import com.carto.geometry.VectorTileFeatureCollection;
import com.carto.vectortiles.VectorTileDecoder;

import java.io.IOException;

public class AKVectorTileSearchService extends VectorTileSearchService {
    private final String TAG = "AKVectorTileSearchService";


    public AKVectorTileSearchService(TileDataSource source, VectorTileDecoder decoder) {
        super(source, decoder);
    }

    static Handler mainHandler = null;

    public void findFeaturesCallback(final SearchRequest request, final VectorTileSearchServiceCallback callback) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                final VectorTileFeatureCollection results = AKVectorTileSearchService.this.findFeatures(request);
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
