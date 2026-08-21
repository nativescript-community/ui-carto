<script lang="ts">
    /**
     * A collapsible group of settings, the way the native demo's panel is organised: the
     * sheet holds a dozen sections and only the one being used is open.
     */
    export let title: string;
    export let expanded = false;

    function toggle() {
        expanded = !expanded;
    }
</script>

<stackLayout>
    <label class="section-title" text={`${expanded ? '▾' : '▸'}  ${title}`} on:tap={toggle} />
    {#if expanded}
        <stackLayout class="section-content">
            <slot />
        </stackLayout>
    {/if}
</stackLayout>
