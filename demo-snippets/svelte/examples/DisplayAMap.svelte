<script lang="ts">
    /**
     * The smallest thing that is a map: one raster layer and a camera.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { osmRaster } from './shared';

    function start(host: ExampleHost) {
        const map = host.map;

        // A spec describes the whole stack: the layer, and the source underneath it. Anything the
        // constructor does not take is applied as a property, so `opacity` needs no special case.
        map.addLayer('basemap', { type: 'raster', opacity: 1, source: osmRaster() });

        // Positions are lon/lat: the map was attached with EPSG:4326 as its event projection.
        map.camera().moveTo([6.8652, 45.8326], { zoom: 11 });

        host.caption('Mont Blanc, from OpenStreetMap raster tiles.');
    }
</script>

<ExampleShell id="display-a-map" {start} title="Display a map" />
