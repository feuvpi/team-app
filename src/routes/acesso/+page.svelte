<script lang="ts">
	import NextMatches from '$lib/components/NextMatches.svelte';
	import PlayerCards from '$lib/components/PlayerCards.svelte';
	import { Calendar } from '$lib/components/ui/calendar/index.js';
	import * as Table from '$lib/components/ui/table';
	import { getLocalTimeZone, today } from '@internationalized/date';
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let title: string;
	let value = today(getLocalTimeZone());

	function createChart(type: any, elementId: any, label: any) {
		const acquisitionsElement = document.getElementById(elementId);
		if (!acquisitionsElement) {
			console.error('Element with id "Faturado" not found');
			return;
		}

		const data2 = [
			{ year: 2018, count: 10 },
			{ year: 2019, count: 20 },
			{ year: 2020, count: 15 },
			{ year: 2021, count: 25 },
			{ year: 2022, count: 22 },
			{ year: 2023, count: 30 },
			{ year: 2024, count: 28 }
		];

		new Chart(
			acquisitionsElement as HTMLCanvasElement, // Assert that acquisitionsElement is HTMLCanvasElement
			{
				type: type,
				data: {
					labels: data2.map((row) => row.year),
					datasets: [
						{
							label: label,
							data: data2.map((row) => row.count)
						}
					]
				}
			}
		);
	}

	onMount(() => {
		createChart('pie', 'PosicoesPie', 'Divisão de Jogadores por Posição');
		createChart('line', 'CooperadosPorMes', 'Cooperados Ativos x Mês');
		createChart('pie', 'LicencasPorClientes', 'Numero de Licenças por Clientes');
	});
</script>

<svelte:head>
	<title>Salvador FC Portal</title>
</svelte:head>
<!-- <Content title="Google"/> -->

<div class="sticky top-0 z-1">
	<h1 class="font-bold my-2 text-2xl font- text-left mx-2">Visão Geral</h1>
</div>

<div class="flex flex-col flex-wrap sm:flex-row">
	<PlayerCards />

	<div class="flex flex-col md:flex-row w-full">
		<div class="flex flex-col md:flex-row md:w-1/2 md:pr-4">
			<div class=" md:w-1/2 md:pr-4">
				<!-- <div
					class="transform hover:scale-105 transition duration-300 overflow-x-auto h-full shadow-md border-blue-200 bg-white"
				>
					<NextMatches />
				</div> -->
			</div>
			<div class="md:w-1/2 md:pl-4 h-full">
				<!-- Your other component goes here -->
				<!-- <div style="h-full">
					<canvas
						class="h-full transform hover:scale-105 transition duration-300 bg-white w-full border-blue-200 p-2 shadow-md"
						id="PosicoesPie"
					></canvas>
				</div> -->
			</div>
		</div>

		<div class="md:w-1/2 md:pl-4">
			<!-- Your other component goes here -->
			<!-- <div style="h-full">
				<canvas
					class="transform hover:scale-105 transition duration-300 h-full bg-white w-full p-2 shadow-md"
					id="Faturado"
				></canvas>
			</div> -->
		</div>
	</div>

	<!-- <section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-4 lg:w-full mx-2">
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
      </section> -->

	<!-- <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-4 lg:w-full mx-2">	
	<Calendar bind:value class="rounded-md border shadow bg-orange-100" /></div> -->
</div>
