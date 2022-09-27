<script>
	import { page } from '$app/stores';
	const status = $page.status;
</script>

<svelte:head>
	<title>{`Error | ${status}`}</title>
</svelte:head>

<h1>Uh oh, something went wrong!</h1>

<p>It looks like this page doesn't exist.</p>

<h2>{status}: {$page.error.message}</h2>

<style>
	h1 {
		margin: 0;
	}
</style>
