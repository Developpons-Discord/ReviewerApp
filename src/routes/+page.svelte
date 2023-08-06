<script lang='ts'>
	import { onMount } from "svelte";

    export let data;

    onMount(async () => {
        if(data.access_token){
            window.location.href = '/dashboard';
        } else {
            window.location.href = '/auth';
        }
    });
</script>
