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
		console.log(yScroll);
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
<AppShell>
	<svelte:fragment slot="header">
		<Header {yScroll} />
	</svelte:fragment>
	<slot />
	<Bubbles />
</AppShell>
