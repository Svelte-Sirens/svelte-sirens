<script lang="ts">
	import '$lib/app.css';
	import Bubbles from '$lib/components/bubbles/Bubbles.svelte';
	import Nav from '$lib/components/nav/Nav.svelte';
	import Head from '$lib/components/Head.svelte';
	import { theme } from '$lib/theme.svelte';

	theme.watch();
</script>

<Head />
<Bubbles />

<main class="w-full pb-48">
	<Nav />
	<div class="mx-auto mb-6 grid max-w-7xl gap-10 p-4 lg:gap-20 xl:p-0">
		<slot />
	</div>
</main>
