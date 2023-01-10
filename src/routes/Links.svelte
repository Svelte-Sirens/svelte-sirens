<script>
	import { page } from '$app/stores';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	export let toggleNav;
	let links = [
		{ href: `/`, name: `Home` },
		{ href: `/about`, name: `About` },
		{ href: `/events`, name: `Events` },
		{ href: `/speakers`, name: `Speakers` },
		{ href: `/contact`, name: `Contact` },
		{ href: `/bubble-pop`, name: `Game` }
	];
</script>

{#each links as { href, name }}
	<a
		class:dark={$storeLightSwitch}
		class:active={$page.url.pathname === href}
		data-sveltekit-preload-code
		{href}
		on:click={toggleNav}
	>
		{name}
	</a>
{/each}

<style lang="postcss">
	a {
		@apply font-heading font-bold hover:underline decoration-wavy decoration-primary-700 after:content-none;
		text-underline-offset: 0.25rem;
	}

	.active {
		@apply underline after:w-full after:bg-primary-400;
	}

	.dark {
		@apply text-primary-100 decoration-primary-400 after:w-full after:bg-primary-400;
	}
</style>
