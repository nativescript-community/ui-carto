<script lang="ts">
    /**
     * Peak finder: the panorama view of the native demo (DemoMap.setPeakFinderMode /
     * flyToPeakFinder), one switch at a time.
     *
     * It is not a single API - it is a combination, and each piece on its own looks like
     * nothing happens:
     *
     *  - the shaded terrain SURFACE only shows where NO tile layer paints, so the mode
     *    turns every map layer off;
     *  - the ridge lines are a POST-PROCESS effect reading the packed terrain depth -
     *    without it the surface is a grey wash, which is what the old demo showed;
     *  - summit names need a view that has summits in it, so the camera is put near the
     *    ground looking at the horizon (in this SDK tilt 90 is straight down, so a
     *    panorama is a LOW tilt) and lifted a few hundred metres above it;
     *  - and a panorama wants the far ranges, which is what viewDistanceFactor buys.
     *
     * Entering the mode is one flight: the camera flies to the current focus at the
     * panorama's zoom and tilt while the viewpoint climbs, and the terrain, the relief and
     * the names come up on the same clock.
     */
    import { PostProcessEffect } from '@nativescript-community/ui-massifmaps/renderers';
    import { FogOptions, SkyOptions, TerrainOptions } from '@nativescript-community/ui-massifmaps/components';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    import type { ShellContext } from './common/MapShell.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { peaksLayer, standardLayers } from './common/layers';
    import { RELIEF_DEFAULTS, RELIEF_OUTLINE_SHADER, RELIEF_PALETTE, RELIEF_SURFACE_SHADER } from './common/shaders';
    import { PEAK_FINDER_VIEWPOINT } from './common/sources';

    /** the mode's own camera, straight from DemoConfig.PEAK_FINDER_* */
    const PANORAMA_TILT = 25;
    const FLY_ELEVATION = 1000;
    const FLY_ZOOM = 13.6;
    const FLY_CLIMB = 1500;
    const FLY_DURATION = 3500;

    let map: MassifMap;
    let shell: ShellContext;
    let terrain: TerrainOptions;
    let sky: SkyOptions;
    let fog: FogOptions;
    let effect: PostProcessEffect;
    let status = '';

    let peakFinder = true;
    let dark = false;
    /** metres the viewpoint is lifted above the ground */
    let elevation = FLY_ELEVATION;
    /** how far behind the terrain a label anchor may sit and still be labelled, as a
     *  fraction of its distance. 0.02 is the SDK default; a summit right ON a ridge is
     *  exactly what this view is for, so the mode is deliberately generous. */
    let occlusion = 0.15;
    /** as a multiple of tangram's rule; a panorama is the case their rule answers badly */
    let viewDistance = 3;
    let outlineWidth = RELIEF_DEFAULTS.outlineWidth;
    let creaseStrength = RELIEF_DEFAULTS.creaseStrength;
    let horizonBoost = RELIEF_DEFAULTS.horizonBoost;

    // --- summit labels. Every one of these is style TEXT, so changing one needs a new
    // decoder - which is what `rebuildPeaks()` does, the same way the native demo's
    // rebuildPeaksLayer() does.
    let pinTop = true;
    let labelBand = 0.25;
    let labelAngle = 55;
    let maxRows = 1;
    let maxDistance = 0;

    $: palette = dark ? RELIEF_PALETTE.dark : RELIEF_PALETTE.light;

    const baseMap = createBaseMap({}, { enabled: false });
    // the shaded surface only shows where NO tile layer paints, so the base map starts off.
    // The peak labels are this demo's own, because their style is driven from the sheet.
    const peaks = peaksLayer(undefined, { enabled: true });
    peaks.create = (m) => peaksLayer({ dark, pinTop, band: labelBand, textAngle: labelAngle, maxRows, maxDistance }).create(m);
    const layers = [baseMap.spec, ...standardLayers(PEAK_FINDER_VIEWPOINT).filter((spec) => spec.id !== 'peaks'), peaks];

    /** the peak labels are style-driven, so every callout knob needs a NEW decoder */
    function rebuildPeaks() {
        shell.invalidateLayer('peaks');
        shell.rebuildLayers();
    }

    function configureTerrain(t: TerrainOptions) {
        t.meshResolution = 128;
        t.billboardOcclusionEnabled = true;
        t.billboardOcclusionTolerance = occlusion;
        t.viewDistanceFactor = viewDistance;
    }

    /** the haze the panorama fades into - a long one, and the paper's colour in relief mode */
    function applyFog() {
        if (!fog) {
            return;
        }
        fog.enabled = true;
        fog.rangeStart = 20000;
        fog.rangeEnd = 120000;
        fog.color = palette.paper;
    }

    function applyReliefSurface() {
        if (!terrain) {
            return;
        }
        if (!peakFinder) {
            terrain.setSurfaceShaderSource('');
            return;
        }
        terrain.setSurfaceShaderSource(RELIEF_SURFACE_SHADER);
        terrain.setSurfaceColorParameter('uPaperColor', palette.paper);
        terrain.setSurfaceColorParameter('uShadeColor', palette.shade);
        terrain.setSurfaceParameter('uShadeStrength', RELIEF_DEFAULTS.shadeStrength);
        terrain.setSurfaceParameter('uAmbient', RELIEF_DEFAULTS.ambient);
        terrain.setSurfaceParameter('uHaze', RELIEF_DEFAULTS.haze);
        terrain.setSurfaceParameter('uHazeDistance', RELIEF_DEFAULTS.hazeDistance);
        applyFog();
    }

    /**
     * The ridge lines. The SDK gives the mechanism - an offscreen frame, the packed
     * terrain depth and named parameters - and the shader is the look.
     */
    function applyReliefOutline() {
        if (!map) {
            return;
        }
        if (!peakFinder) {
            effect = null;
            map.setPostProcessEffect(null);
            return;
        }
        if (!effect) {
            effect = new PostProcessEffect({ name: 'relief_outline', fragmentShader: RELIEF_OUTLINE_SHADER });
            effect.terrainDepthRequired = true;
        }
        effect.setFloatParameter('uIntensity', 1);
        effect.setFloatParameter('uOutlineWidth', outlineWidth);
        effect.setFloatParameter('uHorizonBoost', horizonBoost);
        effect.setFloatParameter('uDepthThreshold', RELIEF_DEFAULTS.depthThreshold);
        effect.setFloatParameter('uCreaseStrength', creaseStrength);
        effect.setFloatParameter('uHaze', RELIEF_DEFAULTS.haze);
        // The depth texture is half resolution, and the two below are what keep the
        // horizon the boldest line: the silhouette test is relaxed by the grazing angle,
        // and terrain-vs-terrain lines fade with distance while the sky's do not.
        effect.setFloatParameter('uDepthTexelSize', 2);
        effect.setFloatParameter('uGrazingFloor', 0.15);
        effect.setFloatParameter('uDistanceFade', 0.45);
        effect.setColorParameter('uInkColor', palette.ink);
        effect.setColorParameter('uPaperColor', palette.paper);
        map.setPostProcessEffect(effect);
    }

    function applySky() {
        if (!sky) {
            return;
        }
        // In the relief view the sky is part of the palette: a light one over the paper,
        // a night one over the ink.
        sky.enabled = true;
        sky.shaderSource = '';
        sky.skyColor = peakFinder ? palette.sky : '#4a90d9';
        sky.horizonColor = peakFinder ? palette.paper : '#bcd9f2';
        map.getOptions().skyColor = peakFinder ? palette.sky : '#4a90d9';
    }

    /**
     * Lifts the viewpoint by `elevation` metres. The focus position carries a height and
     * the camera rides on it, so raising the focus raises the eye - see over the ridge in
     * front of you. The z is in the base projection's units and one metre is worth more of
     * them the further from the equator (mercator), hence the latitude term.
     */
    function viewpointPos(metresAboveGround: number) {
        const focus = map.getFocusPos();
        let ground = 0;
        if (terrain) {
            const sample = terrain.getElevation(focus);
            if (sample > -100000) {
                ground = sample;
            }
        }
        return {
            latitude: focus.latitude,
            longitude: focus.longitude,
            altitude: (ground + metresAboveGround) / Math.cos((focus.latitude * Math.PI) / 180)
        };
    }

    function applyViewpointElevation() {
        if (!map) {
            return;
        }
        map.setFocusPos(viewpointPos(elevation), 300);
    }

    /** the whole mode in one switch, exactly as the native demo does it */
    function setPeakFinderMode(on: boolean) {
        peakFinder = on;
        // the shaded surface only shows where no tile layer paints
        shell.setLayerEnabled('base', !on);
        shell.setLayerEnabled('peaks', on);
        terrain.billboardOcclusionTolerance = on ? occlusion : 0;
        terrain.viewDistanceFactor = on ? viewDistance : 1;
        applyReliefSurface();
        applyReliefOutline();
        applySky();
        if (!on) {
            elevation = 0;
            applyViewpointElevation();
            map.setTilt(60, 600);
        }
        status = on ? 'peak finder on' : 'peak finder off - plain map';
    }

    /**
     * Enters the mode from wherever the map is, as ONE move: MapView.flyTo pulls back over
     * a long move and comes down at the target, and the climb makes the viewpoint rise
     * over the way there like a plane instead of straight to its final elevation.
     */
    function flyToPeakFinder() {
        setPeakFinderMode(true);
        elevation = FLY_ELEVATION;
        map.flyTo(viewpointPos(FLY_ELEVATION), {
            zoom: FLY_ZOOM,
            tilt: PANORAMA_TILT,
            climbHeight: FLY_CLIMB,
            duration: FLY_DURATION
        });
        status = 'flying in...';
    }

    function togglePeakFinder() {
        if (peakFinder) {
            setPeakFinderMode(false);
        } else {
            flyToPeakFinder();
        }
    }

    function setup(m: MassifMap, ctx: ShellContext) {
        map = m;
        shell = ctx;
        terrain = ctx.terrain;
        fog = ctx.fog;
        applyFog();

        sky = new SkyOptions();
        m.setSkyOptions(sky);

        applyReliefSurface();
        applyReliefOutline();
        applySky();
        // start where a peak finder starts: on the ground, looking at the skyline
        m.setTilt(PANORAMA_TILT, 0);
        applyViewpointElevation();
        status = 'relief surface + ridge lines + summit names';
    }
</script>

<MapShell
    {baseMap}
    bearing={70}
    {configureTerrain}
    exaggeration={1.1}
    focusPos={PEAK_FINDER_VIEWPOINT}
    {layers}
    lookUpLimit={90}
    {setup}
    {status}
    ownsSky={true}
    terrain3D={true}
    tilt={PANORAMA_TILT}
    title="Peak finder"
    viewMode="fps"
    zoom={FLY_ZOOM}>
    <label class="overlay-button" slot="overlay" text={peakFinder ? 'leave peak finder' : 'fly to peak finder'} on:tap={togglePeakFinder} />

    <stackLayout slot="settings">
        <label class="section-title" text="Peak finder" />
        <SettingSwitch checked={peakFinder} hint="relief surface + outline + names, every layer off" label="Peak finder mode" onChange={setPeakFinderMode} />
        <SettingSwitch
            checked={dark}
            hint="paper on ink instead of ink on paper"
            label="Dark palette"
            onChange={(v) => {
                dark = v;
                applyReliefSurface();
                applyReliefOutline();
                applySky();
                rebuildPeaks();
            }} />
        <SettingSlider
            format={(v) => `${Math.round(v)} m`}
            label="Viewpoint elevation"
            max={3000}
            min={0}
            onChange={(v) => {
                elevation = v;
                applyViewpointElevation();
            }}
            step={50}
            value={elevation} />
        <SettingSlider
            label="Label occlusion tolerance"
            max={0.5}
            min={0}
            onChange={(v) => {
                occlusion = v;
                terrain.billboardOcclusionTolerance = v;
            }}
            step={0.01}
            value={occlusion} />
        <SettingSlider
            label="View distance factor"
            max={6}
            min={0.5}
            onChange={(v) => {
                viewDistance = v;
                terrain.viewDistanceFactor = v;
            }}
            step={0.5}
            value={viewDistance} />

        <label class="section-title" text="Summit labels" />
        <SettingSwitch
            checked={pinTop}
            hint="a row under the screen edge, instead of a band lower down"
            label="Pinned to the top"
            onChange={(v) => {
                pinTop = v;
                rebuildPeaks();
            }} />
        <SettingSlider
            format={(v) => `${(v * 100).toFixed(0)}% of the screen`}
            label="Label band"
            max={0.6}
            min={0}
            onChange={(v) => {
                labelBand = v;
                rebuildPeaks();
            }}
            step={0.05}
            value={labelBand} />
        <SettingSlider
            format={(v) => `${Math.round(v)} deg`}
            label="Label angle"
            max={90}
            min={0}
            onChange={(v) => {
                labelAngle = v;
                rebuildPeaks();
            }}
            step={5}
            value={labelAngle} />
        <SettingSlider
            format={(v) => String(Math.round(v))}
            label="Stacking rows"
            max={4}
            min={1}
            onChange={(v) => {
                maxRows = Math.round(v);
                rebuildPeaks();
            }}
            step={1}
            value={maxRows} />
        <SettingSlider
            format={(v) => (v === 0 ? 'no limit' : `${Math.round(v / 1000)} km`)}
            label="Max label distance"
            max={300000}
            min={0}
            onChange={(v) => {
                maxDistance = v;
                rebuildPeaks();
            }}
            step={10000}
            value={maxDistance} />

        <label class="section-title" text="Outline effect" />
        <SettingSlider
            label="Line width"
            max={4}
            min={0.5}
            onChange={(v) => {
                outlineWidth = v;
                applyReliefOutline();
            }}
            step={0.1}
            value={outlineWidth} />
        <SettingSlider
            label="Horizon boost"
            max={6}
            min={0}
            onChange={(v) => {
                horizonBoost = v;
                applyReliefOutline();
            }}
            step={0.1}
            value={horizonBoost} />
        <SettingSlider
            label="Crease strength"
            max={1}
            min={0}
            onChange={(v) => {
                creaseStrength = v;
                applyReliefOutline();
            }}
            step={0.05}
            value={creaseStrength} />
    </stackLayout>
</MapShell>
