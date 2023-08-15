<script lang="ts">
	import { Alert, Button, Input, Label, Spinner } from 'flowbite-svelte';
	import {sendEmail} from "$lib/auth/change-password";

	let email: string
	
	let loading = false;
	let errors: string[] = [];
	let success: boolean | undefined = undefined;

	async function onSubmit() {
		loading = true;

		const result = await sendEmail(email);
		errors = result.error ? [...result.error] : [];

		loading = false;
		success = errors.length === 0;
	}
</script>

<svelte:head>
	<title>Mot de passe oublié</title>
</svelte:head>

<form class='flex flex-col space-y-6' on:submit|preventDefault={onSubmit}>
	{#if errors.length > 0}
		<Alert color='red' border class='items-start'>
			<p class='font-medium'>
				Des erreurs sont survenues lors du traitement de votre demande :
			</p>
			<ul class='mt-1.5 ml-4 list-disc list-inside'>
				{#each errors as error}
					<li>{error}</li>
				{/each}
			</ul>
		</Alert>
	{/if}

	{#if success}
		<Alert color='green' border>
			<p class='font-medium'>
				Vérifiez vos emails pour changer votre mot de passe.
			</p>
		</Alert>
	{/if}

	<Label class='space-y-2'>
		<span>Email</span>
		<Input type='email' placeholder='nom@exemple.com' required bind:value={email} />
	</Label>

	<Button type='submit' class='w-full' disabled={loading}>
		{#if loading}
			<Spinner class='mr-3' size='4' color='white' />
			Chargement...
		{:else}
			Réinitialiser le mot de passe
		{/if}
	</Button>
</form>
