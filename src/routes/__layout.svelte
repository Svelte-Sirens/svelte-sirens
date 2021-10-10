<script>
	import '@styles/reset.css';
	import '@styles/root.css';
	import { page } from '$app/stores';

	import Bubbles from '@components/bubbles.svelte';
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

<main>
	<slot />
</main>
<Bubbles />

<style>
	:global(body) {
		background: var(--color-bg);
	}
	main {
		width: 100%;
		height: 100%;
		max-height: 100vh;
		color: white;
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-rows: 100px 1fr;
	}
</style>
