<script lang="ts">
    import { SegmentedBarItem as CoreSegmentedBarItem } from '@nativescript/core';
    import { SegmentedBarItem as MaterialSegmentedBarItem } from '@nativescript-community/ui-material-segmentedbar';

    /** label + a row of mutually exclusive choices, for the small enum settings */
    type Option = { value: any; label: string };

    export let label = '';
    export let options: Option[] = [];
    export let value: any;
    export let onChange: (v: any) => void = () => {};

    /**
     * iOS falls back to the core `SegmentedBar`, which the material package re-exports as
     * is and which only accepts core items - only android has a material item (a button
     * of the underlying MaterialButtonToggleGroup).
     */
    const Item: typeof MaterialSegmentedBarItem = MaterialSegmentedBarItem ?? (CoreSegmentedBarItem as any);

    // rebuilt only when the choices themselves change, not on every selection
    $: items = options.map((option) => {
        const item = new Item();
        item.title = option.label;
        // the material item is a button, and the demo theme styles Button as a list row:
        // the text variant drops the outline and the tint the checked state paints, which
        // leaves the selection to `.selected` and keeps both platforms looking the same
        item.variant = 'text';
        return item;
    });
    // never -1: the native bar has no "nothing selected" state to fall back to
    $: selectedIndex = Math.max(
        0,
        options.findIndex((option) => option.value === value)
    );
    // items are built in script, so their look is a class we set rather than markup
    $: items.forEach((item, index) => (item.className = index === selectedIndex ? 'segment-item selected' : 'segment-item'));

    function onSelectedIndexChange(e) {
        const next = options[e.value]?.value;
        if (next === undefined || next === value) {
            return;
        }
        value = next;
        onChange(next);
    }
</script>

<stackLayout class="setting-row">
    {#if label}
        <label class="setting-label" text={label} />
    {/if}
    <!-- `items` before `selectedIndex`: the native bar resolves the index against its children -->
    <mdsegmentedbar class="segment" {items} {selectedIndex} on:selectedIndexChange={onSelectedIndexChange} />
</stackLayout>
