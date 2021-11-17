<script context="module">
	export const load = async ({ fetch, page: { params } }) => {
		const { slug } = params;
		const res = await fetch(`/events/${slug}.json`);
		if (res.ok) {
			const data = await res.json();
			const event = data[0];
			console.log(event);
			return {
				props: event
			};
		}
	};
</script>

<script>
	export let event;
	console.log(event);
</script>

<!-- <svelte:head>
	<title>{title}</title>
</svelte:head> -->
