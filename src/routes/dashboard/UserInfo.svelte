<script>
    import { onMount } from 'svelte';
    import { getCurrentUser } from '$lib/auth/getCurrentUser'

    let userData = Object();

    onMount(async () => {
        const user = await getCurrentUser()
        if(user != undefined){
            userData = user.value
        }
    });
</script>

<div>
    <h1 class="font-bold text-2xl">Votre profil</h1>

    <div class="flex flex-col gap-y-2 mt-2">
        <h3 class="font-bold">Informations du compte</h3>
        <p>Nom d'utilisateur : {userData.username}</p>
        <p>Email : {userData.email}</p>
        <p>Vérifié : {userData.verified ? 'Oui' : 'Non'}</p>
        <div class="flex flex-col">
            <p>Roles</p>
            <ul class="flex flex-col gap-y-1 list-disc ms-5">
                {#if userData.roles != undefined}
                    {#each userData.roles as role}
                        <li>{role}</li>
                    {/each}
                {/if}
            </ul>
        </div>
        <p>Crée le : {userData.createdAt}</p>
        <p>Edité le : {userData.updatedAt}</p>
    </div>

    <!-- here add button to change password -->
</div>
