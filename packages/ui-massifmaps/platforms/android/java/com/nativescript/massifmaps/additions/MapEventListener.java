package com.nativescript.massifmaps.additions;

import com.massifmaps.ui.MapClickInfo;
import com.massifmaps.ui.MapInteractionInfo;

public interface MapEventListener {

    public void onMapInteraction(MapInteractionInfo interaction, int reason);

    public void onMapMoved(int reason);

    public void onMapIdle();

    public void onMapStable(int reason);

    public void onMapClicked(MapClickInfo mapClickInfo);
}