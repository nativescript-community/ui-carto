package com.nativescript.massifmaps.packagemanager;

import com.massifmaps.packagemanager.PackageInfo;
import com.massifmaps.packagemanager.PackageInfoVector;

public interface ServerPackagesCallback {

    void onServerPackages(PackageInfoVector packages);
}
