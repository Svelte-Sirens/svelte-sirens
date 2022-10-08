<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const dateFormat: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const timeFormat: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'UTC'
	};
</script>

<h1>Latest Events</h1>

<section class="grid">
	<ul>
		{#each data.latestEvents as { speakers, guests, title, date, eventUrl, slug }}
			<article class="glass">
				{#if guests}
					{#each guests as { picture, name, handle, handleUrl, slug }}
						<li class="event">
							<img src={picture} alt={name} class="speaker" />
							<p class="speaker-name">
								<a href="/speakers/{slug}">{name}</a>
							</p>
							<div class="lg">
								<a href={handleUrl} rel="noopener norefferer" target="_blank">
									<span>{handle}</span>
								</a>
							</div>
						</li>
					{/each}
				{:else}
					{#each speakers as { picture, name, handleUrl, handle, slug }}
						<li class="event">
							<img src={picture} alt={name} class="speaker" />
							<p class="speaker-name">
								<a href="/speakers/{slug}">{name}</a>
							</p>
							<div class="lg">
								<a href={handleUrl} rel="noopener norefferer" target="_blank">
									<span>{handle}</span>
								</a>
							</div>
						</li>
					{/each}
				{/if}
				<section class="event event-details">
					<h2>
						<a data-sveltekit-prefetch href={`/latest/${slug}`}>
							{title}
						</a>
					</h2>
					<div class="base">
						<time datetime={new Date(date).toISOString()}>
							<span>{new Date(date).toLocaleDateString('en-US', dateFormat)}</span>

							<span>{new Date(date).toLocaleTimeString('en-GB', timeFormat)} GMT </span>
						</time>
					</div>

					{#if eventUrl}
						<em class="lg"><a href={eventUrl}>YouTube Replay</a></em>
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
			</article>
		{/each}
	</ul>
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
