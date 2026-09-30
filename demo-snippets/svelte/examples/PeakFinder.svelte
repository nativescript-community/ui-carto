<script lang="ts">
    /**
     * The SDK's web peak finder (web/examples/peak-finder.mjs) with the host's buttons in place of its
     * chrome. peak-finder/look.ts is written by the SDK's scripts/gen-peak-finder-assets.mjs.
     */
    import { Screen } from '@nativescript/core';
    import { api } from '@nativescript-community/ui-massifmaps';
    import type { MassifLayer, MassifObject } from '@nativescript-community/ui-massifmaps/api';
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { demTiles, vectorTiles } from './shared';
    import { groundElevation } from './peak-finder/ground';
    import { INK_SHADER, SUMMITS_CSS, SURFACE_SHADER } from './peak-finder/look';
    import { createSky, toCompass } from './peak-finder/sun';

    // The ink pass: silhouettes only (operator 2), a heavier skyline. Uniforms left out read zero.
    const INK = {
        uOperator: 2, uOutlineGain: 12, uOutlinePower: 1, uOutlineFloor: 0.008, uOutlineCeiling: 1, uOutlineWidth: 1,
        uIntensity: 0.8, uHorizonBoost: 0.9, uHorizonWidth: 2.5, uDepthThreshold: 1, uCreaseThreshold: 0.12,
        uRidgeStrength: 2, uRidgeThreshold: 0.05, uRidgeGroundSpan: 90, uDepthTexelSize: 2, uGrazingFloor: 0.15,
        uInkDistance: 50000, uMetersPerUnit: 40075016.68558 / (1 << 20), uSilhouetteGate: 865, uHazeDistance: 60000,
        uDistortCenterX: 0.5, uDistortCenterY: 0.5, uDistortScreenTanX: 1, uDistortScreenTanY: 1, uDistortRenderTanX: 1, uDistortRenderTanY: 1
    };
    // The surface: ridge ink capped by the light, and a touch of hillshade after the cap.
    const SURFACE = { uAmbient: 0.06, uInkCap: 0.3, uRidgeInkStrength: 0.3, uHillshade: 0.15 };

    interface Peak {
        name: string;
        ele?: string;
        lon: number;
        lat: number;
    }

    /** The row the names hang from, low enough for a name wrapped at 70 px to fit above it (look.mjs labelBand). */
    function labelBand(heightDp: number) {
        const width = 70 + 13 * 2.5 + 10;
        const row = width * Math.sin(Math.PI / 4) + (13 * 2.6 + 4) * Math.cos(Math.PI / 4) + 10;
        return heightDp > 0 ? Math.min(0.9, row / heightDp) : 0.2;
    }

    const toRad = Math.PI / 180;
    function bearing(from: { lat: number; lon: number }, to: { lat: number; lon: number }) {
        const y = Math.sin((to.lon - from.lon) * toRad) * Math.cos(to.lat * toRad);
        const x = Math.cos(from.lat * toRad) * Math.sin(to.lat * toRad) - Math.sin(from.lat * toRad) * Math.cos(to.lat * toRad) * Math.cos((to.lon - from.lon) * toRad);
        return Math.atan2(y, x) / toRad;
    }
    function distance(from: { lat: number; lon: number }, to: { lat: number; lon: number }) {
        const a = Math.sin(((to.lat - from.lat) * toRad) / 2) ** 2 + Math.cos(from.lat * toRad) * Math.cos(to.lat * toRad) * Math.sin(((to.lon - from.lon) * toRad) / 2) ** 2;
        return 2 * 6371008.8 * Math.asin(Math.sqrt(a));
    }

    async function start(host: ExampleHost) {
        const map = host.map;
        // The viewpoint: Grenoble, 400 m up, looking east at Belledonne - rotation is minus the heading.
        const view = { lat: 45.1885, lon: 5.7245, eye: 400, rotation: -100, tilt: -4, fov: 46 };

        // The terrain, and everything decided when its meshes are built: geo-three's cut (subdivide
        // distance 70, levels to 17) and mesh, no stitching, drawn 173 km out.
        const terrain = map.terrain({
            type: 'terrain',
            source: demTiles(),
            autoFlattenTilt: 0, autoFlattenParallax: 0,
            meshResolution: 171, tileEdgeStitchingEnabled: false, subdivideDistance: 70, maxZoom: 17,
            viewDistance: 173000, meshCacheSize: 640, normalSampleDistance: 40, postProcessDownscale: 1,
            // The picture is the surface shader, so nothing is draped over it; the one layer is billboards.
            surfaceShaderSource: SURFACE_SHADER, backgroundColor: 0xffffffff,
            sharedGroundEnabled: false, drapeFillsEnabled: false, drapeLinesEnabled: false,
            billboardOcclusionEnabled: true, billboardOcclusionTolerance: 0.15, maxTileZoomCoarsening: 4
        });
        const terrainObject = map.child('terrainOptions')!;
        for (const [name, value] of Object.entries(SURFACE)) {
            terrainObject.call('setSurfaceParameter', name, value);
        }

        // The ink is a post-process over the frame, reading the terrain's depth.
        map.camera();
        const mapView = api.find('view', `${map.id}:view`, 'massif::BaseMapView')!;
        const ink = map.object('effect', 'relief', { type: 'postprocess', name: 'relief', fragmentShader: INK_SHADER, terrainDepthRequired: true });
        for (const [name, value] of Object.entries(INK)) {
            ink.call('setFloatParameter', name, value);
        }
        mapView.set('mapRenderer.postProcessEffect', ink.handle);

        // No sky, no background pattern: the panorama is read against the paper.
        map.apply({ skyColor: 0x00000000, clearColor: 0xffffffff, backgroundBitmap: 0 as never, labelPadding: 200 });
        map.light({ type: 'light', sunAzimuth: 315, sunAltitude: 45 });

        // First person: the position IS the eye and a drag turns the view about it. A panorama looks at
        // the horizon, so the tilt range opens above it too (tilt 90 is straight down).
        map.apply({ freeRoamMode: 'FREE_ROAM_MODE_FIRST_PERSON', tiltRange: [-90, 90] });
        const setFov = (degrees: number) => {
            view.fov = degrees;
            map.set('fieldOfViewY', degrees);
            // The ridge term's tap spacing: radians per screen pixel.
            terrainObject.call('setSurfaceParameter', 'uPixelAngle', (degrees * toRad) / Math.max(map.size().height, 1));
        };
        // The eye stands focusLift over the ground under it, which the renderer keeps every frame.
        const placeCamera = () => {
            mapView.call('moveCameraTo', [view.lon, view.lat, 0], 13, view.rotation, view.tilt);
            terrain.set('focusLift', view.eye);
        };
        setFov(view.fov);
        placeCamera();

        const turnTo = (rotation: number) => {
            view.rotation = rotation;
            view.tilt = map.camera().tilt();
            placeCamera();
        };

        // THE SUMMIT NAMES: OpenMapTiles' mountain_peak, and a style that puts every name in one row
        // above the skyline. The eye's altitude is baked into the style's rank, so a new viewpoint is
        // a new style - and the selected summit is a style parameter, set on the live one.
        const summits = map.source('peaks', vectorTiles());
        const skyBelow = map.add(map.buildLayer('sky', { type: 'celestial' }), 0);
        const skyAbove = map.addLayer('sky.top', { type: 'celestial' });
        let ground = await groundElevation(view.lat, view.lon);
        // Placed again once the ground is known: an eye placed before the viewpoint's elevation
        // arrived stays where it was put until the camera next moves.
        Object.assign(view, { rotation: map.camera().rotation(), tilt: map.camera().tilt() });
        placeCamera();
        let generation = 0;
        let current: { layer: MassifLayer; style: MassifObject } | null = null;
        let selected: Peak | null = null;
        const selectedKey = () => (selected ? `${selected.name}|${selected.ele ?? ''}` : '');
        const rebuildPeaks = () => {
            generation += 1;
            const band = labelBand(map.size().height / Screen.mainScreen.scale);
            const css = `@eye_elevation: ${Math.round(ground + view.eye)};\n@label_band: ${band.toFixed(3)};\n${SUMMITS_CSS}`;
            const style = map.style(`peaks.style.${generation}`, { type: 'mbvt', cartocss: { type: 'cartocss', css } });
            style.set('params.selected_peak', selectedKey());
            const layer = map.add(
                map.buildLayer(`peaks.layer.${generation}`, {
                    type: 'vector', source: summits.handle, style: style.handle, preloading: true,
                    labelRenderOrder: 'VECTOR_TILE_RENDER_ORDER_LAST', tileSubstitutionPolicy: 'TILE_SUBSTITUTION_POLICY_VISIBLE'
                }),
                map.layerCount() - 1
            );
            layer.onFeatureClick((e) => {
                const position = e.getPos('featurePos') as [number, number];
                const name = e.get('feature.properties.name');
                if (name && position) {
                    const ele = e.get('feature.properties.ele');
                    select({ name: String(name), ele: ele != null ? String(ele) : undefined, lon: position[0], lat: position[1] });
                }
            });
            if (current) {
                map.removeLayer(current.layer);
                current.layer.destroy();
                current.style.destroy();
            }
            current = { layer, style };
        };
        rebuildPeaks();

        const select = (peak: Peak | null) => {
            selected = peak;
            current?.style.set('params.selected_peak', selectedKey());
        };
        // Standing on the summit, facing the way it was seen from.
        const flyTo = async (peak: Peak) => {
            view.rotation = -bearing(view, peak);
            Object.assign(view, { lat: peak.lat, lon: peak.lon });
            select(null);
            placeCamera();
            ground = await groundElevation(view.lat, view.lon);
            placeCamera();
            rebuildPeaks();
        };

        let riseSet = '';
        let hours = false;
        const updateSky = createSky(map, terrainObject, skyBelow, skyAbove, Screen.mainScreen.scale, (text) => (riseSet = text));

        host.button('North', () => turnTo(0));
        host.button('Look at', () => selected && turnTo(-bearing(view, selected)));
        host.button('Fly to', () => selected && flyTo(selected));
        host.toggle('Hours', false, (on) => (hours = on));
        host.slider('eye height, m', 0, 4000, view.eye, (metres) => {
            view.eye = metres;
            terrain.set('focusLift', metres);
        });
        host.slider('field of view', 5, 120, view.fov, setFov);

        // The heading, the rise and set, and the selected summit, refreshed as the view turns.
        const tick = () => {
            const camera = map.camera();
            view.rotation = camera.rotation();
            view.tilt = camera.tilt();
            const now = new Date();
            const day = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
            updateSky({ ...view, day, minute: now.getHours() * 60 + now.getMinutes(), hours });
            const heading = ((-view.rotation % 360) + 360) % 360;
            let text = `${Math.round(heading) % 360}° ${toCompass(heading)}  ·  ${riseSet}`;
            if (selected) {
                const km = distance(view, selected) / 1000;
                const toPeak = (bearing(view, selected) + 360) % 360;
                text += `\n${selected.name}  ·  ${selected.ele ? `${selected.ele} m  ·  ` : ''}${km.toFixed(1)} km  ·  ${Math.round(toPeak)}° ${toCompass(toPeak)}`;
            } else {
                text += '\nDrag to look around, tap a summit name.';
            }
            host.caption(text);
            host.after(200, tick);
        };
        tick();
    }
</script>

<ExampleShell id="peak-finder" {start} title="Peak finder" />
