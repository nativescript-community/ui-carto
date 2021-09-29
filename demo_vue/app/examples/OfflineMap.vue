<template>
    <Page ref="page">
        <ActionBar :title="title" backgroundColor="#3F51B5">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
        </ActionBar>
        <GridLayout orientation="vertical" rows="*,50">
            <CartoMap ref="mapView" row="0" width="100%" height="100%" @mapReady="onMapReady" />
            <StackLayout row="1" orientation="horizontal" horizontalAlignment="center">
                <Button text="Download" @tap="onDownloadClick"></Button>
                <Button text="Language" @tap="onSelectLanguage"></Button>
                <Button text="Network" @tap="onNetworkSwitch" :color="online ? 'green' : 'gray'"></Button>
            </StackLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import BaseVueComponent from './BaseVueComponent';
import { CartoOnlineVectorTileLayer } from '@nativescript-community/ui-carto/layers/vector';
import { CartoMapStyle, MapPos, nativeVectorToArray } from '@nativescript-community/ui-carto/core';
import { CartoMap } from '@nativescript-community/ui-carto/ui';
import { CartoOnlineRasterTileLayer } from '@nativescript-community/ui-carto/layers/raster';
import { action } from '@nativescript/core/ui/dialogs';
import { CartoPackageManager, PackageInfo } from '@nativescript-community/ui-carto/packagemanager';
import { File, Folder, knownFolders, path } from '@nativescript/core/file-system';
import { isAndroid } from '@nativescript/core/platform';
import { CartoOfflineVectorTileLayer } from '@nativescript-community/ui-carto/layers/vector';
import * as permissions from '@nativescript-community/perms';
import * as dialogs from '@nativescript/core/ui/dialogs';
import { Component, Prop } from 'vue-property-decorator';
import BaseMaps from './BaseMaps';

@Component({})
export default class OfflineMap extends BaseMaps {
    @Prop() title: string;
    @Prop() description: string;
    currentLayerType = 'voyager';
    languages = ['Local', 'en', 'de', 'es', 'it', 'fr', 'ru'];
    online = true;
    packageManager: CartoPackageManager;
    onlineLayer;
    offlineLayer;
    currentLayer;
    destroyed() {
        console.log('OfflineMap destroyed');
        this.packageManager.stop(false);
        this.packageManager = null;
    }

    onMapReady(e) {
        console.log('map ready!');
        super.onMapReady(e);
        permissions
            .request('storage')
            .then((result) => {
                // that.set('message', 'WooHoo you granted me all the permissions!');
                const mapView = ( e.object as CartoMap);
                let dataFolder;
                if (isAndroid) {
                    dataFolder = android.os.Environment.getExternalStorageDirectory().getAbsolutePath().toString();
                } else {
                    dataFolder = knownFolders.documents().path;
                }
                // const dataFolder = Folder.fromPath(path.join(knownFolders.documents().path, 'packaged'));
                const packageManager = (this.packageManager = new CartoPackageManager({
                    source: 'carto.streets',
                    dataFolder: Folder.fromPath(path.join(dataFolder, 'com.carto.mappackages')).path,
                    listener: this,
                }));
                packageManager.start();
                packageManager.startPackageListDownload();

                if (this.online) {
                    this.setOnlineMap();
                } else {
                    this.setOfflineMap();
                }
            })
            .catch((err) => {
                console.log(err);
                // that.set('message', "Oops, I'm so sad, I was only granted " + count + ' of 4 permissions!');
            });
    }

    setOnlineMap() {
        if (this.onlineLayer == null) {
            this.onlineLayer = new CartoOnlineVectorTileLayer({
                style: CartoMapStyle.VOYAGER,
            });
        }

        if (this.offlineLayer != null) {
            this.mapView.removeLayer(this.offlineLayer);
        }

        this.mapView.addLayer(this.onlineLayer);
    }
    setOfflineMap() {
        if (this.onlineLayer != null) {
            this.mapView.removeLayer(this.onlineLayer);
        }

        if (this.offlineLayer == null) {
            this.offlineLayer = new CartoOfflineVectorTileLayer({
                preloading: true,
                packageManager: this.packageManager,
                style: CartoMapStyle.VOYAGER,
            });
        }
        this.mapView.addLayer(this.offlineLayer);
    }
    onNetworkSwitch() {
        if (this.online) {
            this.setOfflineMap();
        } else {
            this.setOnlineMap();
        }
        this.online = !this.online;
    }

    onPackageListUpdated() {
        // contentView.updatePackages();
        const message = 'Packages list updated';
        console.log(message);
    }

    onPackageListFailed() {
        // contentView.updatePackages();
        const message = 'Packages list failed';
        console.log(message);
    }

    onPackageStatusChanged(id, version, status) {
        const message = `Packages status changed ${id} ${status}`;
        console.log(message);
        // contentView.onStatusChange(id, status);
    }
    onPackageUpdated(id, version) {
        const message = `Packages updated ${id} ${version}`;
        console.log(message);
        // contentView.downloadComplete();
    }

    onDownloadClick() {
        const packages = nativeVectorToArray<PackageInfo>(this.packageManager.getServerPackages());
        const list = packages.map((p) => p.getName()).sort();
        dialogs
            .action({
                message: 'Download',
                cancelButtonText: 'Cancel',
                actions: list,
            })
            .then((selected) => {
                const packageIndex = packages.findIndex((p) => p.getName() === selected);
                if (packageIndex !== -1) {
                    const result = this.packageManager.startPackageDownload(packages[packageIndex].getPackageId());
                    console.log('selected', selected, packages[packageIndex].getPackageId(), result);
                }
            });
    }

    updateLanguage(code: string) {
        if (this.currentLayer == null) {
            return;
        }
        this.onlineLayer && this.onlineLayer.getTileDecoder().setStyleParameter('lang', code);
        this.offlineLayer && this.offlineLayer.getTileDecoder().setStyleParameter('lang', code);
    }

    onSelectLanguage() {
        action({
            title: 'Language',
            message: 'Select Language',
            actions: this.languages,
        }).then((result) => {
            result && this.updateLanguage(result);
        });
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
