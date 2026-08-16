package com.nativescript.massifmaps.additions2;

import com.massifmaps.geometry.VectorTileFeatureCollection;

public interface VectorTileSearchServiceCallback {

    void onFindFeatures(VectorTileFeatureCollection features);
}
