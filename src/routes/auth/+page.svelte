<script>
	import { TabItem, Tabs } from 'flowbite-svelte';
	import ForgotPassword from './ForgotPassword.svelte';
	import Login from './Login.svelte';
	import Register from './Register.svelte';
</script>

<Tabs style='underline'>
	<TabItem open title='Se connecter'>
		<Login />
	</TabItem>
	<TabItem title="S'inscrire">
		<Register />
	</TabItem>
	<TabItem title='Mot de passe oublié'>
		<ForgotPassword />
	</TabItem>
</Tabs>
