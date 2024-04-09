<script lang="ts" context="module">
	import { z } from "zod";
	export const profileFormSchema = z.object({
		username: z
			.string()
			.min(2, "Username must be at least 2 characters.")
			.max(30, "Username must not be longer than 30 characters"),
		email: z.string({ required_error: "Please select an email to display" }).email(),
		bio: z.string().min(4).max(160).default("I own a computer."),
		urls: z
			.array(z.string().url())
			.default(["https://shadcn.com", "https://twitter.com/shadcn"]),
	});
	export type ProfileFormSchema = typeof profileFormSchema;
</script>

<script lang="ts">
	import { type Infer, type SuperValidated, superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { tick } from "svelte";
	import * as Form from "$lib/components/ui/form/index";
	import * as Select from "$lib/components/ui/select/index";
	import { Input } from "$lib/components/ui/input/index";


	export let data: SuperValidated<Infer<ProfileFormSchema>>;

	const form = superForm(data, {
		validators: zodClient(profileFormSchema),
	});

	const { form: formData, enhance } = form;

	function addUrl() {
		$formData.urls = [...$formData.urls, ""];

		tick().then(() => {
			const urlInputs = Array.from(
				document.querySelectorAll<HTMLElement>("#profile-form input[name='urls']")
			);
			const lastInput = urlInputs[urlInputs.length - 1];
			lastInput && lastInput.focus();
		});
	}

	$: selectedEmail = {
		label: $formData.email,
		value: $formData.email,
	};

	$: selectedRole = {
		label:"Admin",
		value: "Admin",
	};
</script>

<form method="POST" class="space-y-8" use:enhance id="profile-form">
	<Form.Field {form} name="username">
		<Form.Control let:attrs>
			<Form.Label>Nome</Form.Label>
			<Input placeholder="Seu Nome" {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<!-- <Form.Description>
			This is your public display name. It can be your real name or a pseudonym. You can only
			change this once every 30 days.
		</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="email">
		<Form.Control let:attrs>
			<Form.Label>E-mail</Form.Label>
			<Input placeholder="Endereço de e-mail" {...attrs} bind:value={$formData.username} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>


	<Form.Field {form} name="bio">
		<Form.Control let:attrs>
			<Form.Label>Perfil de Usúario</Form.Label>
			<Select.Root
				selected={selectedRole}
				disabled={true}
				onSelectedChange={(s) => {
					s && ($formData.email = s.value);
				}}
			>
				<Select.Trigger {...attrs}>
					<Select.Value placeholder="Escolha um perfil de usuario" />
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="admin" label="Administrador" />
					<Select.Item value="dirigente" label="Dirigente" />
					<Select.Item value="tecnico" label="Técnico" />
					<Select.Item value="comissao" label="Comissão" />
				</Select.Content>
			</Select.Root>
			<input hidden name={attrs.name} bind:value={$formData.email} />
		</Form.Control>
		<!-- <Form.Description>
			You can <span>@mention</span> other users and organizations to link to them.
		</Form.Description> -->
		<Form.FieldErrors />
	</Form.Field>

	<Form.Button>Atualizar</Form.Button>
</form>

<!-- {#if browser}
	<SuperDebug data={$formData} />
{/if} -->
