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
    import MapShell from './common/MapShell.svelte';
    import SettingSwitch from './common/SettingSwitch.svelte';
    import { createBaseMap } from './common/basemap';
    import { GRENOBLE } from './common/sources';

    let map: MassifMap;
    let status = 'drag the map, then use the button';
    let refreshes = 0;
    let moves = 0;
    let stables = 0;
    let userOnly = true;

    const baseMap = createBaseMap();
    const layers = [baseMap.spec];

    /** Stands in for the real work - a fetch of whatever is on screen now. */
    function refreshData(reason: string) {
        refreshes++;
        status = `refreshed (${reason}) · ${moves} moves, ${stables} stable, ${refreshes} refreshes`;
    }

    function setup(m: MassifMap) {
        map = m;

        // Fires well above frame rate during a drag - 47 to 159 a second. Never refresh here.
        m.on(MapMovedEvent, (e) => {
            moves++;
        });

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
    </stackLayout>
</MapShell>
