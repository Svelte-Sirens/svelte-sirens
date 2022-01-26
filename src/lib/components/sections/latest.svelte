<script>
	export let talks;
	export let events;
	console.log(talks, events);
</script>

<article>
	<h2>Latest Events</h2>
	{#each talks as { talkUrl, title: talkTitle, slug: talkSlug, coverImage: talkImage }}
		{#each events as { slug: eventSlug, speakers, title: eventTitle, datetime_event, eventUrl }}
			<div class="talk">
				{#if talkUrl}
					<a href={`/talks/${talkSlug}`}>
						<h3>{talkTitle}</h3>
						<img src={talkImage.url} alt="" />
					</a>
				{:else}
					<a href={`/events/${eventSlug}`}>
						<h3>{eventTitle}</h3>
					</a>
				{/if}
			</div>
		{/each}
	{/each}
</article>
