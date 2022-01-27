<script>
	export let speakers;
	speakers = speakers.slice(0, 4).reverse();
</script>

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
	section {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-8);
	}

	.glass {
		height: 310px;
		max-width: 25ch;
		padding: var(--size-4);
		margin: var(--size-2);
		border-bottom: none;
		transform: var(--transition-colors);
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
		height: 200px;
		width: 200px;
		border-radius: 100%;
		object-fit: cover;
	}
	@media (min-width: 1024px) {
		section {
			flex-wrap: nowrap;
			overflow-x: auto;
			justify-content: start;
			padding: var(--size-8) var(--size-8) var(--size-4) var(--size-4);
			width: 100vw;
		}

		.glass {
			margin: 0;
		}
	}
</style>
