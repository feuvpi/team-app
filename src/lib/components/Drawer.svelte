<script lang="ts">
	import Button from './ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { mediaQuery } from 'svelte-legos';
	import Badge from './ui/badge/badge.svelte';

	const isDesktop = mediaQuery('(min-width: 768px)');
	let open = false;

	let avatar = false;

	export let cliente: { nomeFantasia: any; razaoSocial: any; cnpj: any };
	$: title = cliente ? 'Editar Jogador' : 'Adicionar Jogador';
	$: btnTitle = cliente ? 'Editar' : 'Adicionar';

	let files: any[] = []; // array to store uploaded files
	let previews: any[] = []; // array to store file previews

	const handleFileDrop = (event: any) => {
		event.preventDefault();
		const filesToUpload = event.dataTransfer.files;
		handleFiles(filesToUpload);
	};

	const handleFileBrowse = () => {
		const fileInput = document.getElementById('input');
		fileInput?.click();
	};

	$: if (previews) {
		// Note that `files` is of type `FileList`, not an Array:
		// https://developer.mozilla.org/en-US/docs/Web/API/FileList
		console.log(previews);

		for (const file of previews) {
			console.log(`${file.name}: ${file.size} bytes`);
		}
	}

	const handleFiles = (filesToUpload: any) => {
		console.log('entrei');
		files = [...files, ...filesToUpload];
		previews = [];
		files.forEach((file) => {
			const reader = new FileReader();
			reader.onload = () => {
				const preview = {
					file,
					url: reader.result
				};
				previews.push(preview);
			};
			reader.readAsDataURL(file);
			console.log(previews);
		});
	};

	const handleDeleteFile = (index: number) => {
		files.splice(index, 1);
		previews.splice(index, 1);
	};
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Trigger asChild let:builder>
			<Button
				variant="outline"
				class="dark:border-orange-400 dark:text-orange-400 dark:bg-neutral-500"
				builders={[builder]}>{btnTitle}</Button
			>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[600px] border-2 dark:bg-neutral-700 border-orange-300">
			<Dialog.Header>
				<Dialog.Title class="text-2xl dark:text-orange-400">{title}</Dialog.Title>
			</Dialog.Header>
			<form method="POST" class="grid items-start gap-4">
				<!-- Profile Picture -->
				<div class="flex justify-center mb-4">
					<div class="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
						{#if avatar}
							<img
								src={avatar}
								alt="Profile Picture"
								class="w-full h-full object-cover rounded-full"
							/>
						{:else}
							<svg
								class="w-12 h-12 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<rect x="12" y="12" width="20" height="20" rx="5" fill="#fff" />
								<path
									d="M12 15v-3h6v3m0-6h5v6m-9-3h9v3m-3-6h3v6m-6-3h9v3"
									stroke="#fff"
									stroke-width="2"
								/>
							</svg>
						{/if}
					</div>
				</div>

				<!-- Form Inputs -->
				<div class="grid gap-2">
					<Label for="nome">Name</Label>
					<Input class="focus:border-orange-400" name="nome" type="text" id="nome" />
				</div>
				<div class="grid gap-2">
					<Label for="dataNascimento">Date of Birth</Label>
					<Input
						class="focus:border-orange-400"
						name="dataNascimento"
						type="date"
						id="dataNascimento"
					/>
				</div>
				<div class="grid gap-2">
					<Label for="posicao">Position</Label>
					<Input class="focus:border-orange-400" name="posicao" type="text" id="posicao" />
				</div>
				<div class="flex gap-2">
					<div class="grid gap-2 w-1/2">
						<Label for="dominancia">Dominance</Label>
						<Input class="focus:border-orange-400" name="dominancia" type="text" id="dominancia" />
					</div>
					<div class="grid gap-2 w-1/2">
						<Label for="peso">Weight</Label>
						<Input class="focus:border-orange-400" name="peso" type="number" id="peso" />
					</div>
					<div class="grid gap-2 w-1/2">
						<Label for="altura">Height</Label>
						<Input class="focus:border-orange-400" name="altura" type="number" id="altura" />
					</div>
				</div>

				<!-- Attachments -->
				<div
					class="flex-1 dark:border-orange-400 w-full items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0"
				>
					<div class="relative w-full">
						<div class="items-center justify-center max-w-xl mx-auto">
							<label
								class="flex justify-center w-full h-32 px-4 dark:bg-neutral-700 transition bg-white border-2 dark:border-orange-400 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
								id="drop"
								on:dragover={(event) => {
									event.preventDefault();
								}}
								on:drop={(event) => {
									event.preventDefault();
									handleFileDrop(event);
								}}
								><span class="flex items-center space-x-2 dark:text-orange-400"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-6 h-6 text-gray-600 dark:text-orange-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
										></path></svg
									><span class="font-medium text-gray-600 dark:text-orange-400"
										>Arraste arquivos, ou<a
											class="text-blue-600 dark:text-orange-500 underline ml-[4px]"
											on:click={handleFileBrowse}>procure</a
										></span
									></span
								><input
									type="file"
									name="file_upload"
									class="hidden"
									accept="image/png,image/jpeg"
									id="input"
								/></label
							>

							{#each previews as preview, index}
								<div class="flex items-center space-x-2 h-44">
									<img src={preview.url} alt="" class="w-12 h-12 rounded-md" />
									<span class="text-gray-600 dark:text-orange-400">{preview.file.name}</span>
									<button
										class="text-red-600 dark:text-orange-400 hover:text-red-900"
										on:click={() => handleDeleteFile(index)}
									>
										×
									</button>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<Button type="submit" class="bg-orange-400 hover:bg-orange-500">Salvar</Button>
			</form>
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<!-- Mobile Version -->
	<Drawer.Root bind:open>
		<Drawer.Trigger asChild let:builder>
			<Button
				class="w-full sticky top-0 bg-orange-300 mt-2 shadow-sm text-white hover:bg-orange-400"
				variant="outline"
				builders={[builder]}>{btnTitle}</Button
			>
		</Drawer.Trigger>
		<Drawer.Content>
			<Drawer.Header class="text-left">
				<Drawer.Title class="text-center">{title}</Drawer.Title>
				<!-- <Drawer.Description>
			  Make changes to your profile here. Click save when you're done.
			</Drawer.Description> -->
			</Drawer.Header>
			<form class="grid items-start gap-4 px-2">
				<div class="grid gap-2">
					<Label for="Nome">Nome Fantasia</Label>
					<Input type="text" id="Nome" value="Nome Fantasia" />
				</div>
				<div class="grid gap-2">
					<Label for="razao">Razão Social</Label>
					<Input id="razao" value="Razão Social" />
				</div>
				<div class="grid gap-2">
					<Label for="cnpj">CNPJ</Label>
					<Input id="cnpj" value="CNPJ" />
				</div>
				<div class="flex items-center space-x-2">
					<Checkbox class="w-8 h-8" name="removido" id="ativo" bind:checked />
					<Label
						for="ativo"
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Ativo
					</Label>
				</div>
				<Button type="submit">Salvar</Button>
			</form>
			<Drawer.Footer class="pt-2">
				<Drawer.Close asChild let:builder>
					<Button variant="outline" builders={[builder]}>Cancel</Button>
				</Drawer.Close>
			</Drawer.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}
