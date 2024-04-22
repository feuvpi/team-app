<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
    import type { LayoutData } from './$types';
    export let data: LayoutData;
</script>

<div class="flex-col">
    <slot/>
    <!-- <Footer/> -->
</div>

