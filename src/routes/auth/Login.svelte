<script>
	import { Button, Checkbox, Input, Label } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Se connecter</title>
</svelte:head>

<form class='flex flex-col space-y-6'>
	<Label class='space-y-2'>
		<span>Email</span>
		<Input type='email' placeholder='nom@exemple.com' required />
	</Label>

	<Label class='space-y-2'>
			<span>
				Mot de passe
			</span>

		<Input type='password' name='password' placeholder='••••••' required />
	</Label>

	<div class='flex items-start'>
		<Checkbox>Rester connecté</Checkbox>
		<a href='/auth/lost-password' class='ml-auto text-sm text-primary-500 hover:underline'>
			Mot de passe oublié ?
		</a>
	</div>

	<Button type='submit' class='w-full'>
		Se connecter
	</Button>
</form>