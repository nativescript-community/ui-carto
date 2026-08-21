<script lang="ts">
    /**
     * The right drawer: one switch per layer the demo declared, in draw order, plus
     * whatever the demo puts in the default slot (composite sources, for instance).
     * This is the panel the native demo has under LAYERS.
     */
    import type { DemoLayerSpec } from './layers';

    export let layers: DemoLayerSpec[] = [];
    export let enabled: Record<string, boolean> = {};
    export let onToggle: (id: string, value: boolean) => void = () => {};

    function toggle(spec: DemoLayerSpec, e) {
        if (e.value === enabled[spec.id]) {
            return;
        }
        onToggle(spec.id, e.value);
    }
</script>

<gridLayout rows="auto, *">
    <label class="drawer-title" row="0" text="Layers" />
    <scrollView row="1">
        <stackLayout>
            {#each layers as spec}
                <gridLayout class="setting-row" columns="*, auto" rows="auto, auto">
                    <label class="setting-label" col="0" row="0" text={spec.name} />
                    {#if spec.hint}
                        <label class="setting-hint" col="0" row="1" text={spec.hint} textWrap="true" />
                    {/if}
                    <switch checked={enabled[spec.id]} col="1" row="0" rowSpan={spec.hint ? 2 : 1} verticalAlignment="center" on:checkedChange={(e) => toggle(spec, e)} />
                </gridLayout>
            {/each}
            <slot />
        </stackLayout>
    </scrollView>
</gridLayout>
