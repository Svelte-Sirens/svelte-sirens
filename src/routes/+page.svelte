<script lang="ts">
	import Events from '$components/Events.svelte';
	import { GradientHeading } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="grid gap-4 lg:gap-16 lg:flex place-items-center text-center lg:text-left">
	<img src="images/favicon.png" alt="logo" class="max-w-[400px]" />
	<section class="max-w-xl grid gap-6">
		<GradientHeading
			tag="h1"
			from="from-primary-500 dark:from-primary-200"
			to="to-secondary-700 dark:to-secondary-500"
			class="text-left">Svelte Sirens</GradientHeading
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
			class="w-max p-0 btn font-bold text-primary-600 transition-colors dark:text-primary-200 border-b-1 border-transparent hover:border-primary-400 hover:text-primary-400 hover:dark:text-primary-100"
		>
			<img src="/images/calendar.svg" alt="" class="w-[36px]" />
			<span>Add Events to Google Calendar</span>
		</a>
	</section>
</section>

{#if data.upcomingEvents.length}
	<article class="base-grid lists">
		<h3 class="text-center">Upcoming Events</h3>

		<div class="base-grid events">
			<Events events={data.upcomingEvents} />
		</div>
	</article>
{/if}

<article class="base-grid lists">
	<h3 class="text-center">Latest Events</h3>

	<div class="base-grid events">
		<Events events={data.latestEvents} />
	</div>

	<a href="/events">View all of our past events</a>
</article>
<!-- 
<style lang="scss">

	.hero {
		align-content: flex-start;
		justify-content: center;
		justify-items: center;
		text-align: center;
		margin: 0 auto var(--size-8);
		gap: var(--size-4);
	}

	.hero-text {
		padding: var(--size-4);
		position: relative;
		z-index: var(--layer-2);
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--size-4);
		max-width: 55ch;
	}

	.btns {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-4);
		& > a {
			margin: 0;
		}
	}

	h1 {
		font-size: var(--font-size-fluid-3);
		margin: 0;
	}

	h2 {
		font-size: var(--font-size-fluid-1);
	}

	h3 {
		font-size: var(--font-size-fluid-2);
	}

	.events {
		gap: var(--size-2);
		overflow-x: auto;
	}

	.siren {
		padding: var(--size-4);
		width: 100%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	.cal-img {
		width: 50px;
	}

	a {
		margin: var(--size-4) auto;
		text-shadow: none;
	}

	.lists {
		gap: var(--size-2);
		&* + * {
			margin-top: var(--size-10);
		}
	} 

	@media (min-width: 1024px) {
		.hero {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: var(--size-8);
			height: calc(80vh - var(--header-height));
			width: 100%;
		}

		.hero-text {
			justify-items: flex-start;
			text-align: left;
			align-content: center;
		}

		.btns {
			display: flex;
			align-items: flex-start;

			& > a {
				width: auto;
			}
		}
		h2 {
			max-width: 100%;
			word-break: none;
		}
	}
</style>
-->
