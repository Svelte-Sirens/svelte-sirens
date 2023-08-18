<script lang="ts">
	import Bubbles from '$components/bubbles/Bubbles.svelte';
	import Head from '$components/Head.svelte';
	import { bubbles } from '$lib/stores';
	import Header from './Header.svelte';
	import '../app.postcss';
</script>

<Head />

<Header />

<main id="page" class="h-full overflow-y-auto w-full pb-48">
	<div class="grid gap-10 lg:gap-20 p-4 xl:p-0 mb-6 max-w-7xl mx-auto">
		<slot />
	</div>
</main>

{#if $bubbles}
	<Bubbles />
{/if}
