<script lang="ts">
    /**
     * Page + map + the controls an example declares. Deliberately thin: the point of the gallery
     * is that an example file contains the map code and nothing else.
     */
    import { api } from '@nativescript-community/ui-massifmaps';
    import type { MassifMap } from '@nativescript-community/ui-massifmaps/api';
    import type { ExampleHost } from './host';
    import { goBack } from '@nativescript-community/svelte-native';
    import { onDestroy } from 'svelte';

    /** Shown in the action bar. */
    export let title: string;
    /** The registry id the map and everything it builds are scoped to. */
    export let id: string;
    /** Runs once the map is ready. This is the example. */
    export let start: (host: ExampleHost) => void;

    interface Control {
        label: string;
        toggle: boolean;
        on: boolean;
        action: (on: boolean) => void;
    }

    let map: MassifMap;
    let caption = '';
    let controls: Control[] = [];
    let error = '';
    const timers: any[] = [];

    function onMapReady(event) {
        if (!api.isAvailable()) {
            error = 'This build of the SDK has no surface API - see the plugin README.';
            return;
        }
        try {
            // EPSG:4326 once, so every position in the example - and every one read back out of
            // an event - is plain lon/lat rather than the map's own metres.
            map = api.attach(event.object, { id, projection: 'EPSG:4326' });
            start(host());
        } catch (e: any) {
            error = String(e?.message ?? e);
            console.error(error, e?.stack);
        }
    }

    function host(): ExampleHost {
        return {
            map,
            caption: (text: string) => (caption = text ?? ''),
            button: (label, action) => (controls = [...controls, { label, toggle: false, on: false, action }]),
            toggle: (label, on, action) => (controls = [...controls, { label, toggle: true, on, action }]),
            after: (millis, action) => timers.push(setTimeout(action, millis))
        };
    }

    function tap(index: number) {
        const control = controls[index];
        if (control.toggle) {
            control.on = !control.on;
            controls = controls;
        }
        try {
            control.action(control.on);
        } catch (e) {
            caption = String(e?.message ?? e);
            console.error(caption);
        }
    }

    onDestroy(() => {
        for (const timer of timers) {
            clearTimeout(timer);
        }
        // Releases the map's registration and every id the example built under it.
        map?.destroy();
    });
</script>

<page>
    <actionBar {title}>
        <navigationButton text="Back" android.systemIcon="ic_menu_back" on:tap={() => goBack()} />
    </actionBar>

    <gridLayout rows="*, auto, auto">
        <massifmap row="0" rowSpan="3" on:mapReady={onMapReady} />

        {#if controls.length}
            <wrapLayout class="example-controls" row="1">
                {#each controls as control, index}
                    <button class="example-control {control.toggle ? (control.on ? 'is-on' : 'is-off') : ''}" text={control.label} on:tap={() => tap(index)} />
                {/each}
            </wrapLayout>
        {/if}

        {#if error || caption}
            <label class="example-caption" row="2" text={error || caption} textWrap="true" />
        {/if}
    </gridLayout>
</page>

<style>
    .example-controls {
        padding: 8 8 0 8;
    }
    .example-control {
        margin: 4;
        padding: 6 14;
        font-size: 13;
        border-radius: 18;
        background-color: #ffffffee;
        color: #1d1b18;
        android-elevation: 2;
    }
    .example-control.is-on {
        background-color: #e5484d;
        color: #ffffff;
    }
    .example-control.is-off {
        background-color: #ffffffcc;
        color: #77716a;
    }
    .example-caption {
        padding: 10 14;
        font-size: 13;
        color: #ffffff;
        background-color: #1d1b18cc;
    }
</style>
