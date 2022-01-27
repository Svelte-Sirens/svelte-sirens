<script>
	export let speakers;
</script>

<p>
	Join our other amazing speakers, by submitting your own
	<a href="https://sessionize.com/sveltesirens/"> talk </a>.
</p>
<section>
	{#each speakers as { name, slug, picture }}
		<a href={`/speakers/${slug}`} class="glass">
			<article class="grid">
				<h4>{name}</h4>
				<img src={picture.url} alt={name} />
			</article>
		</a>
	{/each}
</section>

<style lang="scss">
	p {
		font-size: var(--font-size-fluid-1);
	}
	section {
		display: flex;
		overflow-x: auto;
		padding: var(--size-8) 0 0;
		width: 100vw;
	}

	.glass {
		width: 30ch;
		padding: var(--size-4);
		border-bottom: none;
		transition: var(--transition-transform);

		&:hover {
			transform: scale(1.1);
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
</style>
