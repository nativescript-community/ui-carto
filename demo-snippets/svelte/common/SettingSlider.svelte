<script lang="ts">
    /** label + live value + slider, the row every numeric demo setting uses */
    export let label: string;
    export let value: number = 0;
    export let min = 0;
    export let max = 1;
    /**
     * the material slider steps natively (`stepSize`), so the value the change event
     * carries is already on the grid - no rounding of our own on the way out
     */
    export let step;
    /** how the value is rendered next to the label */
    export let format: (v: number) => string = (v) => (step >= 1 ? String(Math.round(v)) : (v ?? 0).toFixed(2));
    export let onChange: (v: number) => void = () => {};

    /**
     * the android material slider refuses a value that is not `min` plus a multiple of
     * `stepSize`, so the incoming value is snapped before it ever reaches the native view
     */
    function snap(v: number) {
        if (!(step > 0)) {
            return v;
        }
        // `0.5 + 3 * 0.1` is not `0.8`, and the reported value would carry that noise
        const snapped = parseFloat((min + Math.round((v - min) / step) * step).toFixed(6));
        return Math.min(max, Math.max(min, snapped));
    }
    $: current = snap(value);

    function onValueChange(e) {
        const next = snap(e.value);
        if (next === value) {
            return;
        }
        value = next;
        onChange(next);
    }
    $: console.log('test', min, max, step, value)
</script>

<gridLayout class="setting-row" columns="*, auto" rows="auto, auto">
    <label class="setting-label" col="0" row="0" text={label} />
    <label class="setting-value" col="1" row="0" text={format(current)} />
    <mdslider col="0" colSpan="2" maxValue={max} minValue={min} row="1" stepSize={step} value={current} on:valueChange={onValueChange} />
</gridLayout>
