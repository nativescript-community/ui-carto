package com.akylas.carto.additions;

import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

import android.util.Log;
import android.content.Context;

import com.carto.utils.AssetPackage;
import com.carto.utils.AssetUtils;
import com.carto.core.StringVector;

public class AKDirAssetPackage extends AssetPackage {
    private final static String TAG = "AKDirAssetPackage";
    private final String dirPath;
    private final Context context;
    private StringVector assetNames;

    public AKDirAssetPackage(Context context, String path) {
        super();
        this.dirPath = path;
        this.context = context;
    }

    public com.carto.core.BinaryData loadAsset(String name) {
        return AssetUtils.loadAsset(this.dirPath + '/' + name);
    }

    public com.carto.core.StringVector getAssetNames() {
        if (this.assetNames == null) {
            try {
                this.assetNames = new StringVector();
                final String sourceDir = this.context.getApplicationContext().getApplicationInfo().sourceDir;
                Log.d(TAG,  "sourceDir: " + sourceDir);
                ZipFile zf = new ZipFile(sourceDir);
                try {
                    for (Enumeration<? extends ZipEntry> e = zf.entries(); e.hasMoreElements();) {
                        ZipEntry ze = e.nextElement();
                        String name = ze.getName();
                        Log.d(TAG,  "entry: " + name + "," + name.replace(this.dirPath, ""));
                        if (name.startsWith(this.dirPath)) {
                            this.assetNames.add(name.replace(this.dirPath, ""));
                        }
                    }
                } finally {
                    zf.close();
                }
            } catch (Exception e) {
            }
        }
        return this.assetNames;
    }
}