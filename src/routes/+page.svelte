<script lang="ts">
	import Events from '$lib/components/Events.svelte';
	import Siren from '$lib/images/Siren.svelte';

	const { data } = $props();
</script>

<section
	class="mx-auto grid place-items-center gap-4 text-center lg:my-24 lg:flex lg:gap-16 lg:text-left"
>
	<Siren class="motion-safe:animate-float max-w-[400px]" />

	<div class="grid max-w-xl place-items-center gap-6 lg:place-items-start">
		<h1 class="text-gradient lg:text-left!">Svelte Sirens</h1>

		<h2 class="text-lg">A Svelte Society for women, non-binary people, & allies</h2>

		<div class="grid w-full justify-center gap-4 lg:flex lg:justify-start">
			<a
				class="btn-lg preset-filled-primary-400-600 rounded-lg"
				rel="noopener noreferrer"
				target="_blank"
				href="https://discord.gg/4TVdc4RRps"
			>
				Join the community
			</a>

			<a
				data-sveltekit-preload-code
				class="btn-lg preset-filled rounded-lg"
				rel="noopener noreferrer"
				target="_blank"
				href="/contact"
			>
				Become a Speaker
			</a>
		</div>

		<a
			rel="external"
			href="/calendar"
			class="text-primary-600 dark:text-primary-200 flex items-center gap-2 p-0 font-bold whitespace-normal transition-colors"
		>
			<img src="/images/calendar.svg" alt="" class="w-9" />
			<span>Add Events to Google Calendar</span>
		</a>
	</div>
</section>

{#if data.upcomingEvents.length}
	<section class="flex flex-col items-center gap-4 text-center">
		<h3>Upcoming Events</h3>
		<Events limit upcoming events={data.upcomingEvents} />
	</section>
{/if}

<section class="flex flex-col items-center gap-4 text-center">
	<h3>Latest Events</h3>
	<Events limit events={data.latestEvents} />
	<a href="/events">View all of our past events</a>
</section>
