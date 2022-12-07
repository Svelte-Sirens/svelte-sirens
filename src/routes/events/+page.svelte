<script lang="ts">
	import Latest from '$components/sections/Latest.svelte';
	import Upcoming from '$components/sections/Upcoming.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="title">
	<h1>Events</h1>
	<p>This is the list of all our upcoming and past talks, streams, and events!</p>
</section>

<section>
	<h2>Upcoming Events</h2>
	<Upcoming events={data.upcomingEvents} />
</section>

<section>
	<h2>Latest Events</h2>
	<Latest events={data.latestEvents} />
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .title {
        margin-bottom: 12px;
    }
</style>