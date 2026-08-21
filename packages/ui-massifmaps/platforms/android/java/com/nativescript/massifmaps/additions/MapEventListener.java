package com.nativescript.massifmaps.additions;

import com.massifmaps.ui.MapClickInfo;
import com.massifmaps.ui.MapInteractionInfo;

public interface MapEventListener {

    public void onMapInteraction(MapInteractionInfo interaction, boolean userAction);

    public void onMapMoved(boolean userAction);

    public void onMapIdle();

    public void onMapStable(boolean userAction);

    public void onMapClicked(MapClickInfo mapClickInfo);
}