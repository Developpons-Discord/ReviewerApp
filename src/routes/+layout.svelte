<script>
	import '../app.scss';
	import logo from '$lib/images/logo2.png';
</script>

<svelte:head>
	<link rel='shortcut icon' href={logo} type='image/x-icon'>
</svelte:head>

<main class='h-screen w-screen dark'>
	<slot />
</main>

<style>

</style>
