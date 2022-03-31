<script>
	export let upcoming;
	let events = upcoming.events;
	let streams = upcoming.streams;
</script>

{#if events}
	{#each events as { eventUrl, title, slug }}
		<section>
			<h1>{title}</h1>
			<div class="video-wrapper">
				<iframe
					src={eventUrl}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</section>
	{/each}
{:else if streams}
	{#each streams as { streamUrl, title, slug }}
		<section>
			<h1>{title}</h1>
			<div class="video-wrapper">
				<iframe
					src={streamUrl}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</section>
	{/each}
{/if}

<style lang="scss">
	section {
		display: grid;
		gap: var(--size-4);
		grid-template-columns: minmax(0, 1fr);

		h1 {
			font-size: var(--font-size-fluid-2);
			margin-bottom: var(--size-6);
		}

		.video-wrapper {
			position: relative;
			padding-bottom: 56.25%;
			height: 0;
		}

		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
