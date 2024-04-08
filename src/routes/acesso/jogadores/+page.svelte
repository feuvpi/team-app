<script lang="ts">
    import type { PageData } from './$types';
    import MyCustomTable from "$lib/components/MyCustomTable.svelte";    
    import * as Card from "$lib/components/ui/card/index";
	import * as Select from '$lib/components/ui/select';
	import * as Table from '$lib/components/ui/table';
	import Button from '$lib/components/ui/button/button.svelte';
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


  let players = [
    {
      id: "SFC003",
      name: "Lionel Messi",
      dob: "24 de Junho, 1987",
      height: "5'7\"",
      weight: "78 Kg",
      goals: 643,
      position: "Atacante",
      dominance: "Direito",
      foot: "Esquerdo"
    },
    {
      id: "SFC002",
      name: "Cristiano Ronaldo",
      dob: "5 de Fevereiro, 1985",
      height: "1,87",
      weight: "85 Kg",
      goals: 719,
      position: "Atacante",
      dominance: "Esquerdo",
      foot: "Direito"
    },
    {
      id: "SFC001",
      name: "Neymar Jr",
      dob: "5 de Fevereiro, 1992",
      height: "1,72",
      weight: "70 Kg",
      goals: 283,
      position: "Atacante",
      dominance: "Esquerdo",
      foot: "Direito"
    }
    // Add more player data as needed
  ];
  </script>
  
  
  <div class="md:sticky top-0">
    <h1 class="font-bold my-4 text-2xl font-mono text-left">Relação de Jogadores</h1>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4">
      <Card.Root class="transform hover:scale-105 transition duration-300 shadow-md">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Clientes Totais</Card.Title>
          <!-- <DollarSign class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content>
          <div class="text-2xl font-bold">$45,231.89</div>
          <p class="text-xs text-muted-foreground">+20.1% from last month</p>
        </Card.Content>
      </Card.Root >
      <Card.Root class="transform hover:scale-105 transition duration-300 shadow-md">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Clientes Ativos</Card.Title>
          <!-- <Users class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content>
          <div class="text-2xl font-bold">+2350</div>
          <p class="text-xs text-muted-foreground">+180.1% from last month</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="transform hover:scale-105 transition duration-300 shadow-md">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Licenças Ativas</Card.Title>
          <!-- <CreditCard class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content>
          <div class="text-2xl font-bold">+12,234</div>
          <p class="text-xs text-muted-foreground">+19% from last month</p>
        </Card.Content>
      </Card.Root>
      <Card.Root class="transform hover:scale-105 transition duration-300 shadow-md">
        <Card.Header
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <Card.Title class="text-sm font-medium">Numero de Cooperados</Card.Title>
          <!-- <Activity class="h-4 w-4 text-muted-foreground" /> -->
        </Card.Header>
        <Card.Content>
          <div class="text-2xl font-bold">+573</div>
          <p class="text-xs text-muted-foreground">+201 since last hour</p>
        </Card.Content>
      </Card.Root>
    </div>
  </div>
  

  
  <div class="flex items-center justify-between space-x-2 mt-4">
    <!-- Add your selector here -->
    <Select.Root>
      <Select.Trigger class="w-[180px]">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          {#each posicoes as fruit}
            <Select.Item value={fruit.value} label={fruit.label}
              >{fruit.label}</Select.Item
            >
          {/each}
        </Select.Group>
      </Select.Content>
      <Select.Input name="favoriteFruit" />
    </Select.Root>
    <Button size="sm" class="bg-orange-400">Adicionar</Button>
  </div>
  
  
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
  
  
  
  
  
  
  
  
  