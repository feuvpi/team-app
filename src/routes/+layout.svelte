<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="flex-col max-h-fit">
	<ModeWatcher />
	<slot />
	<!-- <Footer/> -->
</div>
