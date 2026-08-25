<script lang="ts">
    /**
     * A CartoCSS style project, and the two kinds of runtime parameter it can declare.
     *
     * The Android example loads the project from a zipped asset. A plain CartoCSS string cannot
     * declare `param::` values at all, so this one WRITES the project to disk first - see
     * `styleProject` in shared.ts. The SDK does not care where a project came from.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { styleProject, vectorTiles } from './shared';

    const WATER = ['#8fb8d8', '#2f6f4f', '#7f5af0'];

    /**
     * The project's manifest.
     *
     * `styles` is a list of .mss FILE NAMES, `layers` the tile layers to decode (reversed, so the
     * last one listed is drawn first), and the runtime parameters go under `styleparameters` with
     * a `default` - `parameters` is a different thing, the constants a macro can use.
     */
    const PROJECT = JSON.stringify({
        styles: ['style.mss'],
        layers: ['building', 'transportation', 'landcover', 'water'],
        styleparameters: {
            water_color: { default: '#8fb8d8' },
            show_buildings: { default: true }
        }
    });

    const MSS = [
        'Map { background-color: #f4f1ec; }',
        // LIVE: the decoded tiles point at this value, so changing it swaps colour and redraws.
        '#water { polygon-fill: [param::water_color]; }',
        '#landcover { polygon-fill: #dbe8cc; polygon-opacity: 0.5; }',
        // In a FILTER: this decides what the tile CONTAINS, so changing it re-decodes every tile.
        // The parameter name is QUOTED in a filter - unquoted it is a syntax error, not a
        // missing parameter.
        "#building['param::show_buildings'=true] { polygon-fill: #d9d0c9; line-color: #c3b8ae; line-width: 0.6; }",
        '#transportation { line-color: #ffffff; line-width: linear([view::zoom], (10, 0.6), (16, 5)); line-join: round; line-cap: round; }'
    ].join('\n');

    let water = 0;

    function start(host: ExampleHost) {
        const map = host.map;
        const folder = styleProject('alpine', { 'alpine.json': PROJECT, 'style.mss': MSS });

        // Registered under an id of its own rather than inlined in the layer spec, because the
        // example talks to it afterwards - a layer's style property cannot be read back as a
        // handle. A spec key that is a STRING is looked up in the registry, which is what
        // `style: 'alpine'` below does.
        // The parameters are part of the spec, so the style is built with them already applied
        // rather than being corrected on the first frame.
        const style = map.style('alpine', {
            type: 'mbvt',
            project: { type: 'project', assets: { type: 'dir', path: folder }, name: 'alpine' },
            params: { water_color: WATER[0], show_buildings: 'true' }
        });

        map.addLayer('basemap', { type: 'vector', source: vectorTiles(), style: 'alpine' });
        map.camera().moveTo([5.7245, 45.1885], { zoom: 13.5 });

        host.button('Water colour', () => {
            water = (water + 1) % WATER.length;
            // A style parameter is a PROPERTY: the rest of the path is the parameter's name.
            style.set('params.water_color', WATER[water]);
        });
        host.toggle('Buildings', true, (on) => {
            // A STRING, and the typing is right to insist: a style parameter is std::string. The
            // SDK converts it against the parameter's DECLARED default - 'true' becomes a bool
            // because the project declares `show_buildings: { default: true }`.
            style.set('params.show_buildings', String(on));
        });
        host.button('Night', () => {
            // Several at once, in ONE crossing - which is what a theme swap is.
            style.apply({ params: { water_color: '#0b2b4a', show_buildings: 'false' } });
        });
        host.caption('Two parameters, two costs: a colour swaps live, a filter re-decodes.');
    }
</script>

<ExampleShell id="style-parameters" {start} title="Change a style at runtime" />
