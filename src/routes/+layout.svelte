<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Head from '$components/Head.svelte';
	import Header from './Header.svelte';
	import Bubbles from '$components/bubbles/Bubbles.svelte';
	let main: HTMLElement | null;
	let yScroll;

	function scrollHandler(e: any): void {
		yScroll = e.target.scrollTop;
	}

	onMount(() => {
		main = document.getElementById('page');
		main?.addEventListener('scroll', scrollHandler);
	});

	onDestroy(() => {
		main?.removeEventListener('scroll', scrollHandler);
	});
</script>

<Head />
<!-- <AppShell>
	<svelte:fragment slot="header"> -->
<Header {yScroll} />
<!-- </svelte:fragment> -->
<main id="page" class="h-full overflow-y-auto w-full pb-48">
	<div class="grid gap-10 lg:gap-20 p-4 xl:p-0 mb-6 max-w-7xl mx-auto">
		<slot />
	</div>
</main>
<Bubbles />
<!-- </AppShell> -->
