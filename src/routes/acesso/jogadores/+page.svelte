<script lang="ts">
	import type { PageData } from './$types';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card/index';
	import * as Table from '$lib/components/ui/table';
	import FilterBar from '$lib/components/FilterBar.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { players } from '$lib/players';
	import { Button } from '$lib/components/ui/button';
	import * as Drawer from '$lib/components/ui/drawer';
	import Minus from 'lucide-svelte/icons/minus';
	import Plus from 'lucide-svelte/icons/plus';
	export let data: PageData;

	// const clientes = data.clientes;
	let p: { nomeFantasia: any; razaoSocial: any; cnpj: any };

	const posicoes = [
		{ value: 'apple', label: 'Goleiro' },
		{ value: 'banana', label: 'Defensor' },
		{ value: 'blueberry', label: 'Lataral Esquerdo' },
		{ value: 'grapes', label: 'Lateral Direito' },
		{ value: 'pineapple', label: 'Meio Campo' },
		{ value: 'ataque', label: 'Atacante' }
	];

	let playersData = {
		totalplayers: 15000,
		sub20: 45,
		sub20date: new Date(
			new Date().getFullYear() - 20,
			new Date().getMonth(),
			new Date().getDate()
		).toLocaleDateString('en-GB'),
		sub17: 20,
		sub17date: new Date(
			new Date().getFullYear() - 17,
			new Date().getMonth(),
			new Date().getDate()
		).toLocaleDateString('en-GB'),
		sub15: 12,
		sub15date: new Date(
			new Date().getFullYear() - 15,
			new Date().getMonth(),
			new Date().getDate()
		).toLocaleDateString('en-GB'),
		sub12: 9,
		sub12date: new Date(
			new Date().getFullYear() - 12,
			new Date().getMonth(),
			new Date().getDate()
		).toLocaleDateString('en-GB')
	};

	let handleClick = (player) => {
		console.log(`Row clicked: ${player.name}`);
		// Add your desired behavior here
	};

	function mapPositionToVariant(position) {
		switch (position) {
			case 'atacante':
				return 'atacante';
			case 'mcampo':
				return 'mcampo';
			case 'zagueiro':
				return 'zagueiro';
			case 'lesquerdo':
				return 'lesquerdo';
			case 'ldireito':
				return 'ldireito';
			case 'goleiro':
				return 'goleiro';
			// Add more cases as needed for other positions
			default:
				return 'default'; // or any other default variant
		}
	}
</script>

<div class="">
	<h1 class="font-bold text-4xl font-mono text-left dark:text-orange-500 mb-4">
		Relação de Jogadores
	</h1>
	<Separator />
	<div class="">
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4">
			{#if playersData.totalplayers}
				<Card.Root
					class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md"
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-xl italic font-thin text-orange-800 font-medium"
							>JOGADORES TOTAIS</Card.Title
						>
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">{playersData.totalplayers}</div>
					</Card.Content>
				</Card.Root>
			{/if}
			{#if playersData.sub20}
				<Card.Root
					class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-sm"
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-xl italic font-thin text-range-800 font-medium"
							>SUB-20</Card.Title
						>
						<!-- Display the date 20 years from now -->
						<div class="text-2xl text-muted-foreground">
							<span class="text-sm">Nascidos em </span>{playersData.sub20date}
						</div>
					</Card.Header>
					<Card.Content>
						<!-- Display the player count -->
						<div class="text-2xl font-bold">{playersData.sub20}</div>
					</Card.Content>
				</Card.Root>
			{/if}
			{#if playersData.sub17}
				<Card.Root
					class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md"
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-xl font-thin italic font-medium">SUB-17</Card.Title>
						<div class="text-2xl text-muted-foreground">
							<span class="text-sm">Nascidos em </span>{playersData.sub17date}
						</div>
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">{playersData.sub17}</div>
					</Card.Content>
				</Card.Root>
			{/if}
			{#if playersData.sub15}
				<Card.Root
					class="bg-gradient-to-r border-b-orange-500 border-b-4 dark:bg-neutral-700 dark:border-orange-400 transform hover:scale-105 transition duration-300 shadow-md"
				>
					<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
						<Card.Title class="text-xl font-medium italic">SUB-15</Card.Title>
						<div class="text-2xl text-muted-foreground">
							<span class="text-sm">Nascidos em </span>{playersData.sub15date}
						</div>
					</Card.Header>
					<Card.Content>
						<div class="text-2xl font-bold">{playersData.sub15}</div>
					</Card.Content>
				</Card.Root>
			{/if}
		</div>
	</div>
</div>

<FilterBar class="sticky top-0 z-10 bg-white shadow-md" />

<Table.Root class="border-t-8 border-orange-500 mt-4 shadow-md dark:bg-neutral-700 bg-white">
	<Table.Caption>Uma lista de todos os jogadores.</Table.Caption>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">ID</Table.Head>
			<Table.Head>Nome</Table.Head>
			<Table.Head class="">Idade</Table.Head>
			<Table.Head>Data de Nascimento</Table.Head>
			<Table.Head class="">Posição</Table.Head>
			<Table.Head>Altura</Table.Head>
			<Table.Head>Peso</Table.Head>
			<Table.Head class="">Dominancia</Table.Head>
			<Table.Head class="">Editar</Table.Head>
			<Table.Head class="">Página</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each players as player}
			<Table.Row on:click={() => handleClick(player)} class="cursor-pointer">
				<Table.Cell>{player.id}</Table.Cell>
				<Table.Cell>{player.name}</Table.Cell>
				<Table.Cell
					>{(() => {
						const dob = new Date(player.dob);
						const age = Math.floor(
							(new Date().getTime() - player.dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
						);
						return isNaN(age) ? 'Invalid date' : age;
					})()}</Table.Cell
				>
				<Table.Cell
					>{(() => {
						const dob = new Date(player.dob);
						const options = { month: 'long', year: 'numeric' };
						return dob.toLocaleDateString('pt-BR', options);
					})()}</Table.Cell
				>
				<Table.Cell>
					<Badge variant={player.position}>{player.position}</Badge>
				</Table.Cell>

				<Table.Cell>{player.height}</Table.Cell>
				<Table.Cell>{player.weight}</Table.Cell>
				<Table.Cell>{player.dominance}</Table.Cell>
				<Table.Cell><Button>Editar</Button></Table.Cell>
				<Table.Cell><Button>Página</Button></Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>

<Drawer.Root>
	<Drawer.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline">Open Drawer</Button>
	</Drawer.Trigger>
	<Drawer.Content>
		<div class="mx-auto w-full max-w-sm">
			<Drawer.Header>
				<Drawer.Title>Move Goal</Drawer.Title>
				<Drawer.Description>Set your daily activity goal.</Drawer.Description>
			</Drawer.Header>
			<div class="p-4 pb-0">
				<div class="flex items-center justify-center space-x-2">
					<Button
						variant="outline"
						size="icon"
						class="h-8 w-8 shrink-0 rounded-full"
						on:click={() => handleClick(-10)}
						disabled={300 <= 200}
					>
						<Minus class="h-4 w-4" />
						<span class="sr-only">Decrease</span>
					</Button>
					<div class="flex-1 text-center">
						<div class="text-7xl font-bold tracking-tighter">Teste</div>
						<div class="text-[0.70rem] uppercase text-muted-foreground">Calories/day</div>
					</div>
					<Button
						variant="outline"
						size="icon"
						class="h-8 w-8 shrink-0 rounded-full"
						on:click={() => handleClick(10)}
						disabled={200 >= 400}
					>
						<Plus class="h-4 w-4" />
						<span class="sr-only">Increase</span>
					</Button>
				</div>
			</div>
			<Drawer.Footer>
				<Button>Submit</Button>
				<Drawer.Close asChild let:builder>
					<Button builders={[builder]} variant="outline">Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</div>
	</Drawer.Content>
</Drawer.Root>
