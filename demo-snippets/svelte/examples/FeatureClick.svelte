<script lang="ts">
    /**
     * Reading the feature under a tap, without parsing a tile.
     */
    import type { Position } from '@nativescript-community/ui-massifmaps/api';
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { alpineStyle, vectorTiles } from './shared';

    function start(host: ExampleHost) {
        const map = host.map;

        const base = map.addLayer('basemap', { type: 'vector', source: vectorTiles(), style: alpineStyle() });
        map.camera().moveTo([5.7245, 45.1885], { zoom: 14.5 });

        base.onFeatureClick((e) => {
            // Each of these is ONE read out of the payload. Nothing else is touched - the
            // geometry is only serialised if you ask for it.
            const name = e.get('feature.properties.name');
            const kind = e.get('feature.properties.class');
            const where = e.getPos('featurePos') as Position;
            host.caption(
                [e.get('featureLayerName'), name ? `- ${name}` : '', kind ? `(${kind})` : '', where ? `  ${where[1].toFixed(5)}, ${where[0].toFixed(5)}` : ''].filter(Boolean).join(' ')
            );
        });
        host.caption('Tap a road, a building or the water.');
    }
</script>

<ExampleShell id="feature-click" {start} title="Get the feature under a tap" />
