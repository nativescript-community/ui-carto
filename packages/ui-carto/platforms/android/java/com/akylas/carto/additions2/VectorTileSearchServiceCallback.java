package com.akylas.carto.additions2;

import com.carto.packagemanager.PackageInfo;
import com.carto.geometry.VectorTileFeatureCollection;

public interface VectorTileSearchServiceCallback {

    void onFindFeatures(VectorTileFeatureCollection features);
}
