package com.akylas.carto.additions;

import com.carto.ui.MapClickInfo;
import com.carto.ui.MapInteractionInfo;

public interface AKMapEventListener {

    public void onMapInteraction(MapInteractionInfo interaction, boolean userAction);

    public void onMapMoved(boolean userAction);

    public void onMapIdle();

    public void onMapStable(boolean userAction);

    public void onMapClicked(MapClickInfo mapClickInfo);
}