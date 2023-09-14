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
    AssetPackage basePackage = null;
    public void setInterface(Interface inter) {
        this.inter = inter;
    }

    public AKAssetPackage(Interface inter){
        super();
        setInterface(inter);
    }
    public AKAssetPackage(Interface inter, AssetPackage bPackage){
        super();
        setInterface(inter);
        basePackage = bPackage;
    }

    @Override
    public BinaryData loadAsset(String name) {
        BinaryData result = null;
        if (basePackage != null) {
                result = basePackage.loadAsset(name);
            }
        if (result == null && inter != null) {
            result = inter.loadAsset(name);
            // if (result == null && basePackage != null) {
            //     result = basePackage.loadAsset(name);
            // }
        }
        return result;
    }

    @Override
    public StringVector getAssetNames() {
        StringVector result = null;
        if (inter != null) {
            result = inter.getAssetNames();
        }
        if (result == null) {
            result = new StringVector();
        }
        if (basePackage != null) {
            StringVector result2 = basePackage.getAssetNames();
            for (int i = 0; i < result2.size(); i++) {
                result.add(result2.get(i));
            }
        }

        return result;
    }
}
