package com.nativescript.massifmaps.additions;

import com.massifmaps.core.BinaryData;
import com.massifmaps.core.StringVector;
public class AssetPackage extends com.massifmaps.utils.AssetPackage {
    public interface Interface {
        BinaryData loadAsset(String name);
        StringVector getAssetNames();
    }
    Interface inter = null;
    com.massifmaps.utils.AssetPackage basePackage = null;
    public void setInterface(Interface inter) {
        this.inter = inter;
    }

    public AssetPackage(Interface inter){
        super();
        setInterface(inter);
    }
    public AssetPackage(Interface inter, com.massifmaps.utils.AssetPackage bPackage){
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
