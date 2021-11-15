<script context="module">
	export async function load({ page }) {
		// const res = await fetch(`/events/${page.params.slug}`);
		// const data = await res.json();
		let slug = page.params.slug;
		return {
			props: {
				// event: data.events
				slug
			}
		};
	}
</script>

<script>
	export let slug;
</script>

<!-- <svelte:head>
	<title>{title}</title>
</svelte:head> -->

<h1>{slug}</h1>
