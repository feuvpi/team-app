<script lang="ts">
	import NextMatches from '$lib/components/NextMatches.svelte';
	export let title: string;

	

</script>

<svelte:head>
  <title>Salvador FC Portal</title>
</svelte:head>
<!-- <Content title="Google"/> -->

<h1 class="font-bold my-4 text-2xl font-mono text-left mx-2">Overview</h1>
<div class="flex flex-col flex-wrap sm:flex-row">

	<section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-4 lg:w-full mx-2">
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span class="block text-2xl font-bold">62</span>
            <span class="block text-gray-500">Jogadores</span>
          </div>		
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
          <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
<p>19</p>
          </div>
          <div>
            <span class="block text-2xl font-bold">33</span>
            <span class="block text-gray-500">Jogadores sub-19 anos</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
			<div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cyan-600 bg-cyan-100 rounded-full mr-6">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
	<p>15</p>
			  </div>
          <div>
            <span class="inline-block text-2xl font-bold">21</span>
            <span class="block text-gray-500">Jogadores sub-15 anos</span>
          </div>
        </div>
        <div class="flex items-center p-8 bg-white shadow rounded-lg">
			<div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-cyan-600 bg-cyan-100 rounded-full mr-6">
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
	<p>12</p>
			  </div>
          <div>
            <span class="block text-2xl font-bold">11</span>
            <span class="block text-gray-500">Jogadores sub-12 anos</span>
          </div>
        </div>
      </section>

	<NextMatches/>

</div>
