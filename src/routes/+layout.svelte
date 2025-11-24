<script lang="ts">
	import '$lib/app.css';
	import Bubbles from '$components/bubbles/Bubbles.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Head from '$components/Head.svelte';
	import { theme } from '$lib/theme.svelte';

	theme.watch();
</script>

<Head />
<Bubbles />

<main class="w-full pb-48">
	<Nav />
	<div class="grid gap-10 lg:gap-20 p-4 xl:p-0 mb-6 max-w-7xl mx-auto">
		<slot />
	</div>
</main>
