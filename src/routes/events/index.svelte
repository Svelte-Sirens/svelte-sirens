<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/events.json');
		const data = await res.json();
		return {
			props: {
				events: data.events
			}
		};
	}
</script>

<script>
	export let events;
</script>

<section class="title">
	<h1>Events</h1>

	<p>
		All <a href="/talks">talks</a> will be available to watch later.
	</p>
</section>
<ul>
	{#each events as { title, slug, date, time, img, twitter, speaker }}
		<a href="/events/{slug}" class="glass">
			<article>
				<img src={img} alt={speaker} />
				<section class="event">
					<h2>
						{title}
					</h2>
					<h3>
						<time datetime={time}>{date}</time>
						<span>6pm-7pm GMT</span>
						<!-- <span>{`${time.getHours() - 7}:00`}pm GMT</span> -->
					</h3>
					<small>Svelte Sirens Voice Chat - Svelte Discord</small>
					<h4>Twitter: <span>{twitter}</span></h4>
				</section>
			</article>
		</a>
	{/each}
</ul>

<style lang="scss">
	.title {
		text-align: center;
		margin: 0 auto var(--gap-8);

		& h1 {
			animation: var(--fade-in);
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--gap-6);
	}

	.glass {
		border-bottom: none;
		padding: var(--gap-4);
		max-width: 300px;

		&:hover {
			transform: scale(1.05);
		}
	}

	article {
		max-width: 500px;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		justify-items: center;
		gap: var(--gap-2);
		text-align: center;
		transition: var(--transition-transform);

		img {
			border-radius: 100%;
			width: 200px;
			height: 200px;
			border: var(--gap-1) solid var(--blue);
		}

		h2 {
			font-family: var(--font-body);
			font-size: var(--text-xl);
			text-shadow: 0 1px 1px var(--navy);
		}

		h3 {
			font-family: var(--font-body);
			font-size: var(--text-base);
			text-shadow: 0 1px 1px var(--navy);
		}

		h4 {
			font-family: var(--font-body);
			font-size: var(--text-base);
			text-shadow: 0 1px 1px var(--navy);
			& > span {
				font-family: var(--font-body);
			}
		}

		.event {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			gap: var(--gap-2);
		}
	}

	@media (min-width: 1024px) {
		article {
			display: flex;
		}

		.glass {
			max-width: 100%;
		}
	}
</style>
