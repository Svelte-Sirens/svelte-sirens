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
	<section class="glass">
		{#each talks as { talkUrl, title }}
			{#if talkUrl}
				<h2>{title}</h2>
				<div class="video-wrapper">
					<iframe
						src={talkUrl}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
				</div>
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

	.glass {
		display: grid;
		gap: var(--gap-4);
		grid-template-columns: minmax(0, 1fr);

		h2 {
			font-family: var(--font-body);
		}

		.video-wrapper {
			position: relative;
			padding-bottom: 56.25%;
			height: 0;
		}

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
