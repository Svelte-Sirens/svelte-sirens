<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/events.json');
		const events = await res.json();
		return {
			props: {
				events
			}
		};
	}
</script>

<script>
	export let events;
</script>

<!-- 
<pre>{JSON.stringify(events, null, 2)}</pre> -->

<section class="title">
	<h1>Events</h1>

	<p>
		All <a href="/talks">talks</a> will be available to watch later.
	</p>
</section>
<ul>
	{#each events as { slug, speakers, title, datetime_event }}
		<a href="/events/{slug}" class="glass">
			<article>
				{#each speakers as speaker}
					<img src={speaker.picture.url} alt={speaker.name} />
					<section class="event">
						<h2>
							{title}
						</h2>
						<h3>
							<time datetime={new Date(datetime_event).toString()}>
								{new Date(datetime_event)}
							</time>
						</h3>
						<small>Svelte Sirens Voice Chat - Svelte Discord</small>
						<h4>Twitter: <span>{speaker.handle}</span></h4>
					</section>
				{/each}
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
