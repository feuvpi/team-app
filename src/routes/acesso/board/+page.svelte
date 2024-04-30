<script lang="ts">
    import type { PageData } from './$types';
    import Excali from "$lib/components/Excalidraw/AsyncExcalidraw.svelte";
    
    export let data: PageData;
</script>


<h1>Hello Excalidraw from svelte</h1>

<Excali />