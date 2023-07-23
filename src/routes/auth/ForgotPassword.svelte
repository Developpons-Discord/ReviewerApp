<script>
	import { Button, Card, Checkbox, Input, Label } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Mot de passe oublié</title>
</svelte:head>

<form class='flex flex-col space-y-6'>
	<Label class='space-y-2'>
		<span>Email</span>
		<Input type='email' placeholder='nom@exemple.com' required />
	</Label>

	<Button type='submit' class='w-full'>
		Réinitialiser le mot de passe
	</Button>
</form>