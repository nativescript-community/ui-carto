<script context="module" lang="ts">
    import { FogOptions, TerrainOptions } from '@nativescript-community/ui-massifmaps/components';
    import type { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import type { DemoLayerSpec } from './layers';

    /** what a demo gets in `setup`, and what the settings sheet drives */
    export interface ShellContext {
        map: MassifMap;
        /** always created, even when the demo starts flat - the 3D switch needs something to turn on */
        terrain: TerrainOptions;
        /** the map's own FogOptions - the distance haze AND the sky above the horizon */
        fog: FogOptions;
        setLayerEnabled(id: string, enabled: boolean): void;
        isLayerEnabled(id: string): boolean;
        /** re-adds every enabled layer in declaration order (draw order is the array, not the toggle order) */
        rebuildLayers(): void;
        /** drop a built layer so the next rebuild re-creates it - what a style change needs */
        invalidateLayer(id: string): void;
        /** the layer instance, once it has been built */
        getLayer(id: string): any;
        setStatus(text: string): void;
    }

    export type ViewMode = 'off' | 'look' | 'fps';
</script>

<script lang="ts">
    /**
     * Page + map + the two panels every demo shares, so a demo file only contains the
     * thing it demonstrates:
     *
     *  - a RIGHT DRAWER with the LAYERS and BASE MAP sections of the native demo's panel:
     *    one switch per layer in draw order, the base map's mode and style source, and the
     *    composite slots;
     *  - a PERSISTENT BOTTOM SHEET with the settings (ui-persistent-bottomsheet). It has
     *    two steps - a handle and the open sheet - and no zero step, so it can be collapsed
     *    but never hidden. It starts open.
     *
     * The sheet carries the sections that are about the MAP rather than about one demo -
     * terrain, view distance and fog, free roam, debug - because in the native demo they
     * are global too. Demo-specific ones go in the `settings` slot, which is rendered first.
     *
     * Since SDK 6 the fog is its OWN object on the map's Options, not a handful of
     * properties spread over TerrainOptions and SkyOptions: colour and range came off
     * TerrainOptions, the horizon blend off SkyOptions.
     */
    import { FreeRoamMode, PanningSpeedMode, SkyOptions, TerrainOptions as TerrainOptionsClass } from '@nativescript-community/ui-massifmaps/components';
    import { PanningMode } from '@nativescript-community/ui-massifmaps/ui';
    import { goBack } from '@nativescript-community/svelte-native';
    import type { Layer } from '@nativescript-community/ui-massifmaps/layers';
    import BaseMapPanel from './BaseMapPanel.svelte';
    import LayerPanel from './LayerPanel.svelte';
    import Section from './Section.svelte';
    import SettingSegment from './SettingSegment.svelte';
    import SettingSlider from './SettingSlider.svelte';
    import SettingSwitch from './SettingSwitch.svelte';
    import type { BaseMapController } from './basemap';
    import { demSource } from './sources';

    export let title: string;
    export let zoom = 12;
    export let tilt: number = 90;
    export let bearing: number = 0;
    export let focusPos: { latitude: number; longitude: number };
    /** the layers the drawer offers, in DRAW ORDER; each declares whether it starts on */
    export let layers: DemoLayerSpec[] = [];
    /** the base map's mode / style / composite slots, if the demo has one */
    export let baseMap: BaseMapController;
    /** 3D terrain on when the demo opens */
    export let terrain3D = false;
    export let exaggeration = 1;
    export let viewMode: ViewMode = 'off';
    /** how far above the horizon 'look'/'fps' may look, in degrees (a NEGATIVE tilt) */
    export let lookUpLimit = 90;
    /** run before the demo's own setup, to configure the shared TerrainOptions */
    export let configureTerrain: (terrain: TerrainOptions) => void = () => {};
    /** called once the native map exists; the demo does its setup here */
    export let setup: (map: MassifMap, shell: ShellContext) => void = () => {};
    /** shown as a one-line readout above the sheet */
    export let status = '';
    /** hide the shared 3D/exaggeration rows for a demo that drives terrain itself */
    export let showTerrainSettings = true;
    /** the demo owns SkyOptions itself (Sky, Daylight, PeakFinder) - hide the shared sky rows */
    export let ownsSky = false;

    /** the sheet's two steps, in DIP: the handle alone, and the open sheet */
    const HANDLE_HEIGHT = 46;
    const SHEET_HEIGHT = 320;

    let map: MassifMap;
    let terrain: TerrainOptions;
    let sky: SkyOptions;
    /** the map's own, never constructed here - null on an SDK older than 6 */
    let fogOptions: FogOptions;
    let drawer;
    let sheet;
    let sheetStep = 1;

    // --- shared settings, all straight from DemoConfig ---
    let billboardOcclusion = true;
    let occlusionTolerance = 0;
    let meshResolution = 64;
    let drapeFills = true;
    let drapeLines = true;
    let drapeResolution = 0;
    let tileEdgeStitching = true;
    let seamlessTileEdges = true;
    let elevationPrefetch = true;
    let backgroundBitmap = false;

    let tileLodFactor = 0.5;
    let tileCoarsening = 8;
    let viewDistanceFactor = 1;
    /** absolute view distance in metres, whatever the camera's height or pitch (0 = the factor) */
    let viewDistanceMeters = 0;
    let fog = false;
    let fogStart = 1500;
    let fogDistance = 60000;
    let fogColor = '#b8c6d8';
    let skyEnabled = true;
    let fogHorizonBlend = 12;
    let fogHorizonAngle = -1;

    let lookSensitivity = 90;
    let moveSpeed = 0.5;

    let tileBorders = false;

    const instances: Record<string, Layer<any, any>> = {};
    let enabled: Record<string, boolean> = layers.reduce((acc, spec) => {
        acc[spec.id] = !!spec.enabled;
        return acc;
    }, {});

    const shell: ShellContext = {
        get map() {
            return map;
        },
        get terrain() {
            return terrain;
        },
        get fog() {
            return fogOptions;
        },
        setLayerEnabled,
        isLayerEnabled: (id) => !!enabled[id],
        rebuildLayers,
        invalidateLayer,
        getLayer: (id) => instances[id],
        setStatus: (text) => (status = text)
    } as ShellContext;

    function layerFor(spec: DemoLayerSpec) {
        if (!instances[spec.id]) {
            instances[spec.id] = spec.create(map);
        }
        return instances[spec.id];
    }

    /**
     * Draw order is the order of `layers`, not the order the switches were flipped, so a
     * change re-adds the whole enabled set. That is what the native demo's rebuildLayers
     * does, and it is why the hillshade never ends up over the labels.
     */
    function rebuildLayers() {
        if (!map) {
            return;
        }
        const wanted = layers
            .filter((spec) => enabled[spec.id])
            .map(layerFor)
            .filter(Boolean);
        map.getLayers().setAll(wanted);
    }

    function invalidateLayer(id: string) {
        delete instances[id];
    }

    function setLayerEnabled(id: string, value: boolean) {
        if (enabled[id] === value) {
            return;
        }
        enabled = { ...enabled, [id]: value };
        rebuildLayers();
    }

    function applyTerrain() {
        if (!terrain) {
            return;
        }
        terrain.enabled = terrain3D;
        terrain.exaggeration = exaggeration;
        terrain.billboardOcclusionEnabled = billboardOcclusion;
        terrain.billboardOcclusionTolerance = occlusionTolerance;
        terrain.meshResolution = meshResolution;
        terrain.drapeFillsEnabled = drapeFills;
        terrain.drapeLinesEnabled = drapeLines;
        terrain.drapeResolution = drapeResolution;
        terrain.tileEdgeStitchingEnabled = tileEdgeStitching;
        terrain.seamlessTileEdgesEnabled = seamlessTileEdges;
        terrain.elevationPrefetchEnabled = elevationPrefetch;
        terrain.backgroundBitmapEnabled = backgroundBitmap;
    }

    /**
     * View distance and fog belong together: the distance ENDS the ground and the fog is
     * what makes it fade out instead of being cut off. An absolute distance in metres wins
     * over the factor, which is tangram's rule - and that rule is exactly what shortens the
     * view as the camera comes down, which is wrong for a panorama.
     *
     * `rangeStart`/`rangeEnd` are where the haze begins and where it is full, in metres;
     * `horizonBlend`/`horizonAngle` are how far up the sky it keeps going, which is why
     * they are on FogOptions and not on SkyOptions.
     */
    function applyView() {
        if (!map || !terrain) {
            return;
        }
        map.getOptions().tileLODFactor = tileLodFactor;
        terrain.maxTileZoomCoarsening = tileCoarsening;
        terrain.viewDistanceFactor = viewDistanceFactor;
        terrain.viewDistance = viewDistanceMeters;
        if (fogOptions) {
            fogOptions.enabled = fog;
            fogOptions.color = fogColor;
            fogOptions.rangeStart = fogStart;
            fogOptions.rangeEnd = fogDistance;
            fogOptions.horizonBlend = fogHorizonBlend;
            fogOptions.horizonAngle = fogHorizonAngle;
        }
        if (!ownsSky && sky) {
            sky.enabled = skyEnabled;
        }
    }

    /**
     * 'look' lets one finger look around while two fingers still pan/pinch/rotate the map,
     * 'fps' is mouse-look - the camera never moves - with two fingers walking instead.
     * Looking ABOVE the horizon needs a negative tilt minimum: in this SDK tilt 90 is
     * straight down, so a map normally stops at 30 to keep the camera off the ground.
     */
    function applyViewMode() {
        if (!map) {
            return;
        }
        const options = map.getOptions();
        options.freeRoamMode = viewMode === 'fps' ? FreeRoamMode.FREE_ROAM_MODE_FIRST_PERSON : viewMode === 'look' ? FreeRoamMode.FREE_ROAM_MODE_LOOK : FreeRoamMode.FREE_ROAM_MODE_OFF;
        options.panningSpeedMode = PanningSpeedMode.PANNING_SPEED_MODE_ANCHORED;
        options.freeRoamLookSensitivity = lookSensitivity;
        options.freeRoamMoveSpeed = moveSpeed;
        options.tiltRange = [viewMode === 'off' ? 30 : -Math.max(30, lookUpLimit), 90];
    }

    function onMapReady(e) {
        map = e.object as MassifMap;
        const options = map.getOptions();
        // Options is a bound wrapper, so every accessor is also a plain property
        options.restrictedPanning = true;
        options.panningMode = PanningMode.PANNING_MODE_STICKY_FINAL;
        options.clickTypeDetection = true;
        options.zoomGestures = true;
        options.rotatable = true;
        options.tileThreadPoolSize = 2;
        options.envelopeThreadPoolSize = 2;
        options.debugTileBorders = tileBorders;

        // Always built, even for a flat demo: the 3D switch has to have something to turn on.
        terrain = new TerrainOptionsClass({ dataSource: demSource() });
        configureTerrain?.(terrain);
        // read back whatever the demo configured, so the sliders start where the demo left them
        meshResolution = terrain.meshResolution;
        console.log('🚀 ~ MapShell.svelte ~ onMapReady ~ meshResolution:', terrain.meshResolution);
        occlusionTolerance = terrain.billboardOcclusionTolerance;
        viewDistanceFactor = terrain.viewDistanceFactor;
        applyTerrain();
        map.setTerrainOptions(terrain);

        // The demos that are ABOUT the sky own their own SkyOptions; the rest get this one
        // so the shared sky row has something to drive.
        if (!ownsSky) {
            sky = new SkyOptions();
            map.setSkyOptions(sky);
        }
        // the map already owns its fog - there is nothing to construct or install
        fogOptions = new FogOptions();
        applyView();

        if (focusPos) {
            map.setFocusPos(focusPos, 0);
        }
        if (tilt !== undefined) {
            map.setTilt(tilt, 0);
        }
        if (bearing !== undefined) {
            map.setBearing(bearing, 0);
        }
        applyViewMode();
        // the base map rebuilds itself through the shell: a style change is a NEW layer
        baseMap?.attach(() => {
            invalidateLayer(baseMap.spec.id);
            rebuildLayers();
        });
        rebuildLayers();
        setup?.(map, shell);
    }

    function toggleDrawer() {
        drawer?.toggle('right');
    }
    function toggleSheet() {
        sheetStep = sheetStep === 0 ? 1 : 0;
        sheet?.animateStepIndex(sheetStep);
    }
</script>

<page actionBarHidden={false}>
    <actionBar {title}>
        <navigationButton text="Back" on:tap={() => goBack()} />
        {#if layers.length}
            <actionItem android.position="actionBar" ios.position="right" text="Layers" on:tap={toggleDrawer} />
        {/if}
    </actionBar>
    <drawer
        gestureHandlerOptions={{
            minDist: 50,
            failOffsetYStart: -40,
            failOffsetYEnd: 40
        }}
        leftSwipeDistance={50}
        on:loaded={(e) => (drawer = e.object)}>
        <gridLayout class="drawer-panel" prop:rightDrawer width="300" on:tap={()=>{}}>
            <LayerPanel {enabled} {layers} onToggle={setLayerEnabled}>
                {#if baseMap}
                    <BaseMapPanel {baseMap} />
                {/if}
                <slot name="drawer" {shell} />
            </LayerPanel>
        </gridLayout>

        <!-- two steps and no zero one: the sheet can be collapsed to its handle, never hidden -->
        <bottomsheet prop:mainContent panGestureOptions={{ failOffsetXEnd: 50, minDist: 150 }} stepIndex={1} steps={[HANDLE_HEIGHT, SHEET_HEIGHT]} on:loaded={(e) => (sheet = e.object)}>
            <!-- the sheet is an AbsoluteLayout, so the main content has to claim the whole of it -->
            <gridLayout class="page" height="100%" rows="auto, *" width="100%">
                <massifmap row="0" rowSpan="2" {zoom} on:mapReady={onMapReady} />
                <!-- the sheet covers the bottom of the map, so the readout lives at the top -->
                <stackLayout row="0" verticalAlignment="top">
                    {#if status}
                        <label class="status" text={status} textWrap="true" />
                    {/if}
                    <stackLayout class="overlay" horizontalAlignment="left">
                        <slot name="overlay" {shell} />
                    </stackLayout>
                </stackLayout>
            </gridLayout>

            <gridLayout class="sheet" height={SHEET_HEIGHT} prop:bottomSheet rows="auto, *" width="100%">
                <stackLayout class="sheet-handle" height={HANDLE_HEIGHT} row="0" on:tap={toggleSheet}>
                    <stackLayout class="sheet-grabber" />
                    <label class="sheet-title" text="Settings" />
                </stackLayout>
                <scrollView row="1">
                    <stackLayout class="sheet-content">
                        <!-- what this demo is about comes first, already open -->
                        <slot name="settings" {shell} />
                        <slot {shell} />

                        <Section expanded={true} title="View mode">
                            <SettingSegment
                                onChange={(v) => {
                                    viewMode = v;
                                    applyViewMode();
                                }}
                                options={[
                                    { value: 'off', label: 'map' },
                                    { value: 'look', label: 'look' },
                                    { value: 'fps', label: 'fps' }
                                ]}
                                value={viewMode} />
                            <SettingSlider
                                format={(v) => `${Math.round(v)} deg/inch`}
                                label="Look sensitivity"
                                max={200}
                                min={20}
                                onChange={(v) => {
                                    lookSensitivity = v;
                                    applyViewMode();
                                }}
                                step={5}
                                value={lookSensitivity} />
                            <SettingSlider
                                format={(v) => `x${v.toFixed(2)}`}
                                label="Move speed"
                                max={2}
                                min={0.05}
                                onChange={(v) => {
                                    moveSpeed = v;
                                    applyViewMode();
                                }}
                                step={0.05}
                                value={moveSpeed} />
                            <SettingSlider
                                format={(v) => `${Math.round(v)} deg`}
                                label="Look above horizon"
                                max={90}
                                min={0}
                                onChange={(v) => {
                                    lookUpLimit = v;
                                    applyViewMode();
                                }}
                                step={5}
                                value={lookUpLimit} />
                        </Section>

                        {#if showTerrainSettings}
                            <Section expanded={true} title="Terrain">
                                <SettingSwitch
                                    checked={terrain3D}
                                    hint="TerrainOptions.enabled"
                                    label="3D terrain"
                                    onChange={(v) => {
                                        terrain3D = v;
                                        applyTerrain();
                                    }} />
                                <SettingSlider
                                    label="Exaggeration"
                                    max={3}
                                    min={0}
                                    onChange={(v) => {
                                        exaggeration = v;
                                        applyTerrain();
                                    }}
                                    step={0.1}
                                    value={exaggeration} />
                                <SettingSwitch
                                    checked={billboardOcclusion}
                                    hint="hide a billboard sitting behind a ridge"
                                    label="Billboard occlusion"
                                    onChange={(v) => {
                                        billboardOcclusion = v;
                                        applyTerrain();
                                    }} />
                                <SettingSlider
                                    label="Occlusion tolerance"
                                    max={0.5}
                                    min={0}
                                    onChange={(v) => {
                                        occlusionTolerance = v;
                                        applyTerrain();
                                    }}
                                    step={0.01}
                                    value={occlusionTolerance} />
                                <SettingSlider
                                    format={(v) => `${Math.round(v)} tris/side`}
                                    label="Mesh resolution"
                                    max={192}
                                    min={16}
                                    onChange={(v) => {
                                        console.log('Mesh resolution:', v)
                                        meshResolution = Math.round(v);
                                        applyTerrain();
                                    }}
                                    step={16}
                                    value={meshResolution} />
                                <SettingSwitch
                                    checked={drapeFills}
                                    hint="fills through an offscreen drape pass instead of displaced geometry"
                                    label="Drape fills (RTT)"
                                    onChange={(v) => {
                                        drapeFills = v;
                                        applyTerrain();
                                    }} />
                                <SettingSwitch
                                    checked={drapeLines}
                                    hint="same for lines; contours stay sharp through noDrapeLayerFilter"
                                    label="Drape lines"
                                    onChange={(v) => {
                                        drapeLines = v;
                                        applyTerrain();
                                    }} />
                                <SettingSlider
                                    format={(v) => (v === 0 ? 'auto' : `${Math.round(v)} px`)}
                                    label="Drape resolution"
                                    max={2048}
                                    min={0}
                                    onChange={(v) => {
                                        drapeResolution = Math.round(v);
                                        applyTerrain();
                                    }}
                                    step={256}
                                    value={drapeResolution} />
                                <SettingSwitch
                                    checked={tileEdgeStitching}
                                    hint="no ridge at a DEM tile border"
                                    label="Tile edge stitching"
                                    onChange={(v) => {
                                        tileEdgeStitching = v;
                                        applyTerrain();
                                    }} />
                                <SettingSwitch
                                    checked={seamlessTileEdges}
                                    label="Seamless tile edges"
                                    onChange={(v) => {
                                        seamlessTileEdges = v;
                                        applyTerrain();
                                    }} />
                                <SettingSwitch
                                    checked={elevationPrefetch}
                                    label="Elevation prefetch"
                                    onChange={(v) => {
                                        elevationPrefetch = v;
                                        applyTerrain();
                                    }} />
                                <SettingSwitch
                                    checked={backgroundBitmap}
                                    hint="drape the map background pattern where nothing paints"
                                    label="Background bitmap"
                                    onChange={(v) => {
                                        backgroundBitmap = v;
                                        applyTerrain();
                                    }} />
                            </Section>
                        {/if}

                        <Section title="View distance and fog">
                            <SettingSlider
                                format={(v) => (v === 0 ? 'finest' : `x${v.toFixed(1)}`)}
                                label="Tile LOD (x tangram)"
                                max={4}
                                min={0}
                                onChange={(v) => {
                                    tileLodFactor = v;
                                    applyView();
                                }}
                                step={0.1}
                                value={tileLodFactor} />
                            <SettingSlider
                                format={(v) => `${Math.round(v)} levels`}
                                label="Tile coarsening"
                                max={8}
                                min={0}
                                onChange={(v) => {
                                    tileCoarsening = Math.round(v);
                                    applyView();
                                }}
                                step={1}
                                value={tileCoarsening} />
                            <SettingSlider
                                format={(v) => (v === 0 ? 'all' : `x${v.toFixed(1)}`)}
                                label="View distance (x tangram)"
                                max={6}
                                min={0}
                                onChange={(v) => {
                                    viewDistanceFactor = v;
                                    applyView();
                                }}
                                step={0.5}
                                value={viewDistanceFactor} />
                            <SettingSlider
                                format={(v) => (v === 0 ? 'use the factor' : `${Math.round(v / 1000)} km`)}
                                label="View distance (absolute)"
                                max={300000}
                                min={0}
                                onChange={(v) => {
                                    viewDistanceMeters = v;
                                    applyView();
                                }}
                                step={10000}
                                value={viewDistanceMeters} />
                            <SettingSwitch
                                checked={fog}
                                label="Fog"
                                onChange={(v) => {
                                    fog = v;
                                    applyView();
                                }} />
                            <SettingSlider
                                format={(v) => `${Math.round(v / 1000)} km`}
                                label="Fog start"
                                max={40000}
                                min={0}
                                onChange={(v) => {
                                    fogStart = v;
                                    applyView();
                                }}
                                step={500}
                                value={fogStart} />
                            <SettingSlider
                                format={(v) => `${Math.round(v / 1000)} km`}
                                label="Fog full at"
                                max={200000}
                                min={5000}
                                onChange={(v) => {
                                    fogDistance = v;
                                    applyView();
                                }}
                                step={5000}
                                value={fogDistance} />
                            <SettingSlider
                                format={(v) => `${Math.round(v)} deg`}
                                label="Fog horizon blend"
                                max={40}
                                min={0}
                                onChange={(v) => {
                                    fogHorizonBlend = v;
                                    applyView();
                                }}
                                step={1}
                                value={fogHorizonBlend} />
                            <SettingSlider
                                format={(v) => (v < 0 ? 'from the skyline' : `${Math.round(v)} deg`)}
                                label="Fog horizon angle"
                                max={30}
                                min={-1}
                                onChange={(v) => {
                                    fogHorizonAngle = v;
                                    applyView();
                                }}
                                step={1}
                                value={fogHorizonAngle} />
                            {#if !ownsSky}
                                <SettingSwitch
                                    checked={skyEnabled}
                                    label="Sky"
                                    onChange={(v) => {
                                        skyEnabled = v;
                                        applyView();
                                    }} />
                            {/if}
                        </Section>

                        <Section title="Debug">
                            <SettingSwitch
                                checked={tileBorders}
                                hint="one outline per tile, colour per zoom, half opacity for a substituted tile"
                                label="Tile borders"
                                onChange={(v) => {
                                    tileBorders = v;
                                    map.getOptions().debugTileBorders = v;
                                }} />
                        </Section>
                    </stackLayout>
                </scrollView>
            </gridLayout>
        </bottomsheet>
    </drawer>
</page>
