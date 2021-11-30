<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/talks.json');
		const talks = await res.json();
		return {
			props: {
				talks
			}
		};
	}
</script>

<script>
	export let talks;
</script>

<h1>Talks</h1>
<article>
	<section>
		{#each talks as { talkUrl }}
			{#if talkUrl}
				<iframe
					width="100%"
					height="350"
					src={talkUrl}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			{/if}
		{/each}
	</section>
	<section>
		<p>
			We are working on more exciting <a href="/events">events</a> coming soon.
		</p>
	</section>
</article>

<style lang="scss">
	section {
		height: 100%;
	}

	h1 {
		animation: var(--fade-in);
		margin-bottom: var(--gap-4);
	}

	article {
		display: grid;
		gap: var(--gap-4);
		grid-template-columns: minmax(0, 1fr);
	}
</style>
