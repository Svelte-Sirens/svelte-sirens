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

	const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	const time = { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
</script>

<section class="title">
	<h1>Events</h1>

	<p>
		All <a href="/talks">talks</a> will be available to watch later.
	</p>
</section>
<ul>
	{#each events as { slug, speakers, title, datetime_event }}
		<article class="glass">
			{#each speakers as { picture, name, handle, handleUrl }}
				<div class="wrapper">
					<img src={picture.url} alt={name} class="speaker" />
					<section class="event">
						<h2>
							{title}
						</h2>
						<h3>
							With {name}
						</h3>
						<h4>
							<a href={handleUrl} rel="noopener norefferer" target="_blank">
								<span>{handle}</span>
							</a>
						</h4>
						<h4>
							<time datetime={datetime_event}>
								<span>{new Date(datetime_event).toLocaleDateString('en-US', date)}</span>
								<span>{new Date(datetime_event).toLocaleTimeString('en-GB', time)} GMT </span>
							</time>
						</h4>
						<h4>
							<a rel="noopener noreffer" target="_blank" href="https://discord.gg/4TVdc4RRps">
								Svelte Discord
							</a>
							and
							<a
								href="https://www.youtube.com/SvelteSociety"
								target="_blank"
								rel="noopener noreferrer"
							>
								YouTube
							</a>
						</h4>

						<a href="/events/{slug}" class="btn-primary"> More Info </a>
					</section>
				</div>
			{/each}
		</article>
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
	}

	.wrapper {
		max-width: 500px;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		justify-items: center;
		gap: var(--gap-4);
		text-align: center;
		transition: var(--transition-transform);
		text-shadow: var(--shadow-text);

		h2 {
			font-family: var(--font-body);
			font-size: var(--text-xl);
		}

		time {
			display: grid;
			gap: var(--gap-2);
		}

		h3 {
			font-family: var(--font-body);
			font-size: var(--text-lg);
		}

		h4 {
			font-family: var(--font-body);
			font-size: var(--text-base);
		}

		.event {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			gap: var(--gap-2);
		}
	}

	.btn-primary {
		margin-top: var(--gap-2);
		padding: 2px var(--gap-2);
		justify-self: center;
		text-shadow: none;
		box-shadow: var(--shadow-btn-sm);
		&:hover {
			box-shadow: var(--shadow-btn-hover);
		}
	}

	@media (min-width: 1024px) {
		.wrapper {
			display: flex;
		}

		.glass {
			max-width: 100%;
		}
	}
</style>
