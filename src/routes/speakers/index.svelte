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
<section>
	{#each speakers as { name, slug, picture }}
		<article class="grid glass">
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
		max-width: 50ch;
		place-content: center;
	}

	img {
		width: 200px;
	}

	article {
		max-width: 20ch;
		padding: var(--gap-8);
		place-items: center;
		gap: var(--gap-4);
	}
</style>
