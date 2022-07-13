<script lang="ts">
	import type { Speaker } from '@data/data';

	export let speaker: Speaker;
	export let biography: string | undefined;
</script>

<article class="glass">
	<h1>{speaker.name}</h1>
	<img src={speaker.picture} alt={speaker.name} class="speaker" />

	{#if biography}
		<p>
			<!-- TODO sanitise -->
			{@html speaker.biography}
		</p>
	{/if}
</article>

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
