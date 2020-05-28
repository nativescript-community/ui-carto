package com.akylas.carto.additions;

import com.carto.core.BinaryData;
import com.carto.core.StringVector;
import com.carto.utils.AssetPackage;

public class AKAssetPackage extends AssetPackage {
    public interface Interface {
        BinaryData loadAsset(String name);
        StringVector getAssetNames();
    }
    Interface inter = null;
    public void setInterface(Interface inter) {
        this.inter = inter;
    }

    public AKAssetPackage(Interface inter){
        super();
        setInterface(inter);
    }

    @Override
    public BinaryData loadAsset(String name) {
        if (inter != null) {
            return inter.loadAsset(name);
        }
        return super.loadAsset(name);
    }

    @Override
    public StringVector getAssetNames() {
        if (inter != null) {
            return inter.getAssetNames();
        }
        return super.getAssetNames();
    }
}
