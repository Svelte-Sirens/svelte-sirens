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

<h1>Events</h1>

<section class="grid">
	<p>
		All <a href="/talks">talks</a> will be available to watch later.
	</p>
	<ul>
		{#each events as { slug: eventSlug, speakers, title, datetime_event, eventUrl }, index}
			<article class="glass">
				{#each speakers as { picture, name, handle, handleUrl, slug }}
					<section class="event">
						<img src={picture.small} alt={name} class="speaker" />
						<p>
							With <a href={`/speakers/${slug}`}>{name}</a>
						</p>
						<div class="lg">
							<a href={handleUrl} rel="noopener norefferer" target="_blank">
								<span>{handle}</span>
							</a>
						</div>
					</section>
					<section class="event">
						<h2>
							{title}
						</h2>
						<div class="base">
							<time datetime={datetime_event}>
								<span>{new Date(datetime_event).toLocaleDateString('en-US', date)}</span>
								<span>{new Date(datetime_event).toLocaleTimeString('en-GB', time)} GMT </span>
							</time>
						</div>

						{#if eventUrl}
							<em class="lg"><a href={eventUrl}>YouTube Live Event</a></em>
						{/if}

						<div class="base">
							Hosted on
							<a
								href="https://www.youtube.com/SvelteSociety"
								target="_blank"
								rel="noopener noreferrer"
							>
								Svelte Society YouTube
							</a>
							and
							<a rel="noopener noreffer" target="_blank" href="https://discord.gg/4TVdc4RRps">
								Svelte Discord
							</a>
						</div>

						<a href="/events/{eventSlug}" class="btn-primary"> More Info </a>
					</section>
				{/each}
			</article>
		{/each}
	</ul>
</section>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--gap-6);
	}

	.glass {
		border-bottom: none;
		padding: var(--gap-6) var(--gap-4);
		max-width: 550px;
		transition: var(--transition-transform);
		text-shadow: var(--shadow-text);
		font-family: var(--font-body);
		gap: var(--gap-2) var(--gap-6);
	}

	h2 {
		font-family: var(--font-body);
		font-size: var(--text-xl);
	}

	time {
		display: flex;
		gap: var(--gap-2);
	}

	.lg {
		font-size: var(--text-lg);
	}

	.base {
		font-size: var(--text-base);
	}

	.event {
		display: grid;
		grid-template-columns: minmax(200px, 1fr);
		gap: var(--gap-2);
		justify-content: center;
		justify-items: center;
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
		.glass {
			display: flex;
			align-items: flex-start;
		}
	}
</style>
