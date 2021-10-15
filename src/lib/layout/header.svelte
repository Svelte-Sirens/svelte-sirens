<script>
	import { page } from '$app/stores';
	import Nav from './nav.svelte';
</script>

<header>
	{#if $page.path !== '/'}
		<div>
			<img src="/images/favicon.png" alt="logo" />
			<span>Svelte Sirens</span>
		</div>
	{/if}
	<Nav />
</header>

<style>
	header {
		display: flex;
		gap: var(--gap-2);
		align-items: center;
		justify-content: space-between;
		height: 100px;
		padding-inline: var(--gap-4);
	}

	div {
		display: flex;
		align-items: center;
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
