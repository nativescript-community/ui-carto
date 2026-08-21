<script lang="ts">
    /**
     * Online routing with maneuver arrows.
     *
     * Tap the map once for the start, once for the destination; the route is then computed
     * by `ValhallaOnlineRoutingService` against a public Valhalla instance and drawn as two
     * GeoJSON vector-tile layers:
     *
     *  - `#route`, a casing under a fill, both widths interpolated over [view::zoom];
     *  - `#maneuver`, the turn arrows. They are real tapered arrows, drawn by the vector
     *    tile renderer's `line-end-arrow` / `line-arrow-only` properties - the head is cut
     *    out of the shaft so the two read as a single polygon. The geometry is the slice of
     *    the route around each turn (`sliceAround`), which is what the SDK's android-only
     *    ManeuverArrowBuilder does natively.
     *
     * Each `RoutingInstruction` carries a point index, an action, a street name, a distance
     * and a time; the list at the bottom is that, and tapping a row flies to the turn.
     */
    import { GeoJSONVectorTileDataSource } from '@nativescript-community/ui-massifmaps/datasources';
    import { LocalVectorDataSource } from '@nativescript-community/ui-massifmaps/datasources/vector';
    import { VectorLayer, VectorTileLayer } from '@nativescript-community/ui-massifmaps/layers/vector';
    import { MBVectorTileDecoder } from '@nativescript-community/ui-massifmaps/vectortiles';
    import { ValhallaOnlineRoutingService } from '@nativescript-community/ui-massifmaps/routing';
    import { Marker, MarkerStyleBuilder } from '@nativescript-community/ui-massifmaps/vectorelements/marker';
    import { MassifMap } from '@nativescript-community/ui-massifmaps/ui';
    import MapShell from './common/MapShell.svelte';
    
    import SettingSegment from './common/SettingSegment.svelte';
    import SettingSlider from './common/SettingSlider.svelte';
    import { createBaseMap } from './common/basemap';
    import { hillshadeLayer, satelliteLayer } from './common/layers';
    import { maneuverStyle, routeStyle } from './common/styles';
    import { GRENOBLE } from './common/sources';
    import { featureCollection, formatDistance, formatDuration, sliceAround, toGeoJSONLine } from './common/geo';
    import type { LatLon } from './common/geo';

    /** a public Valhalla; `{service}` is replaced by 'route' or 'trace_attributes' */
    const VALHALLA_URL = 'https://valhalla1.openstreetmap.de/{service}';

    interface Step {
        index: number;
        action: string;
        street: string;
        distance: number;
        time: number;
        position: LatLon;
    }

    let map: MassifMap;
    let service: ValhallaOnlineRoutingService;
    let routeSource: GeoJSONVectorTileDataSource;
    let maneuverSource: GeoJSONVectorTileDataSource;
    let routeLayerIndex = 0;
    let maneuverLayerIndex = 0;
    let endpoints: LocalVectorDataSource;

    let start: LatLon = null;
    let end: LatLon = null;
    let steps: Step[] = [];
    let status = 'tap the map to place the start';
    let busy = false;

    let profile: 'auto' | 'bicycle' | 'pedestrian' = 'auto';
    let lengthBefore = 120;
    let lengthAfter = 80;

    /** the action names of RoutingAction, which is a plain enum ordinal on both platforms */
    const ACTIONS = [
        'head on',
        'finish',
        'no turn',
        'go straight',
        'turn right',
        'u-turn',
        'turn left',
        'reach via',
        'enter roundabout',
        'leave roundabout',
        'stay on roundabout',
        'start at end of street',
        'enter against allowed direction',
        'leave against allowed direction',
        'go up',
        'go down',
        'wait'
    ];

    const baseMap = createBaseMap();
    const layers = [
        baseMap.spec,
        satelliteLayer(),
        hillshadeLayer(),
        {
            id: 'route',
            name: 'Route',
            hint: '#route, casing + fill',
            enabled: true,
            create: () => {
                routeSource = new GeoJSONVectorTileDataSource({ minZoom: 0, maxZoom: 24 });
                routeLayerIndex = routeSource.createLayer('route');
                return new VectorTileLayer({ dataSource: routeSource, decoder: new MBVectorTileDecoder({ cartoCss: routeStyle() }) });
            }
        },
        {
            id: 'maneuvers',
            name: 'Maneuver arrows',
            hint: '#maneuver, line-end-arrow',
            enabled: true,
            create: () => {
                maneuverSource = new GeoJSONVectorTileDataSource({ minZoom: 0, maxZoom: 24 });
                maneuverLayerIndex = maneuverSource.createLayer('maneuver');
                return new VectorTileLayer({ dataSource: maneuverSource, decoder: new MBVectorTileDecoder({ cartoCss: maneuverStyle() }) });
            }
        },
        {
            id: 'endpoints',
            name: 'Start / destination',
            enabled: true,
            create: (m: MassifMap) => {
                endpoints = new LocalVectorDataSource({ projection: m.projection });
                return new VectorLayer({ dataSource: endpoints, visibleZoomRange: [0, 24] });
            }
        }
    ];

    function drawEndpoints() {
        if (!endpoints) {
            return;
        }
        endpoints.clear();
        if (start) {
            endpoints.add(new Marker({ projection: map.projection, position: start, styleBuilder: new MarkerStyleBuilder({ size: 28, color: '#2fbf71' }) }));
        }
        if (end) {
            endpoints.add(new Marker({ projection: map.projection, position: end, styleBuilder: new MarkerStyleBuilder({ size: 28, color: '#e6194b' }) }));
        }
    }

    function clearRoute() {
        steps = [];
        routeSource?.setLayerGeoJSON(routeLayerIndex, featureCollection([]));
        maneuverSource?.setLayerGeoJSON(maneuverLayerIndex, featureCollection([]));
    }

    function onMapClicked(e) {
        const position = { latitude: e.data.position.latitude, longitude: e.data.position.longitude };
        if (!start || (start && end)) {
            start = position;
            end = null;
            clearRoute();
            status = 'start set - tap the destination';
        } else {
            end = position;
            status = 'routing...';
            calculate();
        }
        drawEndpoints();
    }

    async function calculate() {
        if (!start || !end || busy) {
            return;
        }
        busy = true;
        try {
            const result: any = await service.calculateRoute({ projection: map.projection, points: [start, end], customOptions: undefined }, profile);
            if (!result) {
                status = 'no route found';
                return;
            }
            const points: LatLon[] = result.getPoints().toArray();
            routeSource.setLayerGeoJSON(routeLayerIndex, featureCollection([toGeoJSONLine(points, { id: 1 })]));

            const instructions = result.getInstructions();
            const next: Step[] = [];
            const arrows: any[] = [];
            for (let i = 0; i < instructions.size(); i++) {
                const instruction = instructions.get(i);
                const index = instruction.getPointIndex();
                const action = instruction.getAction();
                next.push({
                    index,
                    action: ACTIONS[action] ?? `action ${action}`,
                    street: instruction.getStreetName(),
                    distance: instruction.getDistance(),
                    time: instruction.getTime(),
                    position: points[Math.min(index, points.length - 1)]
                });
                // the two ends of a route are not turns, and neither is 'go straight'
                const slice = sliceAround(points, index, lengthBefore, lengthAfter);
                if (slice.length > 1) {
                    arrows.push(toGeoJSONLine(slice, { id: i + 1 }));
                }
            }
            steps = next;
            maneuverSource.setLayerGeoJSON(maneuverLayerIndex, featureCollection(arrows));
            status = `${formatDistance(result.getTotalDistance())} - ${formatDuration(result.getTotalTime())} - ${steps.length} maneuvers`;
        } catch (error) {
            status = `routing failed: ${error}`;
        } finally {
            busy = false;
        }
    }

    function goTo(step: Step) {
        map.flyTo(step.position, { zoom: 17, tilt: 55, duration: 1200 });
        status = `${step.action}${step.street ? ' on ' + step.street : ''}`;
    }

    function reset() {
        start = null;
        end = null;
        clearRoute();
        drawEndpoints();
        status = 'tap the map to place the start';
    }

    function setup(m: MassifMap) {
        map = m;
        service = new ValhallaOnlineRoutingService({ customServiceURL: VALHALLA_URL, profile });
        m.on('mapClicked', onMapClicked);
    }
</script>

<MapShell {baseMap} focusPos={GRENOBLE} {layers} {setup} {status} tilt={45} title="Maneuvers" zoom={14}>
    <stackLayout slot="overlay">
        <label class="overlay-button" text="reset route" on:tap={reset} />
    </stackLayout>

    <stackLayout slot="settings">
        <label class="section-title" text="Routing" />
        <SettingSegment
            label="Profile"
            onChange={(v) => {
                profile = v;
                service.profile = v;
                calculate();
            }}
            options={[
                { value: 'auto', label: 'car' },
                { value: 'bicycle', label: 'bike' },
                { value: 'pedestrian', label: 'walk' }
            ]}
            value={profile} />
        <SettingSlider
            format={(v) => `${Math.round(v)} m`}
            label="Arrow approach"
            max={300}
            min={20}
            onChange={(v) => {
                lengthBefore = v;
                calculate();
            }}
            step={10}
            value={lengthBefore} />
        <SettingSlider
            format={(v) => `${Math.round(v)} m`}
            label="Arrow exit"
            max={300}
            min={20}
            onChange={(v) => {
                lengthAfter = v;
                calculate();
            }}
            step={10}
            value={lengthAfter} />

        <label class="section-title" text={steps.length ? `Maneuvers (${steps.length})` : 'Maneuvers'} />
        {#if !steps.length}
            <label class="setting-hint" text="Tap the map for a start and a destination." textWrap="true" />
        {/if}
        {#each steps as step}
            <gridLayout class="setting-row" columns="*, auto" on:tap={() => goTo(step)}>
                <label class="setting-label" col="0" text={`${step.action}${step.street ? ' - ' + step.street : ''}`} textWrap="true" />
                <label class="setting-value" col="1" text={formatDistance(step.distance)} />
            </gridLayout>
        {/each}
    </stackLayout>
</MapShell>
