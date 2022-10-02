<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="glass">
	<h1>{data.speaker.name}</h1>
	<img src={data.speaker.picture} alt={data.speaker.name} class="speaker" />
	<a href={data.speaker.handleUrl} rel="noopener norefferer" target="_blank">
		<span>{data.speaker.handle}</span>
	</a>

	{#if data.biography}
		<p>
			<!-- TODO sanitise -->
			{@html data.speaker.biography}
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

	a {
		font-size: var(--font-size-fluid-2);
	}

	p {
		font-size: var(--font-size-fluid-1);
	}
</style>
