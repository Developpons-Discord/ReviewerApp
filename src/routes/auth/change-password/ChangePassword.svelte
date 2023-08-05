<script lang="ts">
	import { Alert, Button, Input, Label, Spinner } from 'flowbite-svelte';
	import { page } from '$app/stores';
    import { doChangePassword } from '$lib/auth/change-password';

	let password: string
    let confirmPassword: string

	let loading = false;
	let errors: string[] = [];
	let success: boolean | undefined = undefined;

    const [code, userId] = [$page.url.searchParams.get('code'), $page.url.searchParams.get('userId')];

	if (!(code && userId)) {
		errors.push('Le lien de confirmation est invalide. Veuillez réessayer.');
	}

    async function sendChangePasswordEmail() {
		loading = true;

        const result = await doChangePassword(Number(userId), String(code), password, confirmPassword);
        let _errors = result.error ? [...result.error] : [];
        errors = errors.concat(_errors)

        loading = false;
        success = errors.length === 0;
    }
</script>

<svelte:head>
    <title>Changement de mot de passe</title>
</svelte:head>

<form class="flex flex-col space-y-6" on:submit={sendChangePasswordEmail}>
    <h3 class="font-bold">Changement de mot de passe</h3>

    {#if errors.length > 0}
        <Alert color='red' border class='items-start'>
            <p class='font-medium'>
                Des erreurs sont survenues lors du traitement de votre demande :
            </p>
            <ul class='mt-1.5 ml-4 list-disc list-inside'>
                {#each errors as error}
                    <li>{error}</li>
                {/each}
            </ul>
        </Alert>
    {/if}

    {#if success}
        <Alert color='green' border>
            <p class='font-medium'>
                Mot de passe modifié avec success
            </p>
        </Alert>
    {/if}

    <Label class='space-y-2'>
            <span>
                Nouveau mot de passe
            </span>

        <Input type='password' placeholder='••••••' name='password' required bind:value={password} />
    </Label>

    <Label class='space-y-2'>
            <span>
                Confirmez le nouveau mot de passe
            </span>

        <Input type='password' placeholder='••••••' name='confirmPassword' required bind:value={confirmPassword} />
    </Label>

    <Button type='submit' class='w-full' disabled={loading}>
        {#if loading}
            <Spinner class='mr-3' size='4' color='white' />
            Chargement...
        {:else}
            Confirmer
        {/if}
    </Button>
</form>
