<script lang="ts">
    /**
     * The flagship: satellite imagery draped over 3D terrain, with roads and summits on top.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { UA, demTiles, overlayStyle, vectorTiles } from './shared';

    /**
     * Looking SOUTH at the Matterhorn from high over Zermatt.
     *
     * Composed against three constraints that fight each other: a LOW tilt drops the camera into
     * the slope, a CLOSE zoom hits the terrain's camera clearance and swings the view into a
     * hillside, and a HIGH tilt buries the pyramid in the ridge behind it. This is the window
     * where all three are satisfied. In this SDK tilt 90 is straight down, so a landscape view is
     * a LOW tilt.
     */
    const VIEW: [number, number] = [7.6586, 45.9763];

    function start(host: ExampleHost) {
        const map = host.map;

        // Imagery underneath. The {y}/{x} order is this server's; the template substitutes by
        // name, so any order works.
        map.addLayer('satellite', {
            type: 'raster',
            source: {
                type: 'http',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                maxZoom: 18,
                HTTPHeaders: { 'User-Agent': UA }
            }
        });

        // Roads, place names and summits ON TOP, from a style with no background of its own.
        map.addLayer('labels', { type: 'vector', source: vectorTiles(), style: overlayStyle() });

        // apply, not three sets: one crossing for the whole group.
        //
        // viewDistanceFactor is how far the ground goes on, in multiples of the camera-to-focus
        // distance, so one value holds at every zoom - pair a short one with fog or the ground
        // ends on an edge. cameraClearance is normally 200 m, which swings a close view into the
        // nearest hillside; lowered so the camera can sit among the peaks.
        map.terrain({ type: 'terrain', source: demTiles() }).apply({
            exaggeration: 1.25,
            viewDistanceFactor: 1.6,
            cameraClearance: 40
        });

        // Options starts with these EMPTY, so they are BUILT here rather than written through.
        map.sky({ type: 'sky' });
        map.fog({ type: 'fog', rangeStart: 2.2, rangeEnd: 8 });
        // The sun has to come from BEHIND the camera, or the face being looked at is the one in
        // shadow: this view is of the north side, so the light is north-west. Mid altitude,
        // because a low sun here puts the whole massif in its own shadow.
        map.light({
            type: 'light',
            terrainLightingEnabled: true,
            sunAzimuth: 315,
            sunAltitude: 42,
            shadowStrength: 0.35,
            shadowSoftness: 1.5
        });

        map.camera().moveTo(VIEW, { zoom: 11.5, rotation: 180, tilt: 33 });

        // A path off the map itself, with the readable spelling: 'terrain' is an alias for
        // 'terrainOptions', so this is map.set('terrainOptions.enabled', on).
        host.toggle('Terrain', true, (on) => map.set('terrain.enabled', on));
        host.toggle('Labels', true, (on) => map.layer('labels')?.visible(on));
        host.button('Exaggerate', () => {
            const current = map.terrain().get('exaggeration');
            map.terrain().set('exaggeration', current >= 2 ? 1 : current + 0.35);
        });
        host.caption('The Matterhorn. Imagery on the mesh, roads and summits above it.');
    }
</script>

<ExampleShell id="terrain-3d" {start} title="3D terrain, hybrid" />
