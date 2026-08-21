<script lang="ts">
    /**
     * Composite vector tile layer: ONE vector layer fed by SEVERAL sources, each woven into
     * the style's own layer order instead of stacking as a separate map layer.
     *
     * The controls are in the drawer, under BASE MAP - they are shared by every demo, since
     * the mode and the style are properties of the base map rather than of this file. What
     * this demo adds is the A/B: the same three sources are available BOTH as composite
     * slots (in the drawer's "composite slots") and as stand-alone layers (in the layer
     * list above it), so the difference is one switch away.
     *
     *   composite `hillshade`  -> drawn where the style's `#hillshade` rule sits, i.e. over
     *                             the landcover and UNDER the roads and the labels;
     *   layer     `hillshade`  -> drawn over the whole base layer, labels included.
     *
     * A SLOT ONLY EXISTS IF THE STYLE DECLARES A LAYER WITH THAT NAME. Otherwise the source
     * is registered and never drawn, and the SDK only warns in the log - which is what the
     * "slots" line in the drawer reports. The inline CartoCSS here declares all three; the
     * packaged osm project declares `contour` only; and a COMPILED Mapnik XML style cannot
     * declare them at all, because the XML symbolizer set has no hillshade/raster config
     * symbolizer - only CartoCSS has.
     *
     * ANDROID ONLY. com.massifmaps.layers.CompositeVectorTileLayer has no MSF equivalent in
     * the iOS metadata we generate from, so on iOS the plugin builds a plain VectorTileLayer
     * and the slots do nothing - the stand-alone layers still work.
     */
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import { createBaseMap } from './common/basemap';
    import { standardLayers } from './common/layers';
    import { ALPS } from './common/sources';

    let status = '';

    const baseMap = createBaseMap({
        mode: 'composite',
        styleSource: 'inline',
        slots: { hillshade: true, satellite: false, contour: true }
    });
    const layers = [baseMap.spec, ...standardLayers(ALPS)];

    baseMap.onChange = (state) => {
        status = `${state.mode} / ${state.styleStatus} - slots: ${state.slotStatus}`;
    };

    function setup(map: MassifMap, shell: ShellContext) {
        if (!__ANDROID__) {
            status = 'android only - CompositeVectorTileLayer has no iOS binding yet';
        }
    }
</script>

<MapShell {baseMap} exaggeration={1.2} focusPos={ALPS} {layers} {setup} {status} terrain3D={true} tilt={50} title="Composite layers" zoom={12}>
    <stackLayout slot="settings">
        <label class="section-title" text="Composite" />
        <label
            class="setting-hint"
            text="Open the drawer: switch a source between a composite SLOT and a stand-alone LAYER and watch where it lands in the draw order. Switch the style to 'assets' to see a slot the style does not declare."
            textWrap="true" />
    </stackLayout>
</MapShell>
