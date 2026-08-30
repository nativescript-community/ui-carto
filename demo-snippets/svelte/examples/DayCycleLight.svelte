<script lang="ts">
    /**
     * The hour drives the whole palette, and the curve that decides how is the app's to replace.
     *
     * Android and iOS ship the two CONVERTED styles as zipped assets (Mapbox Standard and MapTiler
     * Streets, both through `massif-style mapbox2css --live-light`). Those are megabytes of sprite
     * PNGs, so this port carries a small inline CartoCSS instead and drops the style switch; the
     * API it demonstrates - the light curve, and what every colour on the map is derived from - is
     * exactly the same.
     */
    import ExampleShell from './ExampleShell.svelte';
    import type { ExampleHost } from './host';
    import { demTiles, vectorTiles } from './shared';

    /**
     * `*-emissive-strength` is how much of a colour is EMITTED rather than lit. MapBox defaults
     * geometry to 0 - entirely at the mercy of the scene light, which is what makes a night map
     * dark - and labels to 1, which is what keeps a name legible over it. This SDK draws an
     * unstated colour as authored, so a style that wants to be lit has to say so.
     */
    const MSS = [
        'Map { background-color: #f4f1ec; background-emissive-strength: 0; }',
        '#water { polygon-fill: #8fb8d8; polygon-emissive-strength: 0; }',
        '#landcover { polygon-fill: #dbe8cc; polygon-opacity: 0.6; polygon-emissive-strength: 0; }',
        '#building { polygon-fill: #d9d0c9; polygon-emissive-strength: 0; }',
        '#transportation { line-color: #ffffff; line-emissive-strength: 0;',
        '    line-width: linear([view::zoom], (10, 0.6), (16, 5)); line-join: round; line-cap: round; }'
    ].join('\n');

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
     * The BUILT-IN curve written out: MapBox Standard's four light setups at the sun heights it
     * states them for. An empty list selects exactly this; spelled out, it shows the shape. The
     * doubled twilight stop holds the light flat from 3 to 12 degrees, so the sun passes THROUGH
     * dusk instead of crossing it.
     */
    const MAPBOX = JSON.stringify([
        { sunAltitude: -9, ambientColor: '#464d69', ambientIntensity: 0.5, sunColor: '#3f4455', sunIntensity: 0.5 },
        { sunAltitude: 3, ambientColor: '#363e5e', ambientIntensity: 0.8, sunColor: '#fec286', sunIntensity: 0.2 },
        { sunAltitude: 12, ambientColor: '#363e5e', ambientIntensity: 0.8, sunColor: '#fec286', sunIntensity: 0.2 },
        { sunAltitude: 38, ambientColor: '#ffffff', ambientIntensity: 0.8, sunColor: '#ffffff', sunIntensity: 0.2 }
    ]);

    const FORMULAS: Array<[string, string]> = [['Mapbox', MAPBOX], ['Psychedelic', PSYCHEDELIC]];

    /**
     * The SUN HEIGHT is what the curve is anchored on, so it is what the slider sweeps. An hour is
     * one step further away, and a day's worth of hours crosses the twilight band (3 to 12 degrees
     * up) in about 33 minutes - 2.3% of a 0-24 slider - so dawn and dusk cannot be dragged to.
     */
    const START_ALTITUDE = 10;
    const PRESETS: Array<[string, number, boolean]> =
        [['dawn', 40, true], ['day', 70, false], ['dusk', 10, false], ['night', -30, false]];

    let formula = 0;
    let sunAltitude = START_ALTITUDE;
    let rising = false;
    let preset = 2;

    function start(host: ExampleHost) {
        const map = host.map;

        // How far a TILTED far field may coarsen: unbounded, the grazing term makes the horizon
        // band jump between levels as the camera turns, so one side keeps its buildings and the
        // other does not. This caps the grazing half alone; distance still coarsens freely.
        map.set('tileLODForeshorteningLimit', 1.0);

        map.addLayer('basemap', {
            type: 'vector',
            source: vectorTiles(),
            style: { type: 'mbvt', cartocss: MSS }
        });

        // A TERRAIN, for the shadows. Cast shadows are drawn from the drape pass and land on the
        // terrain surface - with no terrain there is no surface to receive them and nothing casts
        // at all, however high shadowStrength goes.
        map.terrain({ type: 'terrain', source: demTiles() }).apply({ exaggeration: 1, cameraClearance: 40 });

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

        applyFormula();
        applyHour();
        map.camera().moveTo([2.3376, 48.86], { zoom: 15.5, rotation: 20, tilt: 45 });

        function applyFormula() {
            // The whole formula, in one property. An empty list is the built-in curve; a list of
            // stops replaces it, and everything the SDK derives from the light follows without a
            // re-decode - the tiles are untouched, so this is a redraw.
            map.light().apply({ dayCycleLightStops: FORMULAS[formula][1] });
        }

        function applyHour() {
            // The curve reads a sun POSITION. East of north is morning, which is what picks dawn.
            map.light().apply({ sunAzimuth: rising ? 90 : 270, sunAltitude });
        }

        function caption() {
            host.caption(`${PRESETS[preset][0]} - sun ${sunAltitude.toFixed(0)}\u00b0 - ${FORMULAS[formula][0]}`);
        }

        host.button('Formula', () => {
            formula = (formula + 1) % FORMULAS.length;
            applyFormula();
            caption();
        });
        host.slider('Sun', -30, 70, START_ALTITUDE, (value) => {
            sunAltitude = value;
            applyHour();
            caption();
        });
        // Straight to MapBox's own four, so the render can be held against theirs.
        host.button('Preset', () => {
            preset = (preset + 1) % PRESETS.length;
            [, sunAltitude, rising] = PRESETS[preset];
            applyHour();
            caption();
        });
        host.caption('One palette, no night theme: the hour picks the light, the curve picks the look.');
    }
</script>

<ExampleShell id="day-cycle-light" {start} title="Light the map by the hour" />
