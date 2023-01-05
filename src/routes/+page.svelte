<script lang="ts">
	import Events from '$components/Events.svelte';
	import { GradientHeading } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="grid gap-4 lg:gap-16 lg:flex lg:my-36 place-items-center text-center lg:text-left">
	<img src="images/favicon.png" alt="logo" class="max-w-[400px] w-full" />
	<div class="max-w-xl grid gap-6 place-items-center lg:place-items-start">
		<GradientHeading
			tag="h1"
			from="from-primary-500 dark:from-primary-200"
			to="to-secondary-700 dark:to-secondary-500"
			class="lg:text-left">Svelte Sirens</GradientHeading
		>
		<h2 class="text-lg">A Svelte Society for women, non-binary people, & allies</h2>

		<div class="grid lg:flex w-full gap-4 justify-center lg:justify-start">
			<a
				class="btn btn-primary"
				rel="noopener noreferrer"
				target="_blank"
				href="https://discord.gg/4TVdc4RRps"
			>
				Join the community
			</a>
			<a
				data-sveltekit-preload-code
				class="btn btn-secondary"
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
			class="p-0 font-bold text-primary-600 transition-colors dark:text-primary-200 items-center whitespace-normal flex gap-2"
		>
			<img src="/images/calendar.svg" alt="" class="w-[36px]" />
			<span>Add Events to Google Calendar</span>
		</a>
	</div>
</section>

{#if data.upcomingEvents.length}
	<section class="base-grid lists">
		<h3 class="text-center">Upcoming Events</h3>

		<Events limit upcoming events={data.upcomingEvents} />
	</section>
{/if}

<section class="base-grid lists">
	<h3 class="text-center">Latest Events</h3>

	<Events limit events={data.latestEvents} />

	<a href="/events" class="text-center">View all of our past events</a>
</section>
