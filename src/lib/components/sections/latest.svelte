<script>
	export let streams;
	export let events;

	// only 4 events
</script>

<section>
	{#each streams as { streamUrl, title: streamTitle, guests }}
		{#each guests as { name: guestName, handleUrl: guestURL, picture: guestImage }}
			<a href={streamUrl} class="glass">
				<article class="grid">
					<h3>{streamTitle}</h3>
					<img src={guestImage.small} alt={streamTitle} />
				</article>
			</a>
		{/each}
	{/each}
	{#each events as { slug: eventSlug, title: eventTitle, speakers }}
		{#each speakers as { name: speakerName, handleUrl: speakerURL, picture: speakerImage }}
			<a href={`/events/${eventSlug}`} class="glass">
				<article class="grid">
					<h3>{eventTitle}</h3>
					<img src={speakerImage.small} alt={eventTitle} />
				</article>
			</a>
		{/each}
	{/each}
</section>

<style lang="scss">
	section {
		display: flex;
		overflow-x: auto;
		padding: var(--size-8) 0 0;
		width: 100vw;
	}

	.glass {
		width: 30ch;
		padding: var(--size-4);
		border-bottom: none;
		transition: var(--transition-transform);

		&:hover {
			transform: scale(1.1);
		}
	}

	article {
		justify-items: center;
		align-items: space-between;
		gap: var(--size-4);
		align-content: start;
	}

	img {
		border-radius: 100%;
	}
</style>
