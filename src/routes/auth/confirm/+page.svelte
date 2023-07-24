<script lang='ts'>
	import { Alert, Button, Spinner } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { confirm } from '$lib/auth/registrar';
	import { onMount } from 'svelte';

	let confirmed: 'pending' | 'ok' | 'error' = 'pending';
	let error: string | undefined = undefined;

	const [code, userId] = [$page.url.searchParams.get('code'), $page.url.searchParams.get('userId')];

	if (!(code && userId)) {
		error = 'Le lien de confirmation est invalide. Connectez-vous à votre compte pour en recevoir un nouveau.';
		confirmed = 'error';
	} else {
		onMount(async () => {
			const result = await confirm(userId, code);
			if (result.error) {
				error = result.error;
				confirmed = 'error';
			} else {
				confirmed = 'ok';
			}
		});
	}
</script>

<div class='flex flex-col space-y-6'>
	{#if confirmed === 'pending'}
		<Alert color='blue' border class='flex items-center'>
			<Spinner color='blue' size='6' />
			Confirmation de votre adresse email en cours...
		</Alert>
	{:else if confirmed === 'ok'}
		<Alert color='green' border>
			Votre adresse email a été confirmée ! Vous pouvez désormais quitter cette page et vous connecter à votre compte
		</Alert>
		<Button href='/auth'>
			Aller à la page de connexion
		</Button>
	{:else}
		<Alert color='red' border class='items-start'>
			Des erreurs sont survenues lors de la vérification de votre adresse email :
			<ul class='mt-1.5 ml-4 list-disc list-inside'>
				<li>{error}</li>
			</ul>
		</Alert>

		<Button href='/auth'>
			Aller à la page de connexion
		</Button>
	{/if}
</div>