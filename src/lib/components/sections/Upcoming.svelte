<script lang="ts">
	import type { Speaker } from '@data/data';

	export let speakers: Speaker[];
</script>

<section>
	{#each speakers as { name, picture, slug }}
		<a href={`/speakers/${slug}`} class="glass">
			<article class="grid">
				<h3>{name}</h3>
				<img src={picture} alt={name} />
			</article>
		</a>
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
		border: 1px solid transparent;

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
		width: 250px;
		height: 250px;
	}

	@media (min-width: 800px) {
		section {
			flex-wrap: nowrap;
			padding: var(--size-8) var(--size-8) var(--size-4) var(--size-4);
			justify-content: start;
		}

		.glass {
			margin: 0;
			width: 30ch;
		}
	}
</style>
