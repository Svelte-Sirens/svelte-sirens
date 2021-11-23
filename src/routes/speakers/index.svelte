<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/speakers.json');
		const speakers = await res.json();
		return {
			props: {
				speakers
			}
		};
	}
</script>

<script>
	export let speakers;
</script>

<section>
	<h1>Speakers</h1>
	{#each speakers as { name, slug, picture }}
		<article>
			<img src={picture.url} alt={name} />
			<h2>
				<a href={`/speakers/${slug}`}>{name} </a>
			</h2>
		</article>
	{/each}
</section>

<style>
	section {
		display: grid;
		gap: var(--gap-8);
		grid-template-columns: minmax(0, 1fr);
	}

	img {
		width: 100px;
	}
	article {
		display: flex;
		align-items: center;
		gap: var(--gap-4);
	}
</style>
