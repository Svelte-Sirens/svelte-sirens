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
<p>
	Join our other speakers, by submitting your own <a href="https://sessionize.com/sveltesirens/">
		talk
	</a>.
</p>
<article class="grid">
	<section class="talks">
		{#each talks as { talkUrl, title, slug, coverImage }}
			{#if talkUrl}
				<a href={`/talks/${slug}`} class="glass grid">
					<h2>{title}</h2>
					<img src={coverImage.url} alt="" />
				</a>
			{/if}
		{/each}
	</section>
	<section class="calendar">
		<p>
			Never miss an <a href="/events" sveltekit:prefetch>event</a>,
		</p>
		<a rel="external" href="/calendar" class="calendar-link">
			<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
		</a>
	</section>
</article>

<style lang="scss">
	article {
		justify-content: center;
		justify-items: center;

		& .talks {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: var(--size-6);
		}

		& .glass {
			min-width: 250px;
			max-width: 500px;
			gap: var(--size-4);
			align-content: start;
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
