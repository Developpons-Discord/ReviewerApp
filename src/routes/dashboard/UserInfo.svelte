<script>
    export let userData = {}
</script>

<div>
    <h1 class="font-bold text-2xl">Votre profil</h1>

    <div class="flex flex-col gap-y-2 mt-2">
        <h3 class="font-bold">Informations du compte</h3>
        <p>Nom d'utilisateur : {userData.username}</p>
        <p>Email : {userData.email}</p>
        <p>Vérifié : Oui</p>
        <div class="flex flex-col">
            <p>Roles</p>
            <ul class="flex flex-col gap-y-1 list-disc ms-5">
                {#each userData.roles as role}
                    <li>{role}</li>
                {/each}
            </ul>
        </div>
        <p>Crée le : {userData.createdAt}</p>
        <p>Edité le : {userData.updatedAt}</p>
    </div>

    <!-- here add button to change password -->
</div>
