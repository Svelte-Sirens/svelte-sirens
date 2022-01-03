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
	console.log(talks);
</script>

<h1>Talks</h1>
<p>
	Join our other speakers, by submitting your own <a href="https://sessionize.com/sveltesirens/">
		talk
	</a>.
</p>
<article class="grid">
	<section>
		{#each talks as { talkUrl, title, slug, coverImage }}
			{#if talkUrl}
				<a href={`/talks/${slug}`} class="glass">
					<h2>{title}</h2>
					<img src={coverImage.url} alt="" />
				</a>
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
	article {
		justify-content: center;
		justify-items: center;

		& section {
			display: flex;
		}

		& .glass {
			border-bottom: none;
			transition: var(--transition-transform);

			&:hover {
				transform: scale(1.1);
			}

			& h2 {
				font-size: var(--font-size-fluid-1);
			}
		}
	}
</style>
