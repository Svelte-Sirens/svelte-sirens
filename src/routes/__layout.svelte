<script>
	import '@styles/global.scss';
	import { page } from '$app/stores';

	import Bubbles from '@components/bubbles.svelte';
	import Header from '@layout/header.svelte';

	const capitalize = (str, lower = false) =>
		(lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
			match.toUpperCase()
		);
	let title =
		$page.path === '/'
			? 'Svelte Sirens'
			: `${$page.path.substring(1).replace('s/', ' | ').replace(/-/g, ' ')} | Svelte Sirens`;
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
	<title>{capitalize(title)}</title>
</svelte:head>

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
		max-width: 45ch;
		margin: 0 auto;
	}
</style>
