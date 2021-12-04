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

<h1>Speakers</h1>
<section class="glass">
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
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-8);
		max-width: 80ch;
		place-content: center;
	}

	img {
		width: 200px;
	}

	article {
		display: grid;
		place-items: center;
		gap: var(--gap-4);
	}
</style>
