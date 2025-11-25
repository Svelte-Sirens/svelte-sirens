<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error | {page.status}</title>
</svelte:head>

<h1>Uh oh, something went wrong!</h1>

<p>It looks like this page doesn't exist.</p>

<h2>{page.status}: {page.error?.message || 'Unknown error'}</h2>

<style>
	h1 {
		margin: 0;
	}
</style>
