<script lang="ts">
    /** label (+ optional hint) and a switch, the row every boolean demo setting uses */
    export let label: string;
    export let hint = '';
    export let checked: boolean;
    export let onChange: (v: boolean) => void = () => {};

    function onCheckedChange(e) {
        if (e.value === checked) {
            return;
        }
        checked = e.value;
        onChange(e.value);
    }
</script>

<gridLayout class="setting-row" columns="*, auto" rows="auto, auto">
    <label class="setting-label" col="0" row="0" text={label} verticalAlignment="center" />
    {#if hint}
        <label class="setting-hint" col="0" row="1" text={hint} textWrap="true" />
    {/if}
    <switch {checked} col="1" row="0" rowSpan={hint ? 2 : 1} verticalAlignment="center" on:checkedChange={onCheckedChange} />
</gridLayout>
