<script lang="ts">
  import * as Table from "$lib/components/ui/table";
  import * as Tabs from "$lib/components/ui/tabs";
	import { Button } from '$lib/components/ui/button';
  import type { PageData } from './$types';
	import * as Select from "$lib/components/ui/select/index";
  import * as Sheet from "$lib/components/ui/sheet";
    
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

const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" }
  ];

</script>

<div class="flex items-center justify-between space-y-2">
  <h1 class="font-bold my-4 text-2xl font-mono text-left">Formação de Times</h1>
</div>

<div class=" grid grid-cols-10 gap-8 w-screen">

  <div class="col-span-6" id="thisDiv">

    <div class="flex items-center mt-4">
      <!-- Add your selector here -->
      <div class="flex gap-2">

        <Select.Root>
          <Select.Trigger class="w-[180px]">
            <Select.Value placeholder="Selecione um Time" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Times</Select.Label>
              {#each fruits as fruit}
                <Select.Item value={fruit.value} label={fruit.label}
                  >{fruit.label}</Select.Item
                >
              {/each}
            </Select.Group>
          </Select.Content>
          <Select.Input name="favoriteFruit" />
        </Select.Root>
        <Sheet.Root >
          <Sheet.Trigger><Button>Adicionar</Button></Sheet.Trigger>
          <Sheet.Content class="bg-gradient-to-r from-orange-400 to-orange-200">
            <Sheet.Header>
              <Sheet.Title>Adicionar Time / Form</Sheet.Title>
              <Sheet.Description>
                Implementar campos para adicionar uma divisão no banco de dados.
              </Sheet.Description>
            </Sheet.Header>
          </Sheet.Content>
        </Sheet.Root>

      </div>

    <div class="flex justify-center w-screen">      
      <Tabs.Root value="account" class="">
      <Tabs.List>
        <Tabs.Trigger value="account">Jogadores</Tabs.Trigger>
        <Tabs.Trigger value="password">Jogos</Tabs.Trigger>
      </Tabs.List>
      <!-- <Tabs.Content value="account">
        Make changes to your account here.
      </Tabs.Content>
      <Tabs.Content value="password">Change your password here.</Tabs.Content> -->
    </Tabs.Root></div>

    
   
    </div>
    
    <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span class="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully
                accessible UI components</h3>
            <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind
                    CSS.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="https://headlessui.dev">Learn
                more<span class="sr-only">, Completely unstyled, fully accessible UI components</span><svg
                    class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div><img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640">
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span class="mb-1 block text-sm leading-6 text-purple-500">Heroicons</span>Beautiful hand-crafted SVG
                icons, by the makers of Tailwind CSS.</h3>
            <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and
                    Vue libraries.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="https://heroicons.com">Learn
                more<span class="sr-only">, Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.</span><svg
                    class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div><img src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640">
    </li>
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
        <div class="order-1 sm:ml-6 xl:ml-0">
            <h3 class="mb-1 text-slate-900 font-semibold dark:text-slate-200">
                <span class="mb-1 block text-sm leading-6 text-cyan-500">Hero Patterns</span>Seamless SVG background
                patterns by the makers of Tailwind CSS.</h3>
            <div class="prose prose-slate prose-sm text-slate-600 dark:prose-dark">
                <p>A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web
                    projects.</p>
            </div><a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
                href="https://heropatterns.com">Learn
                more<span class="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span><svg
                    class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a>
        </div><img src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640">
    </li>
</ul>
    
    <!-- <Table.Root class="font-mono border-t-8 border-orange-300 mt-4 shadow-md bg-white">
      <Table.Caption>A list of your recent invoices.</Table.Caption>
      <Table.Header>
        <Table.Row>
          <!-- <Table.Head class="w-[100px]">Invoice</Table.Head> -->
          <!-- <Table.Head>Descrição</Table.Head>
          <Table.Head>Limite Idade</Table.Head>
          <Table.Head class="text-center">Jogadores</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell class="font-medium">INV001</Table.Cell>
          <Table.Cell>Paid</Table.Cell>
          <Table.Cell class="text-center">14</Table.Cell>
        </Table.Row>
      </Table.Body> -->
    <!-- </Table.Root> --> -->
  </div>

  <!-- <div class="col-span-2">
    <Calendar class="bg-white border-r-4 border-orange-300 w-full mb-2" />
    <PieChart {options} title={"Distribuição de Posições"} chartLabel={"distribuicao"} chartLabels={chartLabels2} dataset={dataset2}/>
  </div> -->

</div>




<!-- <ControlBar/> -->

<!-- <div class="w-screen flex border-2 border-indigo-400 gap-2">
    
    <PieChart options={options} title={"Posições"} chartLabel={"posicoes"} chartLabels={chartLabels2} dataset={dataset2}/>
</div> -->



