<script>
	import { page } from '$app/stores';
	import Nav from './nav.svelte';
</script>

<header>
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
		background: var(--color-bg);
		border-bottom: 2px solid var(--blue);
		box-shadow: var(--shadow-4);
		z-index: var(--layer-5);
		margin-bottom: var(--size-8);
		display: flex;
		gap: var(--size-2);
		align-items: center;
		justify-content: space-between;
		height: 100px;
		width: 100%;
		padding: 0 var(--size-4);
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
