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
			<img src={picture.url} alt={name} class="speaker" />
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
		gap: var(--size-8);
		place-content: center;
	}

	a {
		border: none;
	}

	article {
		max-width: 25ch;
		padding: var(--size-8);
		place-items: center;
		gap: var(--size-4);
	}
</style>
