<script lang="ts">
    import type { PageData } from './$types';
    import MyCustomTable from "$lib/components/MyCustomTable.svelte";    
    import * as Card from "$lib/components/ui/card/index";
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Sheet from '$lib/components/ui/sheet';
  import FilterBar from '$lib/components/FilterBar.svelte';
  import { players } from '$lib/players';
    export let data: PageData;
    
  
    // const clientes = data.clientes;
    let p: { nomeFantasia: any; razaoSocial: any; cnpj: any; };

    const posicoes = [
    { value: "apple", label: "Goleiro" },
    { value: "banana", label: "Defensor" },
    { value: "blueberry", label: "Lataral Esquerdo" },
    { value: "grapes", label: "Lateral Direito" },
    { value: "pineapple", label: "Meio Campo" },
    { value: "ataque", label: "Atacante" }
  ];

  let playersData = {
  totalplayers: 15000,
  sub20: 45,
  sub20date: new Date(new Date().getFullYear() - 20, new Date().getMonth(), new Date().getDate()).toLocaleDateString('en-GB'),
  sub17: 20,
  sub17date: new Date(new Date().getFullYear() - 17, new Date().getMonth(), new Date().getDate()).toLocaleDateString('en-GB'),
  sub15: 12,
  sub15date: new Date(new Date().getFullYear() - 15, new Date().getMonth(), new Date().getDate()).toLocaleDateString('en-GB'),
  sub12: 9,
  sub12date: new Date(new Date().getFullYear() - 12, new Date().getMonth(), new Date().getDate()).toLocaleDateString('en-GB')
};
</script>
  
  
  <div class="">
    <h1 class="font-bold text-2xl font-mono text-left">Relação de Jogadores</h1>
    <div class="">
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4">
        {#if playersData.totalplayers}
          <Card.Root class="bg-gradient-to-r from-orange-400 to-orange-200 transform hover:scale-105 transition duration-300 shadow-md">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-xl italic font-thin text-orange-800 font-medium">JOGADORES TOTAIS</Card.Title>
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{playersData.totalplayers}</div>
            </Card.Content>
          </Card.Root>
        {/if}
        {#if playersData.sub20}
        <Card.Root class="bg-gradient-to-r from-orange-300 to-orange-200 transform hover:scale-105 transition duration-300 shadow-md">
          <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title class="text-xl italic font-thin text-range-800 font-medium">SUB-20</Card.Title>
            <!-- Display the date 20 years from now -->
            <div class="text-2xl text-muted-foreground"><span class="text-sm">Nascidos  em </span>{playersData.sub20date}</div>
          </Card.Header>
          <Card.Content>
            <!-- Display the player count -->
            <div class="text-2xl font-bold">{playersData.sub20}</div>
          </Card.Content>
        </Card.Root>
      {/if}
        {#if playersData.sub17}
          <Card.Root class="bg-gradient-to-r from-orange-200 to-orange-100 transform hover:scale-105 transition duration-300 shadow-md">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-xl font-thin italic font-medium">SUB-17</Card.Title>
              <div class="text-2xl text-muted-foreground"><span class="text-sm">Nascidos  em </span>{playersData.sub17date}</div>
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{playersData.sub17}</div>
            </Card.Content>
          </Card.Root>
        {/if}
        {#if playersData.sub15}
          <Card.Root class="bg-gradient-to-r from-orange-100 to-white transform hover:scale-105 transition duration-300 shadow-md">
            <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
              <Card.Title class="text-xl font-medium italic">SUB-15</Card.Title>
              <div class="text-2xl text-muted-foreground"><span class="text-sm">Nascidos  em </span>{playersData.sub15date}</div>
            </Card.Header>
            <Card.Content>
              <div class="text-2xl font-bold">{playersData.sub15}</div>
            </Card.Content>
          </Card.Root>
        {/if}
      </div>
    </div>
  </div>
  
<FilterBar class="sticky top-0 z-10 bg-white shadow-md"/>
  

  
  
  <Table.Root class="border-t-8 border-orange-300 mt-4 shadow-md bg-white">
    <Table.Caption>Uma lista de todos os jogadores.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-[100px]">ID</Table.Head>
        <Table.Head>Nome</Table.Head>
        <Table.Head>Data de Nascimento</Table.Head>
        <Table.Head>Altura</Table.Head>
        <Table.Head>Peso</Table.Head>
        <Table.Head>Gols</Table.Head>
        <Table.Head class="">Posição</Table.Head>
        <Table.Head class="">Dominancia</Table.Head>
        <Table.Head class="">Posição</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {#each players as player}
          <Table.Row class="">
            <Table.Cell>{player.id}</Table.Cell>
            <Table.Cell>{player.name}</Table.Cell>
            <Table.Cell>{player.dob}</Table.Cell>
            <Table.Cell>{player.height}</Table.Cell>
            <Table.Cell>{player.weight}</Table.Cell>
            <Table.Cell>{player.goals}</Table.Cell>
            <Table.Cell>{player.position}</Table.Cell>
            <Table.Cell>{player.dominance}</Table.Cell>
            <Table.Cell>{player.foot}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
  </Table.Root>
  
  
  
  
  
  
  
  
  