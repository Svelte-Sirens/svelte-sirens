<script>
	import '@styles/global.scss';

	import Head from '@layout/head.svelte';
	import Bubbles from '@components/bubbles.svelte';
	import Header from '@layout/header.svelte';
</script>

<Head />

<Header />
<main>
	<slot />
</main>
<Bubbles />

<style lang="scss">
	main {
		width: 100%;
		height: calc(100vh - 100px);
		color: white;
		position: relative;
		z-index: 2;
		display: grid;
		height: 100%;
		align-content: flex-start;
		text-align: center;
		max-width: 1200px;
		margin: 0 auto;
	}
</style>
