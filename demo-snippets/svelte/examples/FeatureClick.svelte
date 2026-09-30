<script lang="ts">
    /**
     * Reading the feature under a tap, without parsing a tile.
     */
    import type { Position } from '@nativescript-community/ui-massifmaps/api';
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { massifStyle, vectorTiles } from './shared';

    async function start(host: ExampleHost) {
        const map = host.map;

        const base = map.addLayer('basemap', { type: 'vector', source: vectorTiles(), style: await massifStyle() });
        map.camera().moveTo([5.7245, 45.1885], { zoom: 14.5 });

        base.onFeatureClick((e) => {
            // Each of these is ONE read out of the payload. Nothing else is touched - the
            // geometry is only serialised if you ask for it.
            const name = e.get('feature.properties.name');
            const kind = e.get('feature.properties.class');
            if (!name) {
                // Nothing worth stopping for - let the click carry on to the map.
                return;
            }
            const where = e.getPos('featurePos') as Position;
            host.caption(['took', e.get('featureLayerName'), `- ${name}`, kind ? `(${kind})` : '', where ? `  ${where[1].toFixed(5)}, ${where[0].toFixed(5)}` : ''].filter(Boolean).join(' '));
            // CLAIMS the click: nothing after this handler sees it - no other subscriber, and no
            // map.clicked. That is how you stop as soon as you have found the feature you care
            // about, instead of letting the tap fall through and also drop a pin.
            e.consumed = true;
        });

        // Only reached when the handler above declined: a named feature never gets here.
        map.onClick(() => host.caption('nothing named there - the click fell through to the map'));

        host.caption('Tap a named road or building, then somewhere empty.');
    }
</script>

<ExampleShell id="feature-click" {start} title="Get the feature under a tap" />
