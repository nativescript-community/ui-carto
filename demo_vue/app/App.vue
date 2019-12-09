<template>
    <Page @navigatedTo="onNavigatedTo">
        <ActionBar title="Carto Samples" />
        <StackLayout>
            <CollectionView width="100%" height="100%" colWidth="50%" rowHeight="200" ref="listView" for="item in itemList" backgroundColor="#ECECEC">
                <v-template>
                    <GridLayout width="100%" height="100%" rows="*" columns="*" padding="10">
                        <StackLayout padding="5" width="100%" height="100%" backgroundColor="white" orientation="vertical" @tap="onItemTap(item)">
                            <Image width="100%" height="80" :src="item.image" stretch="aspectFill" backgroundColor="red" />
                            <Label fontWeight="bold" fontSize="15" width="100%" color="#3F51B5" :text="item.title" />
                            <Label fontSize="13" textWrap="true" width="100%" color="black" :text="item.description" />
                        </StackLayout>
                    </GridLayout>
                </v-template>
            </CollectionView>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
import { GC } from '@nativescript/core/utils/utils';
import BaseVueComponent from './examples/BaseVueComponent';
import Component from 'vue-class-component';

const samples = [
    {
        component: 'BaseMaps',
        title: 'Online Base Maps',
        description: 'Choice between different base maps, styles, languages',
        image: '~/assets/images/image_base_maps.png'
    },
    {
        component: 'CustomDev',
        title: 'Dev example',
        description: 'live dev example'
    },
    {
        component: 'ReverseGeocoding',
        title: 'Reverse Geocoding',
        description: 'Coding of a point location to a readable address',
        image: '~/assets/images/icon_sample_reverse_geocoding.png'
    },
    {
        component: 'Geocoding',
        title: 'Geocoding',
        description: 'Converting addresses into geographic coordinates',
        image: '~/assets/images/icon_sample_geocoding.png'
    },
    {
        component: 'CustomRasterDatasource',
        title: 'Custom Raster Data',
        description: 'Customized raster tile data source',
        image: '~/assets/images/image_custom_raster.png'
    },
    {
        component: 'RouteSearch',
        title: 'Search API',
        description: 'Finds points of interest near a route',
        image: '~/assets/images/icon_sample_route_search.png'
    },
    {
        component: 'GroundOverlay',
        title: 'Ground Overlays',
        description: 'Shows a non-tiled Bitmap on ground',
        image: '~/assets/images/image_ground_overlays.png'
    },
    {
        component: 'WmsMap',
        title: 'WMS Map',
        description: 'Use external WMS service for raster tile overlay',
        image: '~/assets/images/image_wms.png'
    },
    {
        component: 'OfflineRouting',
        title: 'Routing',
        description: 'Valhalla Routing and Route Package download',
        image: '~/assets/images/image_offline_routing.png'
    },
    {
        component: 'VectorObjectEditing',
        title: 'Vector Object Editing',
        description: 'Shows usage of an editable vector layer',
        image: '~/assets/images/image_object_editing.png'
    },
    {
        component: 'Overlays',
        title: '2D & 3D Overlays',
        description: 'Shows lines, points, polygons, texts, pop-ups and a NMLModel',
        image: '~/assets/images/image_overlays.png'
    },
    {
        component: 'ClusteredMarkers',
        title: 'Clustered Markers',
        description: 'Shows 20,000 points from bundled geojson',
        image: '~/assets/images/image_clustered_markers.png'
    },
    {
        component: 'BundledMap',
        title: 'Bundled Map',
        description: 'Offline map of Rome bundled with the app',
        image: '~/assets/images/image_bundled.png'
    },
    {
        component: 'OfflineMap',
        title: 'Offline Map',
        description: 'Map package download',
        image: '~/assets/images/image_city_package.png'
    },
    {
        component: 'Capture',
        title: 'Screencapture',
        description: 'Capture rendered mapView as a Bitmap',
        image: '~/assets/images/image_screencapture.png'
    },
    {
        component: 'CustomPopup',
        title: 'Custom Popup',
        description: 'Creates a Custom Popup',
        image: '~/assets/images/image_custom_popup.png'
    },
    {
        component: 'GpsLocation',
        title: 'GPS Location',
        description: 'Shows user GPS location on the map',
        image: '~/assets/images/image_gps_location.png'
    },
    {
        component: 'BundledPackageData',
        title: 'Package Data',
        description: 'Displays available CARTO Mobile packages',
        image: '~/assets/images/icon_sample_user_data.png'
    }
];
@Component({})
export default class App extends BaseVueComponent {
    itemList = samples;

    onNavigatedTo() {
        console.log('app', 'onNavigatedTo');
        GC();
    }
    onItemTap(item) {
        const module = require(`./examples/${item.component}.vue`).default;
        console.log(`Tapped3 on ${item.title}, ${item.component}`, module);
        this.$navigateTo(module, {
            props: {
                title: item.title,
                description: item.description
            }
        } as any);
    }
}
</script>

<style scoped>
ActionBar {
    background-color: #3f51b5;
    color: #ffffff;
}
</style>
