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
		display: flex;
		gap: var(--gap-2);
		align-items: center;
		justify-content: space-between;
		height: 100px;
		width: 100%;
		padding: 0 var(--gap-4);
	}

	img {
		width: 50px;
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
			font-size: var(--text-lg);
		}
	}
</style>
