<script lang='ts'>
	import { Alert, Button, Spinner } from 'flowbite-svelte';
	import { resend } from '$lib/auth/registrar';

	let state: 'pending' | 'loading' | 'ok' | 'error' = 'pending';
	let error: string | undefined;

	const submitResend = async () => {
		const result = await resend();

		state = result.error ? 'error' : 'ok';
		error = result.error;
	};
</script>

<div class='flex flex-col space-y-6'>
	{#if ['pending', 'loading'].includes(state)}
		<Alert color='yellow' border>
			Votre compte n'est pas encore vérifié. Veuillez vérifier votre boîte de réception.
			Si vous n'avez pas reçu d'e-mail, cliquez sur le bouton ci-dessous pour renvoyer l'e-mail de vérification.
		</Alert>
	{:else if state === 'ok'}
		<Alert color='green' border>
			L'e-mail de vérification a été renvoyé.
		</Alert>
	{:else if state === 'error'}
		<Alert color='red' border>
			{ error }
		</Alert>
	{/if}

	<div class='flex flex-col space-y-2'>
		<Button on:click={submitResend} disabled={['loading', 'ok'].includes(state)}>
			{#if state === 'loading'}
				<Spinner class='mr-3' size='4' color='white' />
				Chargement...
			{:else}
				Renvoyer l'e-mail de vérification
			{/if}
		</Button>
		<Button color='alternative' href='/auth'>
			Retourner à la page de connexion
		</Button>
	</div>
</div>