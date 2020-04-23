package com.akylas.carto.additions;

import com.carto.ui.MapClickInfo;

public interface AKMapEventListener {
    public void onMapMoved(boolean userAction);

    public void onMapIdle();

    public void onMapStable(boolean userAction);

    public void onMapClicked(MapClickInfo mapClickInfo);
}