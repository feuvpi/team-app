<script lang="ts">
    import * as Select from "$lib/components/ui/select/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { mediaQuery } from 'svelte-legos';
    import Drawer from "$lib/components/Drawer.svelte"
    import {
    CalendarDate,
    DateFormatter,
    type DateValue,
    getLocalTimeZone
  } from "@internationalized/date";
  import { RangeCalendar } from "$lib/components/ui/range-calendar/index.js";
  import { cn } from "$lib/utils.js";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import type { DateRange } from "bits-ui";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";

  const df = new DateFormatter("pt-BR", {
    dateStyle: "medium"
  });

  let value: DateRange | undefined = {
    start: new CalendarDate(2022, 1, 20),
    end: new CalendarDate(2022, 1, 20).add({ days: 20 })
  };

  let startValue: DateValue | undefined = undefined;


    const isDesktop = mediaQuery("(min-width: 768px)");
    let open = false;


    
    export let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };
      let clientId = ""
      $: nomeFantasia = p ? p.nomeFantasia : "";
      $: razaoSocial = p ? p.razaoSocial : "";
      $: cnpj = p ? p.cnpj : "";
    
      let cliente: any = null;
      let checked = false;
    
      const posicoes = [
          { value: "atacante", label: "Atacante" },
          { value: "meioCampo", label: "Meio de Campo" },
          { value: "lateralDireito", label: "Lateral Direito" },
          { value: "lateralEsquerdo", label: "Lateral Esquerdo" },
          { value: "zagueiro", label: "Zagueiro" },
          { value: "goleiro", label: "Goleiro" }
        ];
    </script>
    
    <div class="flex items-center justify-between dark:bg-neutral-600  rounded-md bg-gray-200 p-4 rounded md:sticky md:top-0 sticky -top-40 z-10 shadow-md  flex-col md:flex-row">
        <!-- Search Input with SVG Icon -->
        <div class=" flex-col md:flex md:flex-row gap-2 w-full">
          <div class="relative flex items-center w-full max-w-md gap-2 ">
            <svg class="absolute left-3 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.2-5.2m.7-3.5a8.5 8.5 0 11-15.3-5.8 8.5 8.5 0 0115.3 5.8z"></path>
            </svg>
            <Input type="text" placeholder="Procurar..." class="w-full border dark:bg-neutral-500 dark:border-orange-400 border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:border-blue-500" />
          </div>
        
          <!-- Select Component -->
          <!-- <div class="mx-4"><Select></Select></div> -->
          <Popover.Root openFocus>
            <Popover.Trigger asChild let:builder>
              <Button
                variant="outline"
                class={cn(
                  "w-full dark:bg-neutral-500 dark:border-orange-400 justify-start text-left font-normal",
                  !value && "text-muted-foreground"
                )}
                builders={[builder]}
              >
                <CalendarIcon class="mr-2 h-4 w-4" />
                {#if value && value.start}
                  {#if value.end}
                    {df.format(value.start.toDate(getLocalTimeZone()))} - {df.format(
                      value.end.toDate(getLocalTimeZone())
                    )}
                  {:else}
                    {df.format(value.start.toDate(getLocalTimeZone()))}
                  {/if}
                {:else if startValue}
                  {df.format(startValue.toDate(getLocalTimeZone()))}
                {:else}
                  Pick a date
                {/if}
              </Button>
            </Popover.Trigger>
            <Popover.Content class="w-auto p-0" align="start">
              <RangeCalendar
                bind:value
                bind:startValue
                initialFocus
                numberOfMonths={2}
                placeholder={value?.start}
              />
            </Popover.Content>
          </Popover.Root>
      
          <Select.Root >
            <Select.Trigger class="w-full dark:border-orange-400 mr-2 dark:bg-neutral-500 ">
              <Select.Value placeholder="Posicão" />
            </Select.Trigger>
            <Select.Content >
              <Select.Group >
                <Select.Label>Posições</Select.Label>
                {#each posicoes as posicao}
                  <Select.Item value={posicao.value} label={posicao.label}
                    >{posicao.label}</Select.Item
                  >
                {/each}
              </Select.Group>
            </Select.Content>
            <Select.Input name="favoriteFruit" />
          </Select.Root>
    
        </div>
    
      
        <!-- Button -->
    <Drawer {cliente}/>
      </div>
    