<script context="module">
	export async function load({ page }) {
		const res = await fetch(`/events/${page.params.slug}`);
		const data = await res.json();
		// let slug = page.params.slug;
		return {
			props: {
				event: data.events
			}
		};
	}
</script>

<script>
  export let event
  const title =
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>
