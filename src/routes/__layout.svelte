<script>
	import '@styles/styles.css';

	import Head from '@layout/head.svelte';
	import Header from '@layout/header.svelte';
	import Bubbles from '@components/bubbles/Bubbles.svelte';
</script>

<Head />

<Header />
<main class="grid">
	<slot />
</main>
<Bubbles />

<style lang="scss">
	main {
		height: 100%;
		width: 100%;
		color: var(--white);
		position: relative;
		z-index: 2;
		align-content: flex-start;
		text-align: center;
		max-width: 1200px;
		margin: 0 auto var(--gap-4);
	}
</style>
