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

<style lang="scss">
	main {
		overflow-x: hidden;
		height: 100%;
		width: 100%;
		color: var(--white);
		position: relative;
		z-index: var(--layer-2);
		align-content: flex-start;
		text-align: center;
		max-width: var(--max-width);
		margin: 0 auto var(--size-8);
	}
</style>
