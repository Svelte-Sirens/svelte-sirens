<script lang="ts">
	import Events from '$components/Events.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="mx-auto max-w-md text-center">
	<h1>Events</h1>
	<p>
		This is the list of all our upcoming and past talks, streams, and events! Events are hosted
		on the
		<a href="https://www.youtube.com/SvelteSociety" target="_blank" rel="noopener noreferrer">
			Svelte Society YouTube
		</a>
		and
		<a rel="noopener noreferrer" target="_blank" href="https://discord.gg/4TVdc4RRps">
			Svelte Discord
		</a> to chat with the community.
	</p>
</section>

{#if data.upcomingEvents.length}
	<section>
		<h2 class="text-center">Upcoming Events</h2>
		<Events upcoming events={data.upcomingEvents} />
	</section>
{/if}

<section>
	<h2 class="text-center">Latest Events</h2>
	<Events events={data.latestEvents} />
</section>

<style>
	h2 {
		margin-bottom: calc(var(--spacing) * 4);
	}
</style>
