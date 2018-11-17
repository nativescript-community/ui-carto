package com.akylas.carto.additions;

import com.carto.packagemanager.PackageInfo;
import com.carto.packagemanager.PackageInfoVector;

public interface ServerPackagesCallback {

    void onServerPackages(PackageInfoVector packages);
}
