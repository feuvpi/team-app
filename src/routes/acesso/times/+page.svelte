<script lang="ts">
	import * as Table from '$lib/components/ui/table';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Button } from '$lib/components/ui/button';
	import type { PageData } from './$types';
	import * as Select from '$lib/components/ui/select/index';
	import * as Sheet from '$lib/components/ui/sheet';
	import { Card } from '$lib/components/ui/card';
	import { ColorWheel } from 'svelte-radix';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let data: PageData;

	// -- Charts
	let chartLabels = ['19', '18', '17', '16', '15', '14', '13', '12'];
	let dataset = [12, 9, 7, 12, 7, 14, 10, 20];

	let chartLabels2 = ['AT', 'DF', 'LD', 'LE', 'MC', 'GL'];
	let dataset2 = [12, 9, 7, 12, 7, 14];
	//     let backgroundColors = [
	//   "rgb(255, 159, 64)",  // Orange
	//   "rgb(255, 185, 104)", // Light Orange
	//   "rgb(255, 132, 51)",  // Dark Orange
	//   "rgb(255, 206, 150)", // Peach
	//   "rgb(255, 111, 87)",  // Coral
	//   "rgb(255, 176, 0)",   // Goldenrod
	//   "rgb(255, 207, 153)", // Light Peach
	//   "rgb(255, 140, 0)"    // Amber
	// ];

	const options = {
		hover: {
			onHover: function (event, elements) {
				if (elements.length) {
					event.target.style.cursor = 'pointer';
					// Increase the radius on hover
					elements[0]._model.outerRadius += 5;
				} else {
					event.target.style.cursor = 'default';
					// Reset the radius
					elements.forEach(function (element, index) {
						element._model.outerRadius = element._chart.radius;
					});
				}
			}
		}
	};

	const fruits = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'blueberry', label: 'Blueberry' },
		{ value: 'grapes', label: 'Grapes' },
		{ value: 'pineapple', label: 'Pineapple' }
	];
</script>

<h1 class="font-bold text-4xl font-mono text-left dark:text-orange-500 mb-4 lg:mt-4">Bases</h1>
<Separator />

<!-- <ControlBar/> -->

<!-- <div class="w-screen flex border-2 border-indigo-400 gap-2">
    
    <PieChart options={options} title={"Posições"} chartLabel={"posicoes"} chartLabels={chartLabels2} dataset={dataset2}/>
</div> -->
