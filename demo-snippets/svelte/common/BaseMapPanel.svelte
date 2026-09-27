<script lang="ts">
    /**
     * The BASE MAP + COMPOSITE SLOTS sections of the native demo's panel, in the drawer
     * next to the layer switches - every demo gets the same ones.
     *
     * Mode and style both REBUILD the base layer: they decide the layer class and the
     * decoder, and a style is compiled once, when the decoder is built. The slots do not -
     * they are attached to the live layer.
     */
    import SettingSegment from './SettingSegment.svelte';
    import SettingSlider from './SettingSlider.svelte';
    import SettingSwitch from './SettingSwitch.svelte';
    import { ASSET_STYLES } from './basemap';
    import type { BaseMapController } from './basemap';

    export let baseMap: BaseMapController;

    let state = baseMap.state;
    baseMap.onChange = (next) => (state = { ...next });

    function change(patch: Partial<typeof state>, rebuild = true) {
        Object.assign(baseMap.state, patch);
        state = { ...baseMap.state };
        if (rebuild) {
            baseMap.rebuild();
        } else {
            baseMap.syncSources();
        }
    }

    /** every shield knob is style text, so each one is a new decoder */
    function changePoi(patch: Record<string, any>) {
        change({ poi: { ...baseMap.state.poi, ...patch } });
    }

    function setSlot(name: 'hillshade' | 'satellite' | 'contour', value: boolean) {
        baseMap.state.slots[name] = value;
        state = { ...baseMap.state };
        baseMap.syncSources();
    }
</script>

<label class="drawer-title" text="Base map" />
<SettingSegment
    label="Mode"
    onChange={(v) => change({ mode: v })}
    options={[
        { value: 'plain', label: 'plain' },
        { value: 'composite', label: 'composite' }
    ]}
    value={state.mode} />
<SettingSegment
    label="Style"
    onChange={(v) => change({ styleSource: v })}
    options={[
        { value: 'inline', label: 'inline' },
        { value: 'assets', label: 'assets' },
        { value: 'zip', label: 'zip' },
        { value: 'poi', label: 'poi' }
    ]}
    value={state.styleSource} />
{#if state.styleSource === 'assets' || state.styleSource === 'zip'}
    <SettingSegment label="Project" onChange={(v) => change({ styleName: v })} options={ASSET_STYLES.map((name) => ({ value: name, label: name }))} value={state.styleName} />
{/if}
<label class="setting-hint" text={state.styleStatus} textWrap="true" />

{#if state.styleSource === 'poi'}
    <!-- SHIELDS: an ICON on the feature and the NAME on whichever side is free. Every knob
         here rebuilds the base layer, because all of them are style TEXT - the style is
         compiled once, when the decoder is built. -->
    <label class="drawer-title" text="Shields (style 'poi')" />
    <SettingSwitch checked={state.poi.anchors !== false} hint="the culler picks the side" label="Name on the free side" onChange={(v) => changePoi({ anchors: v })} />
    <SettingSwitch checked={state.poi.textOptional !== false} label="Icon alone when nothing fits" onChange={(v) => changePoi({ textOptional: v })} />
    <SettingSwitch checked={state.poi.fontIcon !== false} hint="a glyph of the style's osm.ttf - one atlas cell, no bitmap" label="Font icon" onChange={(v) => changePoi({ fontIcon: v })} />
    <SettingSwitch checked={!!state.poi.bitmapIcon} label="Bitmap shield" onChange={(v) => changePoi({ bitmapIcon: v })} />
    <SettingSwitch checked={state.poi.textPlate !== false} label="Plate behind the name" onChange={(v) => changePoi({ textPlate: v })} />
    <SettingSwitch checked={!!state.poi.iconPlate} label="Plate behind the icon" onChange={(v) => changePoi({ iconPlate: v })} />
    <SettingSlider label="Plate radius" max={20} min={0} onChange={(v) => changePoi({ plateRadius: v })} step={1} value={state.poi.plateRadius ?? 6} />
    <SettingSlider label="Plate padding" max={12} min={0} onChange={(v) => changePoi({ platePadding: v })} step={1} value={state.poi.platePadding ?? 4} />
    <SettingSlider label="Plate border" max={4} min={0} onChange={(v) => changePoi({ plateBorder: v })} step={0.5} value={state.poi.plateBorder ?? 0} />
    <SettingSlider label="Gap icon / name" max={12} min={0} onChange={(v) => changePoi({ textDx: v })} step={1} value={state.poi.textDx ?? 4} />
{/if}

{#if state.mode === 'composite'}
    <label class="drawer-title" text="Composite slots" />
    <!-- a slot only exists if the STYLE declares a layer with that name; otherwise the
         source is registered and never drawn, and the SDK only warns in the log -->
    <label class="setting-hint" text={state.slotStatus} textWrap="true" />
    <SettingSwitch checked={state.slots.hillshade} hint="fills the style's #hillshade rule" label="#hillshade" onChange={(v) => setSlot('hillshade', v)} />
    <SettingSwitch checked={state.slots.satellite} hint="fills #satellite" label="#satellite" onChange={(v) => setSlot('satellite', v)} />
    <SettingSwitch checked={state.slots.contour} hint="merged INTO the master tile" label="#contour" onChange={(v) => setSlot('contour', v)} />
    <SettingSlider
        format={(v) => (v > 0 ? `+${v.toFixed(1)}` : v.toFixed(1))}
        label="#hillshade zoom bias"
        max={2}
        min={-2}
        onChange={(v) => change({ hillshadeZoomBias: v }, false)}
        step={0.5}
        value={state.hillshadeZoomBias} />
{/if}
