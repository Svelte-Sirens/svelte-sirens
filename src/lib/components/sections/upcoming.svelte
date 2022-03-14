<script>
	export let upcoming;
	let streams = upcoming.streams;
	let speakers = upcoming.speakers;
</script>

<section>
	{#each speakers as { name: speakerName, handleUrl: speakerURL, picture: speakerImage }}
		<a href={speakerURL} class="glass">
			<article class="grid">
				<h3>{speakerName}</h3>
				<img src={speakerImage.small} alt={speakerName} />
			</article>
		</a>
	{/each}
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
</section>

<style lang="scss">
	section {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-8);
	}
	.glass {
		width: 30ch;
		padding: var(--size-4);
		margin: var(--size-2);
		border-bottom: none;
		transition: var(--transition-colors);
		flex-shrink: 0;

		&:hover {
			border: 1px solid var(--aqua);
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

	@media (min-width: 800px) {
		section {
			flex-wrap: nowrap;
			padding: var(--size-8) var(--size-8) var(--size-4) var(--size-4);
			justify-content: start;
			width: 100vw;
		}

		.glass {
			margin: 0;
			width: 30ch;
		}
	}
</style>
