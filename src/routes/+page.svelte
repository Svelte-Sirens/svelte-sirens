<script lang="ts">
	import Upcoming from '$components/sections/Upcoming.svelte';
	import Latest from '$components/sections/Latest.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="grid hero">
	<img src="images/favicon.png" alt="logo" class="float-in siren" />

	<section class="grid hero-text">
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women, non-binary people, & allies</h2>

		<div class="btns">
			<a
				class="btn-primary"
				rel="noopener noreferrer"
				target="_blank"
				href="https://discord.gg/4TVdc4RRps"
			>
				Join the community
			</a>
			<a
				data-sveltekit-preload-code
				class="btn-secondary"
				rel="noopener noreferrer"
				target="_blank"
				href="/contact"
			>
				Become a Speaker
			</a>
		</div>

		<div class="calendar">
			<a rel="external" href="/calendar" class="calendar-link">
				<img src="/images/calendar.svg" alt="" class="cal-img" /> Add Events to Google Calendar
			</a>
		</div>
	</section>
</article>

<article class="grid lists">
	<h3>Upcoming Events</h3>

	<div class="grid events">
		<Upcoming events={data.upcomingEvents} />
	</div>
</article>

<article class="grid lists">
	<h3>Latest Events</h3>

	<div class="grid events">
		<Latest events={data.latestEvents} />
	</div>

	<a href="/latest">View all of our past events</a>
</article>

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
