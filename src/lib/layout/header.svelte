<script>
	import { page } from '$app/stores';
	import Nav from './nav.svelte';

	let scrollY;
</script>

<svelte:window bind:scrollY />

<header class:scrolled={scrollY > 0}>
	{#if $page.url.pathname !== '/'}
		<a href="/">
			<img src="/images/favicon.png" alt="logo" />
			<span>Svelte Sirens</span>
		</a>
	{/if}

	<Nav />
</header>

<style lang="scss">
	a {
		display: flex;
		border-bottom: none;
		align-items: center;
		color: var(--white);
		&:hover {
			border-bottom: none;
		}
	}

	header {
		position: sticky;
		top: 0;
		/* Just above bubbles */
		z-index: 100;
		margin-bottom: var(--size-8);
		display: flex;
		gap: var(--size-2);
		align-items: center;
		justify-content: space-between;
		height: 100px;
		width: 100%;
		padding: 0 var(--size-4);

		transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

		border-radius: 0 0 var(--size-4) var(--size-4);

		border: 2px solid rgba(0, 0, 0, 0);
		border-top: none;

		&.scrolled {
			background-color: var(--teal);
			border-color: var(--white);
		}
	}

	@media (max-width: 2000px) {
		header {
			border-left: none;
			border-right: none;
			border-radius: 0;
		}
	}

	img {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
	span {
		display: none;
	}

	@media (min-width: 600px) {
		span {
			display: inline-block;
			font-family: var(--font-heading);
			font-weight: 700;
			font-size: var(--font-size-2);
		}
	}
</style>
