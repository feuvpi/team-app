<script lang="ts">  
  import * as Card from "$lib/components/ui/card/index";

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

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4 w-full">
  {#if playersData.totalplayers}
    <Card.Root class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md">
      <Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
        <Card.Title class="text-xl italic font-thin text-orange-800 font-medium">JOGADORES TOTAIS</Card.Title>
      </Card.Header>
      <Card.Content>
        <div class="text-2xl font-bold">{playersData.totalplayers}</div>
      </Card.Content>
    </Card.Root>
  {/if}
  {#if playersData.sub20}
  <Card.Root class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-sm">
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
    <Card.Root class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md">
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
    <Card.Root class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md">
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