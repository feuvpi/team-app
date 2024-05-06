<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/form';
	import { Separator } from '$lib/components/ui/separator';
	import * as Table from '$lib/components/ui/table';
	import { getLocalTimeZone, today } from '@internationalized/date';
	import type { PageData } from './$types';

	export let data: PageData;
	let value = today(getLocalTimeZone());

	const tableData = [
		{
			data: new Date('2022-09-15T14:30:00'),
			mando: true,
			base: 'sub-15',
			adversario: 's.c. braga'
		},
		{
			data: new Date('2022-09-22T16:00:00'),
			mando: false,
			base: 'sub-12',
			adversario: 'f.c. porto'
		},
		{
			data: new Date('2022-09-29T18:30:00'),
			mando: true,
			base: 'sub-14',
			adversario: 's.l. benfica'
		},
		{
			data: new Date('2022-10-06T14:00:00'),
			mando: false,
			base: 'sub-15',
			adversario: 'c.f. os belenenses'
		},
		{
			data: new Date('2022-10-13T16:30:00'),
			mando: true,
			base: 'sub-12',
			adversario: 'g.d. estoril praia'
		},
		{
			data: new Date('2022-10-20T18:00:00'),
			mando: false,
			base: 'sub-14',
			adversario: 'vitória f.c.'
		},
		{
			data: new Date('2022-10-27T14:00:00'),
			mando: true,
			base: 'sub-15',
			adversario: 'c.d. nacional'
		},
		{
			data: new Date('2022-11-03T16:30:00'),
			mando: false,
			base: 'sub-12',
			adversario: 'c.s. marítimo'
		}
	];
</script>

<h1 class="font-bold text-4xl font-mono text-left dark:text-orange-500 lg:mt-2">Partidas</h1>
<Separator class="mb-4" />

<div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
	<Card.Root
		class="xl:col-span-2 dark:bg-neutral-700 border-orange-400"
		data-x-chunk-name="dashboard-01-chunk-4"
		data-x-chunk-description="A card showing a table of recent transactions with a link to view all transactions."
	>
		<Card.Header class="flex flex-row items-center">
			<!-- <div class="grid gap-2">
				<Card.Title>Calendario</Card.Title>
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
						<Table.Head class="w-1/6 hidden xl:table-cell">Data</Table.Head>
						<Table.Head class="w-1/6 text-center xl:table-cell">Mando</Table.Head>
						<Table.Head class="w-1/6 text-center xl:table-cell">Base</Table.Head>
						<Table.Head class="w-1/2 text-center">Partida</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each tableData as partida}
						<Table.Row>
							<Table.Cell class="w-1/6">
								<div class="font-medium">
									{new Intl.DateTimeFormat('pt-BR', {
										day: '2-digit',
										month: '2-digit',
										year: '2-digit'
									}).format(partida.data)}
								</div>
							</Table.Cell>
							<Table.Cell class="w-1/6 text-center">{partida.mando ? 'Casa' : 'Fora'}</Table.Cell>
							<Table.Cell class="w-1/6 text-center">
								<Badge class="text-xs" variant="outline">{partida.base}</Badge>
							</Table.Cell>
							<Table.Cell class="w-1/2 text-center uppercase font-medium"
								>{partida.mando
									? `${partida.base} vs. ${partida.adversario}`
									: `${partida.adversario} vs. ${partida.base}`}</Table.Cell
							>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
	<Calendar bind:value class="rounded-md border dark:border-orange-400 border-orange-400" />
</div>
