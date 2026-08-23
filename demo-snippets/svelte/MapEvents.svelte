<script lang="ts">
    /**
     * The pattern an app actually wants: refresh data once the map settles, and never for its
     * own camera calls.
     *
     * `mapStable` fires ONCE at the end of a movement, carrying the reason that caused it - so
     * none of the bookkeeping this used to need survives: no "did it really move?" flag, no
     * "ignore the next stable" after a programmatic move, and no falling back to `mapIdle`.
     */
    import { MassifMap, MapMovedEvent, MapStableEvent } from '@nativescript-community/ui-massifmaps/ui';
    import { attach, MassifMap as MassifMapApi } from '@nativescript-community/ui-massifmaps/api';
    import MapShell from './common/MapShell.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { GRENOBLE } from './common/sources';

    let map: MassifMap;
    let api: MassifMapApi;
    let status = 'drag the map, then use the button';
    let refreshes = 0;
    let moves = 0;
    let stables = 0;
    let tracked = 0;
    let settled = 0;
    let userOnly = true;

    const baseMap = createBaseMap();
    const layers = [baseMap.spec];

    /** Stands in for the real work - a fetch of whatever is on screen now. */
    function refreshData(reason: string) {
        refreshes++;
        status = `refreshed (${reason}) · ${moves} moves, ${tracked} throttled, ${stables} stable, ${refreshes} refreshes`;
    }

    function setup(m: MassifMap) {
        map = m;

        // Fires well above frame rate during a drag - 47 to 159 a second. Never refresh here.
        m.on(MapMovedEvent, (e) => {
            moves++;
        });

        // THROTTLE - the leading edge. The same event, at most one every 250 ms, for a readout
        // that should track the movement. Events inside the window are DROPPED, not delivered
        // late: the payload does not outlive the emit, so there is nothing to deliver later.
        //
        // The subscription options live on the facade object, so this goes through `attach`
        // rather than the view's own `on`.
        api = attach(m, { id: 'events-demo' });
        api.subscribe('map.moved', (e) => {
            tracked++;
        }, { throttle: 250 });

        // DEBOUNCE - the trailing edge. Fires once, 400 ms after the map goes quiet, and each new
        // event restarts the clock. Its payload is a SNAPSHOT read at emit time, so `e.get(...)`
        // reads the frozen copy rather than a handle the facade has already freed.
        //
        // Note this is NOT how you get "the map settled": mapStable already fires exactly once at
        // the end of a movement. Reach for debounce when you want to wait PAST the settle - to
        // coalesce several movements into one fetch, say.
        api.subscribe('map.stable', (e) => {
            settled++;
            status = `settled ${settled}x, 400 ms after the last movement (${e.get('reason')})`;
        }, { debounce: 400 });

        // Once per movement, at the end of it. `e` is typed from the event name, so `e.data.reason`
        // is 'gesture' | 'animation' | 'api' and a typo does not compile.
        m.on(MapStableEvent, (e) => {
            stables++;
            const reason = e.data.reason;
            if (userOnly && reason !== 'gesture') {
                // The app's own flyTo below lands here: refreshing would fetch for a camera the
                // app already knows about, and race the move that caused it.
                status = `ignored (${reason}) · ${moves} moves, ${stables} stable`;
                return;
            }
            refreshData(reason);
        });
    }

    function flyElsewhere() {
        // Raises mapStable with reason 'animation', not 'gesture'.
        map?.flyTo({ latitude: 45.9237, longitude: 6.8652 }, { zoom: 13, duration: 1500 });
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} {status} title="Map events" zoom={12}>
    <stackLayout slot="settings">
        <label class="section-title" text="Refresh on settle" />
        <SettingSwitch
            checked={userOnly}
            hint="skip a stable whose reason is not 'gesture' - the app's own moves"
            label="Only refresh for the user"
            onChange={(v) => (userOnly = v)} />
        <button text="fly to Chamonix" on:tap={flyElsewhere} />
        <label class="setting-hint" text="A tap that does not move the camera raises no stable at all." textWrap="true" />
        <label class="section-title" text="Rates" />
        <label class="setting-hint" text={`${moves} raw moves -> ${tracked} after throttle(250) -> ${stables} stable -> ${settled} after debounce(400)`} textWrap="true" />
    </stackLayout>
</MapShell>
