<script context="module">
	export async function load({ fetch, page: { params } }) {
		const res = await fetch(`/speakers/${params.slug}.json`);
		const speakers = await res.json();
		return {
			props: {
				speakers
			}
		};
	}
</script>

<script>
	import { marked } from 'marked';
	export let speakers;
</script>

<section>
	{#each speakers as { name, picture, biography }}
		<img src={picture.url} alt={name} />
		<article>
			{@html marked(biography)}
		</article>
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: var(--gap-4);
		grid-template-columns: minmax(0, 1fr);
		place-items: center;
		place-content: center;
		height: 90vh;
	}
</style>
