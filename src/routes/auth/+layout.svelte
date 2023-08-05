<script>
	import { Card } from 'flowbite-svelte';
</script>

<section id='auth' class='w-full h-screen bg-slate-800 flex items-center justify-center lg:p-36 sm:p-0'>
	<Card class='max-h-[90vh] max-w-[90vw] w-fit overflow-y-scroll'>
		<slot />
	</Card>
</section>