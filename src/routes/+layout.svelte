<script>
	import '../app.scss';
	import logo from '$lib/images/logo2.png';
	import axios from 'axios';

	axios.defaults.baseURL = 'http://localhost:3000/'
</script>

<svelte:head>
	<link rel='shortcut icon' href={logo} type='image/x-icon'>
</svelte:head>

<main class='h-screen max-w-[100vw] dark'>
	<slot />
</main>

<style>

</style>
