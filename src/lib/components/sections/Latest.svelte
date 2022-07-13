<script lang="ts">
	import type { Event, Stream } from '@data/data.d';

	export let streams: Stream[];
	export let events: Event[];
</script>

<section>
	{#each streams as { streamUrl, title, guests }}
		{#each guests as guest}
			<a href={streamUrl} class="glass">
				<article class="grid">
					<h3>{title}</h3>
					<img src={guest.picture} alt={title} />
				</article>
			</a>
		{/each}
	{/each}
	{#each events as { slug, title, speakers }}
		{#each speakers as speaker}
			<a href={`/latest/${slug}`} class="glass">
				<article class="grid">
					<h3>{title}</h3>
					<img src={speaker.picture} alt={title} />
				</article>
			</a>
		{/each}
	{/each}
</section>

<style lang="scss">
	section {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-8);
	}
	.glass {
		width: 30ch;
		padding: var(--size-4);
		margin: var(--size-2);
		border-bottom: none;
		transition: var(--transition-colors);
		flex-shrink: 0;

		&:hover {
			border: 1px solid var(--aqua);
		}
	}

	article {
		justify-items: center;
		align-items: space-between;
		gap: var(--size-4);
		align-content: start;
	}

	img {
		border-radius: 100%;
	}

	@media (min-width: 800px) {
		section {
			flex-wrap: nowrap;
			padding: var(--size-8) var(--size-8) var(--size-4) var(--size-4);
			justify-content: start;
			width: 100vw;
		}

		.glass {
			margin: 0;
			width: 30ch;
		}
	}
</style>
