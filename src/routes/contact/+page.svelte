<script lang="ts">
    import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

    export let form: ActionData;
</script>

<form method="POST" use:enhance>
    <input required value={form?.email || ''} name="email" type="email" placeholder="hello@example.com">
    <input required value={form?.name || ''} name="name" type="text" placeholder="John Doe">
    <input value={form?.discord || ''} name="discord" type="text" placeholder="GHOST#7524" >

    <textarea required value={form?.idea || ''} name="idea" placeholder="Ideas"></textarea>

    <button>Submit!</button>
</form>

{#if form?.success}
    <p>You successfully submitted a talk</p>
{:else}
    <p>There was an error: {form?.error}</p>
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>