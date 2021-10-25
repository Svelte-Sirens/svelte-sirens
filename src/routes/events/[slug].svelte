<script context="module">
	export async function load({ page }) {
		let slug = page.params.slug;
		return {
			props: {
				slug
			}
		};
	}
</script>

<script>
	export let slug;
</script>

<h1>{slug.slice(0, 1).toUpperCase()}{slug.substring(1)}</h1>
