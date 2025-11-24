<script lang="ts">
	import Events from '$components/Events.svelte';
	import Siren from '$lib/images/Siren.svelte';

	const { data } = $props();
</script>

<section
	class="mx-auto grid gap-4 lg:gap-16 lg:flex lg:my-24 place-items-center text-center lg:text-left"
>
	<Siren class="max-w-[400px] motion-safe:animate-float" />

	<div class="max-w-xl grid gap-6 place-items-center lg:place-items-start">
		<h1 class="lg:text-left! text-gradient">Svelte Sirens</h1>

		<h2 class="text-lg">A Svelte Society for women, non-binary people, & allies</h2>

		<div class="grid lg:flex w-full gap-4 justify-center lg:justify-start">
			<a
				class="btn-lg rounded-lg preset-filled-primary-400-600"
				rel="noopener noreferrer"
				target="_blank"
				href="https://discord.gg/4TVdc4RRps"
			>
				Join the community
			</a>

			<a
				data-sveltekit-preload-code
				class="btn-lg rounded-lg preset-filled"
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
			<img src="/images/calendar.svg" alt="" class="w-9" />
			<span>Add Events to Google Calendar</span>
		</a>
	</div>
</section>

{#if data.upcomingEvents.length}
	<section class="flex flex-col gap-4 text-center items-center">
		<h3>Upcoming Events</h3>
		<Events limit upcoming events={data.upcomingEvents} />
	</section>
{/if}

<section class="flex flex-col gap-4 text-center items-center">
	<h3>Latest Events</h3>
	<Events limit events={data.latestEvents} />
	<a href="/events">View all of our past events</a>
</section>
