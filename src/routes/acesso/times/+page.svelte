<script lang="ts">
	import ControlBar from '$lib/components/ControlBar.svelte';
	import PieChart from '$lib/components/PieChart.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    // -- Charts
    let chartLabels = ["19", "18", "17", "16", "15", "14", "13", "12"];
    let dataset = [12, 9, 7, 12, 7, 14, 10, 20];

    let chartLabels2 = ["AT", "DF", "LD", "LE", "MC", "GL"];
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
        elements.forEach(function(element, index) {
          element._model.outerRadius = element._chart.radius;
        });
      }
    }
  }
};

</script>

<h1 class="font-bold my-4 text-2xl font-mono text-left mx-12">Times</h1>

<ControlBar/>

<!-- <div class="w-screen flex border-2 border-indigo-400 gap-2">
    <PieChart {options} title={"Idade dos Jogadores"} chartLabel={"idade_jogadores"} {chartLabels} {dataset}/>
    <PieChart options={options} title={"Posições"} chartLabel={"posicoes"} chartLabels={chartLabels2} dataset={dataset2}/>
</div> -->



