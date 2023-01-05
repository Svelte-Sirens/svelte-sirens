<script>
	import { onMount, onDestroy } from 'svelte';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Head from '$components/Head.svelte';
	import Header from './Header.svelte';
	import Bubbles from '$components/bubbles/Bubbles.svelte';
	let main;
	let yScroll;

	onMount(() => {
		main = document.getElementById('page');
		main.addEventListener('scroll', (e) => {
			yScroll = e.target.scrollTop;
		});
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
