<script context="module">
	export async function load({ fetch, page: { params } }) {
		const res = await fetch(`/speakers/${params.slug}.json`);
		const speakers = await res.json();
		if (res.ok && speakers.length > 0) {
			return {
				props: {
					speakers
				}
			};
		}
	}
</script>

<script>
	import { marked } from 'marked';
	export let speakers;
</script>

{#each speakers as { name, picture, biography }}
	<h1>{name}</h1>
	<article class="glass">
		<img src={picture.url} alt={name} />
		<section>
			{#if biography}
				{@html marked(biography)}
			{/if}
		</section>
	</article>
{/each}

<style>
	article {
		padding: var(--gap-8);
		margin: 0 auto;
		max-width: 50ch;
		display: grid;
		gap: var(--gap-4);
		grid-template-columns: minmax(0, 1fr);
		place-items: center;
		text-align: left;
	}
</style>
