<script>
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';
	import '$styles/styles.scss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Head from '$components/Head.svelte';
	import Header from './Header.svelte';
	import Bubbles from '$components/bubbles/Bubbles.svelte';
</script>

<Head />
<AppShell>
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<!-- <svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Skeleton</strong>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<LightSwitch />
	</svelte:fragment> -->
	<!-- <Header /> -->
	<slot />
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
