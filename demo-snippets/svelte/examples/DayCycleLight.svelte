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
    import { vectorTiles } from './shared';

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

    const FORMULAS: Array<[string, string]> = [['Mapbox', ''], ['Psychedelic', PSYCHEDELIC]];

    /**
     * Four hours that land ON the curve's own anchors, so each shows a different light rather than
     * a blend: noon overhead, 17.4h ten degrees up (dusk's anchor), 22h well under, and 8.7h forty
     * degrees on the way UP - dawn, not dusk, because the azimuth has the sun east of north there.
     */
    const HOURS = [12, 17.4, 22, 8.7];
    const HOUR_NAMES = ['noon', 'dusk', 'night', 'dawn'];

    let formula = 0;
    let hour = 0;

    function start(host: ExampleHost) {
        const map = host.map;

        map.addLayer('basemap', {
            type: 'vector',
            source: vectorTiles(),
            style: { type: 'mbvt', cartocss: MSS }
        });

        // The curve is only read while this is on; off, the style's and the app's own sun colours
        // stand, which is what every map did before the curve existed.
        map.light({ type: 'light', dayCycleLightsEnabled: true, sunOverridingStyle: true });

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
            // An hour is a sun POSITION; the curve turns that into a light.
            const h = HOURS[hour];
            map.light().apply({
                sunAzimuth: 90 + (h - 6) * 15,
                sunAltitude: 62 * Math.sin((Math.PI * (h - 6)) / 12)
            });
        }

        function caption() {
            host.caption(`${HOUR_NAMES[hour]} - ${FORMULAS[formula][0]} formula`);
        }

        host.button('Formula', () => {
            formula = (formula + 1) % FORMULAS.length;
            applyFormula();
            caption();
        });
        host.button('Hour', () => {
            hour = (hour + 1) % HOURS.length;
            applyHour();
            caption();
        });
        host.caption('One palette, no night theme: the hour picks the light, the curve picks the look.');
    }
</script>

<ExampleShell id="day-cycle-light" {start} title="Light the map by the hour" />
