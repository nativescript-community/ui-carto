<script lang="ts">
    /**
     * Switching between a flat map and a 3D view as ONE animation: the camera flies while the
     * terrain rises under it.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { demTiles, osmRaster } from './shared';

    /** What the 3D view looks AT. The viewpoint it is seen from is derived - see frameFlatStart. */
    const SUMMIT: [number, number] = [7.6586, 45.9763];

    const ZOOM = 12.5;
    /**
     * One rotation for both states: north up flat, looking north tilted. A switch that also spun
     * the map 180 degrees made it impossible to tell where you had come out.
     */
    const ROTATION = 0;
    /** tilt 90 is straight down in this SDK, so 2D is 90 and a landscape view is a LOW tilt. */
    const TILT_2D = 90;
    const TILT_3D = 20;
    const FLIGHT_SECONDS = 2.5;
    /** How often the terrain height is stepped to follow the flight. */
    const TICK_MS = 32;

    function start(host: ExampleHost) {
        const map = host.map;
        let in3D = false;
        let animating = false;

        map.addLayer('basemap', { type: 'raster', source: osmRaster() });

        // Built flat: terrain off, and the height at 0 so the first rise starts from nothing. The
        // automatic flattening has to be out of the way, or it flattens the map again the moment
        // the tilt passes 88.
        map.terrain({ type: 'terrain', source: demTiles() }).apply({
            enabled: false,
            exaggeration: 0,
            autoFlattenTilt: 0,
            autoFlattenParallax: 0,
            cameraClearance: 40
        });
        map.sky({ type: 'sky' });
        map.fog({ type: 'fog', rangeStart: 2.2, rangeEnd: 8 });
        // The sun comes from BEHIND the camera or the face being looked at is the one in shadow.
        // This view is of the SOUTH side, so the light is south.
        map.light({
            type: 'light',
            terrainLightingEnabled: true,
            sunAzimuth: 170,
            sunAltitude: 42
        });

        /**
         * Opens the flat map exactly where a round trip through 3D lands, which is what makes the
         * first flight identical to every later one.
         *
         * That place cannot be a constant: the camera stands cameraDistance * cos(tilt) from its
         * focus, and cameraDistance comes from the viewport, so it differs per screen. So put the
         * camera where 3D would put it, ask where that left it standing, and drop to top-down there.
         */
        function frameFlatStart() {
            map.camera().moveTo(SUMMIT, { zoom: ZOOM, rotation: ROTATION, tilt: TILT_3D });
            map.camera().moveTo(map.camera().eyePosition(), {
                zoom: ZOOM,
                rotation: ROTATION,
                tilt: TILT_2D
            });
        }
        frameFlatStart();

        /** Steps the terrain height with the flight's own progress, and settles when it lands. */
        function ramp(rising: boolean) {
            host.after(TICK_MS, () => {
                if (map.camera().isMoving()) {
                    const progress = map.camera().progress();
                    map.terrain().set('exaggeration', rising ? progress : 1 - progress);
                    ramp(rising);
                    return;
                }
                map.terrain().set('exaggeration', rising ? 1 : 0);
                if (!rising) {
                    // Only now, with the map already flat: flipping the flag re-decodes every tile,
                    // and at exaggeration 0 there is nothing of that to see.
                    map.terrain().set('enabled', false);
                }
                in3D = rising;
                animating = false;
                host.caption(
                    rising
                        ? '3D. Tap to go back to the flat map.'
                        : 'Flat, top-down. Tap to rise into the terrain.'
                );
            });
        }

        function riseTo3D() {
            // The flight goes FIRST. Turning the terrain on clears every tile cache, and that
            // re-decode landing on the flight's frame zero starved it of frames - the first switch
            // jumped while every later one animated, because only the first one is cold. Started a
            // tick later it lands during the rise instead, where the exaggeration is still near 0
            // and a flat-decoded tile renders exactly like the 2D map. The flight is never made to
            // wait (https://github.com/massif-maps/MassifMaps/issues/177 removes the re-decode).
            map.camera()
                .animate(FLIGHT_SECONDS)
                .moveTo(SUMMIT, { zoom: ZOOM, rotation: ROTATION, tilt: TILT_3D });
            host.after(TICK_MS, () => map.terrain().set('enabled', true));
            // The terrain follows the FLIGHT rather than a clock of its own, so the two cannot
            // drift apart if the flight is interrupted or the frame rate drops.
            ramp(true);
            host.caption('Rising. The terrain follows the flight, not a separate clock.');
        }

        function flattenTo2D() {
            // Where the camera IS, not what it is looking at: at tilt 20 the focus is kilometres
            // out in front, so re-centring on it would jump the map forward. This is the viewpoint.
            const eye = map.camera().eyePosition();
            map.camera()
                .animate(FLIGHT_SECONDS)
                .moveTo(eye, { zoom: ZOOM, rotation: ROTATION, tilt: TILT_2D });
            ramp(false);
            host.caption('Back down, centred on where the camera was standing.');
        }

        host.button('2D / 3D', () => {
            if (animating) {
                return;
            }
            animating = true;
            if (in3D) {
                flattenTo2D();
            } else {
                riseTo3D();
            }
        });
        host.caption('Flat, top-down. Tap to rise into the terrain.');
    }
</script>

<ExampleShell id="terrain-2d-3d" {start} title="2D / 3D switch" />
