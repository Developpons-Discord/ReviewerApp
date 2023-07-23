<script>
	import { Card, TabItem, Tabs } from 'flowbite-svelte';
	import Login from './Login.svelte';
	import Register from './Register.svelte';
	import ForgotPassword from './ForgotPassword.svelte';
</script>

<section id='auth' class='w-full h-screen bg-slate-800 flex items-center justify-center'>
	<Card class='min-w-max'>
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
	</Card>
</section>