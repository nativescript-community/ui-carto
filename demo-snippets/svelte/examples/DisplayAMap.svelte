<script lang="ts">
    /**
     * The smallest thing that is a map: one layer with the Massif style, and a camera.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { massifStyle, vectorTiles } from './shared';

    async function start(host: ExampleHost) {
        const map = host.map;

        // A spec describes the whole stack: the layer, and the source underneath it. Anything the
        // constructor does not take is applied as a property, so `opacity` needs no special case.
        map.addLayer('basemap', { type: 'vector', opacity: 1, source: vectorTiles(), style: await massifStyle() });

        // Positions are lon/lat: the map was attached with EPSG:4326 as its event projection.
        map.camera().moveTo([6.8652, 45.8326], { zoom: 11 });

        host.caption('Mont Blanc, drawn by the Massif streets style over OpenFreeMap vector tiles.');
    }
</script>

<ExampleShell id="display-a-map" {start} title="Display a map" />
