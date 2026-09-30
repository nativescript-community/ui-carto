<script lang="ts">
    /**
     * The hour drives the whole palette, and the curve that decides how is the app's to replace.
     *
     * Massif is written to be lit by the hour: every layer states Standard's emissive strength, so
     * the ground darkens at night while labels and lit streets keep their colour.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { demTiles, massifStyle, vectorTiles } from './shared';


    /**
     * A curve is a list of lights anchored on SUN HEIGHTS, and the SDK interpolates between them.
     * Empty means the built-in one, which is MapBox Standard's own four light setups.
     *
     * The second is the same machinery pointed somewhere else entirely. Nothing about it is a
     * special case: the SDK derives the 2D grade, the 3D sun and ambient, and the brightness a
     * style ramps its labels over from whatever this returns.
     */
    const PSYCHEDELIC = JSON.stringify([
        { sunAltitude: -15, ambientColor: '#2d0a4e', ambientIntensity: 0.7, sunColor: '#00e5ff', sunIntensity: 0.4 },
        { sunAltitude: 2, ambientColor: '#ff2d95', ambientIntensity: 0.85, sunColor: '#ff8a00', sunIntensity: 0.6 },
        { sunAltitude: 25, ambientColor: '#7cff4f', ambientIntensity: 0.9, sunColor: '#ff00d4', sunIntensity: 0.5 },
        { sunAltitude: 60, ambientColor: '#00fff0', ambientIntensity: 1.0, sunColor: '#fff700', sunIntensity: 0.45 }
    ]);

    /**
     * The BUILT-IN curves written out: MapBox Standard's four light setups, byte for byte, at the
     * sun heights the SDK anchors them at. Empty lists select exactly these.
     *
     * TWO curves, because Standard's `dawn` and `dusk` are different lights at the SAME sun height:
     * the SDK reads the setting one while the sun is west and the rising one while it is east, so
     * setting only `dayCycleLightStops` is what made a morning render as dusk.
     *
     * The doubled twilight stop holds the light FLAT from 3 to 12 degrees - that band, plus below
     * -9 and above 38, is where the curve returns a preset exactly rather than a blend of two.
     */
    const MAPBOX_SETTING = JSON.stringify([
        { sunAltitude: -9, ambientColor: '#464d69', ambientIntensity: 0.5, sunColor: '#3f4455', sunIntensity: 0.5 },
        { sunAltitude: 3, ambientColor: '#363e5e', ambientIntensity: 0.8, sunColor: '#fec286', sunIntensity: 0.2 },
        { sunAltitude: 12, ambientColor: '#363e5e', ambientIntensity: 0.8, sunColor: '#fec286', sunIntensity: 0.2 },
        { sunAltitude: 38, ambientColor: '#ffffff', ambientIntensity: 0.8, sunColor: '#ffffff', sunIntensity: 0.2 }
    ]);

    const MAPBOX_RISING = JSON.stringify([
        { sunAltitude: -9, ambientColor: '#464d69', ambientIntensity: 0.5, sunColor: '#3f4455', sunIntensity: 0.5 },
        { sunAltitude: 3, ambientColor: '#ffecdc', ambientIntensity: 0.75, sunColor: '#feca8b', sunIntensity: 0.5 },
        { sunAltitude: 12, ambientColor: '#ffecdc', ambientIntensity: 0.75, sunColor: '#feca8b', sunIntensity: 0.5 },
        { sunAltitude: 38, ambientColor: '#ffffff', ambientIntensity: 0.8, sunColor: '#ffffff', sunIntensity: 0.2 }
    ]);

    /** [name, setting curve, rising curve] - one curve for both when a formula has no dawn. */
    const FORMULAS: Array<[string, string, string]> = [
        ['Mapbox', MAPBOX_SETTING, MAPBOX_RISING],
        ['Psychedelic', PSYCHEDELIC, PSYCHEDELIC]
    ];

    /** Paris, and the camera the example opens on. */
    const LON = 2.3376;
    const LAT = 48.86;

    /**
     * The EQUINOX, as its Julian day at noon UTC (2026-03-20). On it the sun rises at 6 and sets at
     * 18 local solar time at every latitude, so the slider's hours mean the same thing anywhere.
     */
    const JULIAN_NOON = 2461120.0;

    /** Local solar time: 12 is the sun at its highest, whatever the longitude. */
    const START_HOUR = 17.4;
    /**
     * The hours that land on MapBox's four presets EXACTLY, at this camera on this date: dawn 6:48
     * (sun 6.5° and east), day 12:00 (41.1°, past the 38° stop), dusk 17:24 (7.1° and west), night
     * 22:00 (-33.9°, below the -9° stop). Anywhere else on the slider the curve blends two.
     */
    const PRESETS: Array<[string, number]> = [['dawn', 6.8], ['day', 12], ['dusk', 17.4], ['night', 22]];

    /** The SDK's own thresholds, written out because the toggle switches between them and off. */
    const AUTO_FLATTEN_TILT = 88;
    const AUTO_FLATTEN_PARALLAX = 2;

    let formula = 0;
    let hour = START_HOUR;
    let sunAltitude = 0;
    let sunAzimuth = 0;
    let preset = 2;

    /**
     * Local solar time to a sun position - the NOAA low-accuracy form, good to ~0.1 degree, which is
     * what LightOptions.setSunPositionFromTime computes in C++; the facade cannot reach that method,
     * so the example spells it out.
     */
    function sunPosition(local: number): [number, number] {
        const rad = Math.PI / 180;
        const n = JULIAN_NOON + (local - LON / 15 - 12) / 24 - 2451545.0;
        const meanAnom = (357.528 + 0.9856003 * n) * rad;
        const eclipticLong =
            (280.46 + 0.9856474 * n + 1.915 * Math.sin(meanAnom) + 0.02 * Math.sin(2 * meanAnom)) * rad;
        const obliquity = (23.439 - 0.0000004 * n) * rad;
        const rightAsc = Math.atan2(Math.cos(obliquity) * Math.sin(eclipticLong), Math.cos(eclipticLong));
        const decl = Math.asin(Math.sin(obliquity) * Math.sin(eclipticLong));

        // Greenwich mean sidereal time, then the local hour angle.
        let gmst = (18.697374558 + 24.06570982441908 * n) % 24;
        if (gmst < 0) gmst += 24;
        const hourAngle = (gmst * 15 + LON) * rad - rightAsc;

        const lat = LAT * rad;
        const altitude =
            Math.asin(Math.sin(lat) * Math.sin(decl) + Math.cos(lat) * Math.cos(decl) * Math.cos(hourAngle)) / rad;
        // atan2 here is measured from south; the SDK wants clockwise from north.
        const azimuth =
            Math.atan2(Math.sin(hourAngle), Math.cos(hourAngle) * Math.sin(lat) - Math.tan(decl) * Math.cos(lat)) /
                rad +
            180;
        return [altitude, azimuth];
    }

    async function start(host: ExampleHost) {
        const map = host.map;

        // Keep a TILTED far field uniform: a low levels-on-screen decays the grazing term more
        // slowly, so the horizon band stops jumping between levels as the camera turns.
        map.set('tileLODMaxZoomLevelsOnScreen', 6.0);

        map.addLayer('basemap', {
            type: 'vector',
            source: vectorTiles(),
            style: await massifStyle()
        });

        // A TERRAIN, for the shadows. Cast shadows are drawn from the drape pass and land on the
        // terrain surface - with no terrain there is no surface to receive them and nothing casts
        // at all, however high shadowStrength goes.
        // The auto 2D/3D thresholds are the SDK's defaults, set out loud because the toggle below
        // is what an app turns them off with.
        map.terrain({ type: 'terrain', source: demTiles() }).apply({
            exaggeration: 1,
            cameraClearance: 40,
            autoFlattenTilt: AUTO_FLATTEN_TILT,
            autoFlattenParallax: AUTO_FLATTEN_PARALLAX
        });

        // The curve is only read while this is on; off, the style's and the app's own sun colours
        // stand, which is what every map did before the curve existed.
        map.light({
            type: 'light',
            dayCycleLightsEnabled: true,
            sunOverridingStyle: true,
            // Without this the ground is never lit, and the shadow multiply lives in the same
            // block - so the buildings cast nothing.
            terrainLightingEnabled: true,
            // Buildings cast: a low sun is what the curve is most worth looking at, and it is also
            // when the shadows are longest. They follow the same sun the curve reads.
            shadowStrength: 0.35,
            shadowSoftness: 1.2
        });

        // A sky, because the hour is the whole example: the atmosphere is integrated against the
        // SAME sun, so it reddens and darkens with the slider without a value of its own. Options
        // starts with no SkyOptions, so nothing is drawn behind the map until this line.
        map.sky({ type: 'sky' });

        applyFormula();
        applyHour();
        map.camera().moveTo([LON, LAT], { zoom: 15.5, rotation: 20, tilt: 45 });

        function applyFormula() {
            // The whole formula, in two properties. An empty list is the built-in curve; a list of
            // stops replaces it, and everything the SDK derives from the light follows without a
            // re-decode - the tiles are untouched, so this is a redraw. Both are written every
            // time, or a formula without a dawn of its own would keep the previous one's.
            map.light().apply({
                dayCycleLightStops: FORMULAS[formula][1],
                dayCycleRisingLightStops: FORMULAS[formula][2]
            });
        }

        function applyHour() {
            // The curve reads a sun POSITION, and the hour is where the sun actually is then.
            [sunAltitude, sunAzimuth] = sunPosition(hour);
            map.light().apply({ sunAzimuth, sunAltitude });
        }

        /**
         * Which MapBox preset this hour actually renders. The curve only returns one EXACTLY where
         * it is flat - below -9, between 3 and 12, above 38 - and everything else is a blend of
         * two, which is why an arbitrary hour never matches a `lightPreset` screenshot.
         */
        function light(): string {
            if (formula !== 0) return 'custom curve';
            const twilight = sunAzimuth <= 180 ? 'dawn' : 'dusk';
            if (sunAltitude <= -9) return 'night';
            if (sunAltitude >= 38) return 'day';
            if (sunAltitude >= 3 && sunAltitude <= 12) return twilight;
            return sunAltitude < 3 ? `night to ${twilight}` : `${twilight} to day`;
        }

        function caption() {
            const minutes = Math.floor((hour % 1) * 60);
            host.caption(
                `${Math.floor(hour)}:${String(minutes).padStart(2, '0')} - sun ${sunAltitude.toFixed(
                    0
                )}\u00b0 - ${light()} - ${FORMULAS[formula][0]}`
            );
        }

        host.button('Formula', () => {
            formula = (formula + 1) % FORMULAS.length;
            applyFormula();
            caption();
        });
        // The HOUR, because that is what a day is: the sun walks its real arc, so dawn and dusk
        // come with the azimuth swinging round rather than being picked by hand.
        host.slider('Hour', 0, 24, START_HOUR, (value) => {
            hour = value;
            applyHour();
            caption();
        });
        // Straight to MapBox's own four, so the render can be held against theirs.
        host.button('Preset', () => {
            preset = (preset + 1) % PRESETS.length;
            [, hour] = PRESETS[preset];
            applyHour();
            caption();
        });
        // Off holds the map in 3D at any tilt: the thresholds are a pair, and a 0 disables its own
        // half of the rule. No Tilt drop button here - an INLINE style has no `param::` to drive,
        // so the drop is written straight into the Map block above.
        host.toggle('Auto 2D/3D', true, (on: boolean) => {
            map.terrain().apply({
                autoFlattenTilt: on ? AUTO_FLATTEN_TILT : 0,
                autoFlattenParallax: on ? AUTO_FLATTEN_PARALLAX : 0
            });
            host.caption(
                on
                    ? 'Auto 2D/3D on: tilt past 88\u00b0 and the map renders flat.'
                    : 'Auto 2D/3D off: the map stays 3D all the way to 90\u00b0.'
            );
        });
        host.caption(
            'One palette, no night theme: the hour picks the light, the curve picks the look. ' +
                'Zoom out past z15, or tilt to 90, and the buildings lie down.'
        );
    }
</script>

<ExampleShell id="day-cycle-light" {start} title="Light the map by the hour" />
