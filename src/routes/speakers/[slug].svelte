<script context="module">
	export async function load({ fetch, params }) {
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
	<article class="glass">
		<h1>{name}</h1>
		<img src={picture.url} alt={name} class="speaker" />
		{#if biography}
			<p>
				{@html marked(biography)}
			</p>
		{/if}
	</article>
{/each}

<style>
	article {
		padding: var(--size-8);
		margin: 0 auto;
		max-width: 60ch;
		display: grid;
		gap: var(--size-6);
		grid-template-columns: minmax(0, 1fr);
		place-items: center;
		text-align: left;
	}

	img {
		width: 100%;
		height: auto;
	}

	p {
		font-size: var(--font-size-fluid-1);
	}
</style>
