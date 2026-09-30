<script lang="ts">
    /**
     * A style's runtime parameters, and the two kinds a style can declare: Massif's own, changed live.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { massifStyle, vectorTiles } from './shared';

    async function start(host: ExampleHost) {
        const map = host.map;

        // Registered under an id of its own rather than inlined in the layer spec, because the
        // example talks to it afterwards - a layer's style property cannot be read back as a
        // handle. The parameters are part of the spec, so the first frame is already right.
        const style = map.style('massif', { ...(await massifStyle()), params: { poiStyle: 'badge' } });

        map.addLayer('basemap', { type: 'vector', source: vectorTiles(), style: 'massif' });
        map.camera().moveTo([5.7245, 45.1885], { zoom: 15.5 });

        host.toggle('POI discs', true, (on) => {
            // A style parameter is a PROPERTY: the rest of the path is the parameter's name. LIVE:
            // the decoded tiles point at this value, so the discs come and go with a redraw.
            style.set('params.poiStyle', on ? 'badge' : 'plain');
        });
        host.toggle('Boundaries', true, (on) => {
            // In a FILTER: this decides what the tile contains, so every tile decodes again. A
            // STRING, converted against the DECLARED default - 1 here, so '0' becomes the number 0.
            style.set('params.show_boundaries', on ? '1' : '0');
        });
        host.button('Walker', () => {
            // Several at once, in ONE crossing - which is what a theme swap is.
            style.apply({ params: { highlight_drinking_water: '1', path_min_zoom: '12', sac_scale_labels: '1' } });
        });
        host.caption('Two parameters, two costs: a value swaps live, a filter re-decodes.');
    }
</script>

<ExampleShell id="style-parameters" {start} title="Change a style at runtime" />
