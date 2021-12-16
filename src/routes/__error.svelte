<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: { error, status }
		};
	};
</script>

<script>
	export let error, status;
</script>

<svelte:head>
	<title>{`Error | ${status}`}</title>
</svelte:head>

<h1>Uh oh, something went wrong!</h1>

<p>It looks like this page doesn't exist.</p>

<h2>{status}: {error.message}</h2>

<style>
	h1 {
		margin: 0;
	}
</style>
