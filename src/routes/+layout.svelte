<script>
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';
	import '$styles/styles.scss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Head from '$components/Head.svelte';
	import Header from './Header.svelte';
	import Bubbles from '$components/bubbles/Bubbles.svelte';
</script>

<Head />
<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<div class="max-w-7xl mx-auto">
		<slot />
	</div>
	<Bubbles />
</AppShell>
