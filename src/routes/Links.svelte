<script>
	import { page } from '$app/stores';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	export let toggleNav;
</script>

<a
	class:dark={$storeLightSwitch ? $page.url.pathname == '/' : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname == '/'}
	data-sveltekit-preload-code
	href="/"
	on:click={toggleNav}>Home</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/about') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/about')}
	data-sveltekit-preload-code
	href="/about"
	on:click={toggleNav}>About</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/events') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/events')}
	data-sveltekit-preload-code
	href="/events"
	on:click={toggleNav}>Events</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/speakers') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/speakers')}
	data-sveltekit-preload-code
	href="/speakers"
	on:click={toggleNav}
>
	Speakers
</a>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/bubble') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/bubble')}
	data-sveltekit-reload
	href="/bubble-pop"
	on:click={toggleNav}
>
	Game
</a>

<style lang="postcss">
	a {
		@apply font-heading font-bold hover:underline decoration-wavy decoration-primary-400 after:content-none;
	}
	a.active {
		@apply text-primary-900 underline after:w-full after:bg-primary-400;
	}

	.dark {
		@apply text-primary-100 underline after:w-full after:bg-primary-400;
	}
</style>
