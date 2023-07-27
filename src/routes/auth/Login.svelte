<script lang='ts'>
	import { Alert, Button, Checkbox, Input, Label, Spinner } from 'flowbite-svelte';
	import { login } from '$lib/auth/login.js';
	import type { User } from '$lib/types/user';

	let username = '';
	let password = '';

	let state: 'pending' | 'loading' | 'ok' | 'error' = 'pending';
	let error: string | undefined = '';
	let user: User | undefined;

	const loginSubmit = async () => {
		state = 'loading';

		const result = await login({ username, password });
		error = result.error;
		user = result.value;

		state = error ? 'error' : 'ok';

		if (state === 'ok') {
			localStorage.setItem('user', JSON.stringify(user));

			if(!user?.verified) {
				setTimeout(() => {
					window.location.href = '/auth/not-verified';
				}, 1000);
				return;

			}
			setTimeout(() => {
				window.location.href = '/';
			}, 1000);
		}
	};
</script>

<svelte:head>
	<title>Se connecter</title>
</svelte:head>

<form class='flex flex-col space-y-6' on:submit|preventDefault={loginSubmit}>
	{#if state === 'error'}
		<Alert color='red' border class='items-start'>
			<p class='font-medium'>
				{error}
			</p>
		</Alert>
	{:else if state === 'ok'}
		<Alert color='green' border class='items-start'>
			<p class='font-medium'>
				Vous êtes maintenant connecté en tant que
				<span class='font-bold'>{ user?.username }</span>. Redirection...
			</p>
		</Alert>
	{/if}

	<Label class='space-y-2'>
		<span>Nom d'utilisateur</span>
		<Input type='text' placeholder='JohnDoe' name='username' required bind:value={username} />
	</Label>

	<Label class='space-y-2'>
			<span>
				Mot de passe
			</span>

		<Input type='password' name='password' placeholder='••••••' required bind:value={password} />
	</Label>

	<Checkbox>Rester connecté</Checkbox>

	<Button type='submit' class='w-full' disabled={['loading', 'ok'].includes(state)}>
		{#if state === 'loading'}
			<Spinner class='mr-3' size='4' color='white' />
			Chargement...
		{:else}
			Se connecter
		{/if}
	</Button>
</form>