<script>
	import { page } from '$app/stores';
	import { storeLightSwitch } from '@skeletonlabs/skeleton';
	import Waves from './Waves.svelte';
	export let handleNavClose;
	console.log($storeLightSwitch && $page.url.pathname === '/');
</script>

<a
	class:dark={$storeLightSwitch ? $page.url.pathname == '/' : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname == '/'}
	data-sveltekit-preload-code
	href="/"
	on:click={handleNavClose}>Home</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/about') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/about')}
	data-sveltekit-preload-code
	href="/about"
	on:click={handleNavClose}>About</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/events') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/events')}
	data-sveltekit-preload-code
	href="/events"
	on:click={handleNavClose}>Events</a
>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/speakers') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/speakers')}
	data-sveltekit-preload-code
	href="/speakers"
	on:click={handleNavClose}
>
	Speakers
</a>
<a
	class:dark={$storeLightSwitch ? $page.url.pathname.startsWith('/bubble') : ''}
	class:active={$storeLightSwitch ? '' : $page.url.pathname.startsWith('/bubble')}
	data-sveltekit-reload
	href="/bubble-pop"
	on:click={handleNavClose}
>
	Game
</a>

<style lang="postcss">
	a.active {
		@apply text-primary-900;
	}

	.dark {
		@apply text-primary-100;
	}
</style>
