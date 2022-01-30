<script context="module">
	export async function load({ fetch }) {
		const latestRes = await fetch('/latest.json');
		const upcomingRes = await fetch('/speakers.json');
		const latest = await latestRes.json();
		const upcoming = await upcomingRes.json();
		return {
			props: {
				latest,
				upcoming
			}
		};
	}
</script>

<script>
	import Latest from '@components/sections/latest.svelte';
	import Upcoming from '@components/sections/upcoming.svelte';
	export let latest;
	export let upcoming;
</script>

<article class="grid hero">
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" class="float-in" />
	<section class="grid hero-text">
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women, non-binary people, & allies</h2>
		<a
			class="btn-primary"
			rel="noopener noreffer"
			target="_blank"
			href="https://discord.gg/4TVdc4RRps"
		>
			Join the community
		</a>
	</section>
</article>

<section class="calendar">
	<p>
		Never miss an <a href="/events" sveltekit:prefetch>event</a>,
	</p>
	<a rel="external" href="/calendar" class="calendar-link">
		<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
	</a>
</section>

<h3>Upcoming Speakers</h3>
<p>
	Join our other amazing speakers, by submitting your own
	<a href="https://sessionize.com/sveltesirens/"> talk </a>.
</p>
<section class="grid events">
	<Upcoming speakers={upcoming} />
</section>

<h3>Latest Events</h3>

<section class="grid events">
	<Latest streams={latest.streams} events={latest.events} />
</section>

<style lang="scss">
	span {
		font-size: var(--font-size-fluid-2);
		z-index: 1;
		font-family: var(--font-heading);
		font-weight: 600;
		display: inline-block;
		position: relative;
		text-align: center;
		text-shadow: var(--shadow-text);
		margin: 0 auto;
	}

	.hero {
		align-content: flex-start;
		justify-content: center;
		justify-items: center;
		text-align: center;
		margin: 0 auto;
		gap: var(--size-2);
	}

	.hero-text {
		position: relative;
		z-index: var(--layer-2);
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--size-2);
		max-width: 55ch;
	}

	h1 {
		font-size: var(--font-size-fluid-3);
		margin-bottom: 0;
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

	img {
		width: 60%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin: var(--size-4) auto;
		text-shadow: none;
	}

	@media (min-width: 1024px) {
		h2 {
			max-width: 100%;
			word-break: none;
		}
	}
</style>
