package com.akylas.carto.additions;

import com.carto.geometry.FeatureCollection;

public interface FeatureCollectionSearchServiceCallback {

    void onFindFeatures(FeatureCollection features);
}
