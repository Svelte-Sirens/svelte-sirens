<script>
	import '@styles/global.scss';
	import { page } from '$app/stores';

	import Bubbles from '@components/bubbles.svelte';
	import Header from '@layout/header.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
	<link rel="icon" type="image/png" href="/images/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Red+Hat+Text:wght@300;400;700&display=swap"
		rel="stylesheet"
	/>
	<title>{`${$page.path === '/' ? 'Svelte Sirens' : `${$page.path} Svelte Sirens`} `}</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Bubbles />

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		color: white;
		position: relative;
		z-index: 2;
	}
</style>
