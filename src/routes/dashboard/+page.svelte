<script lang="ts">
    import { TabItem, Tabs } from 'flowbite-svelte';
	import UserInfo from './UserInfo.svelte';
	import Feed from './Feed.svelte';

	export let data
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<Tabs style='underline'>
	<TabItem open title="Feed">
		<Feed />
	</TabItem>
	<TabItem title='Informations'>
		<UserInfo userData={data.userData} />
	</TabItem>
</Tabs>