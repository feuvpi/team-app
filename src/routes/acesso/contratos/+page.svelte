<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Separator } from '$lib/components/ui/separator';
	import * as Sheet from '$lib/components/ui/sheet';
	import * as Table from '$lib/components/ui/table';
	import { ColumnSpacing } from 'svelte-radix';
	import type { PageData } from './$types';
	import Chart from 'chart.js/auto';

	export let data: PageData;

	const tableData = [
		{
			id: 1,
			jogador: 'Jogador 1',
			inicio: new Date('2023-01-01'),
			vigencia: new Date('2025-12-31'),
			bolsa: 50000
		},
		{
			id: 2,
			jogador: 'Jogador 2',
			inicio: new Date('2022-07-15'),
			vigencia: new Date('2024-07-14'),
			bolsa: 65000
		},
		{
			id: 3,
			jogador: 'Jogador 3',
			inicio: new Date('2021-10-13'),
			vigencia: new Date('2023-10-12'),
			bolsa: 35000
		},
		{
			id: 4,
			jogador: 'Jogador 4',
			inicio: new Date('2019-04-21'),
			vigencia: new Date('2024-04-20'),
			bolsa: 52000
		},
		{
			id: 5,
			jogador: 'Jogador 5',
			inicio: new Date('2020-08-18'),
			vigencia: new Date('2023-08-17'),
			bolsa: 70000
		},
		{
			id: 6,
			jogador: 'Jogador 6',
			inicio: new Date('2021-11-29'),
			vigencia: new Date('2024-11-28'),
			bolsa: 75000
		},
		{
			id: 7,
			jogador: 'Jogador 7',
			inicio: new Date('2022-05-27'),
			vigencia: new Date('2025-05-26'),
			bolsa: 67000
		},
		{
			id: 8,
			jogador: 'Jogador 8',
			inicio: new Date('2022-03-04'),
			vigencia: new Date('2024-03-03'),
			bolsa: 58000
		},
		{
			id: 9,
			jogador: 'Jogador 9',
			inicio: new Date('2021-06-06'),
			vigencia: new Date('2023-06-05'),
			bolsa: 38000
		},
		{
			id: 10,
			jogador: 'Jogador 10',
			inicio: new Date('2023-02-01'),
			vigencia: new Date('2025-01-31'),
			bolsa: 42000
		}
	];
	let button: Button;
	let selectedPartida = null;

	const onRowClick = (partida: any) => {
		selectedPartida = partida;
		console.log(partida);
		button.click();
		// Do other things on row click, e.g. navigate to a new page
	};
</script>

<h1 class="font-bold text-4xl font-mono text-left dark:text-orange-500 mb-4 lg:mt-4">Contratos</h1>
<Separator />

<div class="flex w-full justify-center">
	<Card.Root
		class="xl:col-span-2 w-full mt-4 h-fit border-orange-400 dark:bg-neutral-700"
		data-x-chunk-name="dashboard-01-chunk-4"
		data-x-chunk-description="A card showing a table of recent transactions with a link to view all transactions."
	>
		<Card.Header class="flex flex-row items-center">
			<!-- <div class="grid gap-2">
				<Card.Title>Transactions</Card.Title>
				<Card.Description>Recent transactions from your store.</Card.Description>
			</div> -->
			<Button href="##" size="sm" class="ml-auto gap-1">
				Adicionar
				<!-- <ArrowUpRight class="h-4 w-4" /> -->
			</Button>
		</Card.Header>
		<Card.Content>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>ID</Table.Head>
						<Table.Head class="xl:table.-column">Jogador</Table.Head>
						<Table.Head class="xl:table.-column">Inicio</Table.Head>
						<Table.Head class="xl:table.-column">Vigência</Table.Head>
						<Table.Head class="text-right">Bolsa</Table.Head>
						<Table.Head class="text-center">Anexos</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each tableData as contrato}
						<Table.Row on:click={() => onRowClick(contrato)}>
							<Table.Cell class="whitespace-nowrap">
								<div class="font-medium">{contrato.id}</div>
							</Table.Cell>
							<Table.Cell class="hidden xl:table-cell">
								<div class="font-medium">{contrato.jogador}</div>
							</Table.Cell>
							<Table.Cell class="xl:table-cell">
								<div class="font-medium">
									{new Intl.DateTimeFormat('pt-BR', {
										year: 'numeric',
										month: '2-digit',
										day: '2-digit'
									}).format(contrato.inicio)}
								</div>
							</Table.Cell>
							<Table.Cell class="xl:table-cell">
								<div class="font-medium">
									{new Intl.DateTimeFormat('pt-BR', {
										year: 'numeric',
										month: '2-digit',
										day: '2-digit'
									}).format(contrato.vigencia)}
								</div>
							</Table.Cell>

							<Table.Cell class="text-right">
								<div class="font-medium">
									{new Intl.NumberFormat('pt-BR', {
										style: 'currency',
										currency: 'BRL'
									}).format(contrato.bolsa)}
								</div>
							</Table.Cell>

							<Table.Cell class="text-center">
								<Sheet.Root>
									<Sheet.Trigger asChild let:builder>
										<Button class="border-orange-400" builders={[builder]} variant="outline"
											>Abrir</Button
										>
									</Sheet.Trigger>
									<Sheet.Content class="dark:bg-neutral-700 border-orange-400" side="right">
										<Sheet.Header>
											<Sheet.Title>Anexos do Contrato</Sheet.Title>
											<Sheet.Description>Mostrar anexos atrelados ao contrato.</Sheet.Description>
										</Sheet.Header>

										<Sheet.Footer>
											<Sheet.Close asChild let:builder>
												<!-- <Button bind:this={button} builders={[builder]}>Save changes</Button> -->
											</Sheet.Close>
										</Sheet.Footer>
									</Sheet.Content>
								</Sheet.Root>
							</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
</div>
