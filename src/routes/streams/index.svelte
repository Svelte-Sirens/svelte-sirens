<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/streams.json');
		const streams = await res.json();
		return {
			props: {
				streams
			}
		};
	}
</script>

<script>
	export let streams;

	const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

	const time = { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
</script>

<article class="grid">
	<h1>Sirens Streams</h1>

	<h2>
		Sirens Streams are a bi-monthly livestream featuring a technology that we integrate with
		SvelteKit.
	</h2>
	<section class="grid">
		<section class="calendar">
			<p>Never miss an event,</p>
			<a rel="external" href="/calendar" class="calendar-link">
				<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
			</a>
		</section>
		<ul>
			{#each streams as { slug: streamSlug, title, speakers, guests, datetime_stream, streamUrl }}
				<article class="glass">
					{#each speakers as { picture: speakerImg, name: speakerName, handle: speakerHandle, handleUrl: speakerUrl }}
						<section class="event">
							{#each guests as { picture: guestImg, name: guestName, handleUrl: guestHandleUrl, slug }}
								<section class="hosts grid">
									<img src={guestImg.small} alt={guestName} class="guest speaker" />

									<img src={speakerImg.small} alt={speakerName} class="speaker small" />
									<p class="speaker-name">
										<span>With <a href={guestHandleUrl}>{guestName}</a> </span>
										<span>
											and
											<a href={speakerUrl}>{speakerName}</a>
										</span>
									</p>
								</section>
							{/each}
						</section>

						<section class="event event-details">
							<h2>
								{title}
							</h2>
							<div class="base">
								<time datetime={datetime_stream}>
									<span>{new Date(datetime_stream).toLocaleDateString('en-US', date)}</span>

									<span>{new Date(datetime_stream).toLocaleTimeString('en-GB', time)} GMT </span>
								</time>
							</div>

							{#if streamUrl}
								<em class="lg"><a href={streamUrl}>YouTube Live Event</a></em>
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
						</section>
					{/each}
				</article>
			{/each}
		</ul>
	</section>
</article>

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
		max-width: 40ch;
		margin: var(--size-4) auto 0;
		font-family: var(--font-body);
		font-size: var(--font-size-fluid-1);
	}

	time {
		display: grid;
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

	.speaker-name {
		display: grid;

		& span {
			text-align: center;
		}
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
		gap: var(--size-2);
		& a {
			text-shadow: var(--shadow-text);
		}
	}

	.event {
		& .hosts {
			gap: var(--size-6);
			justify-items: center;
			position: relative;
			align-content: space-between;

			& .small {
				width: 75px;
				height: 75px;
				position: absolute;
				top: 125px;
				right: -1rem;
			}
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

		.event {
			height: 100%;
			& .hosts {
				& .small {
					top: 150px;
					right: 0;
				}
			}
		}
	}
</style>
