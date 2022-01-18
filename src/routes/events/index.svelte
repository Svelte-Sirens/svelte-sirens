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
	<section class="calendar">
		<p>Never miss an event,</p>
		<a rel="external" href="/calendar" class="calendar-link">
			<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
		</a>
	</section>

	<ul>
		{#each events as { slug: eventSlug, speakers, title, datetime_event, eventUrl }, index}
			<article class="glass">
				{#each speakers as { picture, name, handle, handleUrl, slug }}
					<section class="event">
						<img src={picture.small} alt={name} class="speaker" />
						<p class="speaker-name">
							With <a href={`/speakers/${slug}`}>{name}</a>
						</p>
						<div class="lg">
							<a href={handleUrl} rel="noopener norefferer" target="_blank">
								<span>{handle}</span>
							</a>
						</div>
					</section>
					<section class="event event-details">
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
							</a> to chat with the community.
						</div>

						<a href="/events/{eventSlug}" class="btn-primary"> More Info </a>
					</section>
				{/each}
			</article>
		{/each}
	</ul>

	<section>
		<h3>Upcoming Speakers</h3>
		<p><a href="https://twitter.com/stolinski">Scott Tolinski</a> - March</p>
		<p><a href="https://twitter.com/selfteachme">Amy Dutton</a> - April</p>
		<p><a href="https://twitter.com/wattenberger">Amelia Wattenberger</a> - June</p>
	</section>
	<p>
		All <a href="/talks">talks</a> will be available to watch later.<br />Join our other speakers,
		by submitting your own <a href="https://sessionize.com/sveltesirens/"> talk </a>.
	</p>
</section>

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-6);
	}

	.glass {
		border-bottom: none;
		padding: var(--size-6) var(--size-4);
		max-width: 48ch;
		transition: var(--transition-transform);
		font-family: var(--font-body);
		gap: var(--size-2) var(--size-6);
		text-shadow: none;
	}

	h2 {
		margin-top: var(--size-4);
		font-family: var(--font-body);
		font-size: var(--font-size-fluid-1);
	}

	time {
		display: grid;
		gap: var(--size-2);
	}

	.speaker-name {
		display: flex;
		gap: var(--size-2);
	}

	.lg {
		display: flex;
		font-size: var(--font-size-2);
	}

	.base {
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-4);
	}

	.event {
		text-align: left;
		display: grid;
		grid-template-columns: minmax(200px, 1fr);
		gap: var(--size-4);
		justify-content: center;
		justify-items: center;
	}

	.event-details {
		justify-items: start;
		& a {
			text-shadow: var(--shadow-text);
		}

		& .btn-primary {
			width: 100%;
			text-align: center;
			text-shadow: none;
		}
	}

	.btn-primary {
		margin-top: var(--size-2);
		padding: 2px var(--size-2);
		justify-self: center;
		text-shadow: none;
		box-shadow: var(--shadow-4);
		transition: var(--transition-all);
		&:hover {
			box-shadow: var(--shadow-1);
		}
	}

	@media (min-width: 1024px) {
		.glass {
			display: flex;
			align-items: flex-start;
		}

		h2 {
			margin-top: 0;
		}
	}
</style>
