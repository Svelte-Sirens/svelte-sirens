<script>
	import { speakers } from '@lib/data/speakers';
</script>

<h1>Speakers</h1>
<p>
	Join our other speakers, by submitting your own <a href="https://sessionize.com/sveltesirens/">
		talk
	</a>.
</p>
<section>
	{#each Object.entries(speakers) as [slug, { name, picture }]}
		<a href="/speakers/{slug}" class="grid glass">
			<article class="grid">
				<img src={picture} alt={name} class="speaker" />
				<h2>
					{name}
				</h2>
			</article>
		</a>
	{/each}
</section>

<style lang="scss">
	section {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-8);
		place-content: center;
	}

	p {
		font-size: var(--font-size-fluid-1);
	}

	.glass {
		width: 25ch;
		padding: var(--size-4);
		border-bottom: none;
		transition: var(--transition-transform);

		&:hover {
			transform: scale(1.1);
		}
	}

	article {
		place-items: center;
		gap: var(--size-4);
		align-content: start;
	}

	h2 {
		font-size: var(--font-size-4);
	}
</style>
