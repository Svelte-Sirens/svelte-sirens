<script>
	import '@styles/styles.css';

	import Head from '@layout/head.svelte';
	import Header from '@layout/header.svelte';
	import Bubbles from '@components/bubbles/Bubbles.svelte';
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
		margin: 0 auto var(--gap-4);
	}
</style>
