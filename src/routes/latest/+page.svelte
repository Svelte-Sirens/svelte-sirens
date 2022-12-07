<script lang="ts">
	import Latest from '$components/sections/Latest.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Latest Events</h1>

<Latest events={data.latestEvents} />
