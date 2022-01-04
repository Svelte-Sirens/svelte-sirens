<script>
	import '@styles/styles.scss';

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
		z-index: var(--layer-2);
		align-content: flex-start;
		text-align: center;
		max-width: var(--max-width);
		margin: 0 auto var(--size-8);
	}
</style>
