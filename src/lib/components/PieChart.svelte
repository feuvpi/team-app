<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Chart from 'chart.js/auto';

  export let title: string;
  export let options;
  export let chartLabel: string;
  export let chartLabels;
  export let dataset: any[];

  let chart: Chart<"doughnut", number[], string>;
  let ctx: HTMLCanvasElement;

    // Generate a unique ID for the canvas element
    const canvasId = `chartDoughnut_${Math.random().toString(36).substring(7)}`;

  // Chart data
  let labels = ["19", "18", "17", "16", "15", "14", "13", "12"];
  let data = [12, 9, 7, 12, 7, 14, 10, 20];
  let backgroundColors = [
    "rgb(255, 159, 64)",  // Orange
    "rgb(255, 185, 104)", // Light Orange
    "rgb(255, 132, 51)",  // Dark Orange
    "rgb(255, 206, 150)", // Peach
    "rgb(255, 111, 87)",  // Coral
    "rgb(255, 176, 0)",   // Goldenrod
    "rgb(255, 207, 153)", // Light Peach
    "rgb(255, 140, 0)"    // Amber
  ];

  onMount(() => {
    ctx = document.getElementById(canvasId).getContext("2d");
    renderChart();
    return onDestroy(() => {
      if (chart) {
        chart.destroy();
      }
    });
  });

  function renderChart() {
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: chartLabels,
        datasets: [{
          label: chartLabel,
          data: dataset,
          backgroundColor: backgroundColors,
          hoverOffset: 4
        }]
      },
      options: options
    });
  }
</script>

<div class="shadow-lg rounded-lg ">
<div class="py-3 px-5 bg-gray-50 text-center">{title}</div>
<canvas id={canvasId}></canvas>
</div>

<style>
canvas {
  width: 100%;
  height: auto;
}
</style>
