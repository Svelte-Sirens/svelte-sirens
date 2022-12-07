<script lang="ts">
	import Upcoming from '$components/sections/Upcoming.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Upcoming Events</h1>

<section class="calendar">
	<p>Never miss an event,</p>
	<a rel="external" href="/calendar" class="calendar-link">
		<img src="/images/calendar.svg" alt="" /> Add to Google Calendar
	</a>
</section>

<Upcoming events={data.upcomingEvents} />
