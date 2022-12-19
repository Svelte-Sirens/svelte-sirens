<script>
	import { page } from '$app/stores';
	export let handleNavClose;
</script>

<a
	class:active={$page.url.pathname == '/'}
	data-sveltekit-preload-code
	href="/"
	on:click={handleNavClose}>Home</a
>
<a
	class:active={$page.url.pathname.startsWith('/about')}
	data-sveltekit-preload-code
	href="/about"
	on:click={handleNavClose}>About</a
>
<a
	class:active={$page.url.pathname.startsWith('/events')}
	data-sveltekit-preload-code
	href="/events"
	on:click={handleNavClose}>Events</a
>
<a
	class:active={$page.url.pathname.startsWith('/speakers')}
	data-sveltekit-preload-code
	href="/speakers"
	on:click={handleNavClose}
>
	Speakers
</a>
<a
	class:active={$page.url.pathname.startsWith('/bubble')}
	data-sveltekit-reload
	href="/bubble-pop"
	on:click={handleNavClose}
>
	Game
</a>
