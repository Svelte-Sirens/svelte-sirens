<script>
	import { page } from '$app/stores';
	import BubbleToggle from './BubbleToggle.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let checked = false;
	let classes = '';

	const handleKeydown = (e) => {
		if (e.key === 'Escape') checked = false;
	};

	const handleNavClose = () => (checked = false);
</script>

<svelte:window on:keydown={handleKeydown} />

<input
	class="hidden"
	type="checkbox"
	id="nav-check"
	bind:checked
	on:click={() => (checked = !checked)}
/>

<div class="hamburger-wrapper">
	<label for="nav-check">
		<img src="/images/hamburger.svg" alt="nav menu" class="hamburger" width="50px" height="50px" />
	</label>
</div>

<nav class:checked class={classes}>
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
	<LightSwitch />
	<BubbleToggle />
</nav>

<style lang="postcss">
	.hamburger-wrapper {
		@apply absolute z-50 right-4 top-6 lg:hidden;
	}
	nav:not(.checked) {
		display: none;
	}
	/* 

	.checked {
		z-index: 99;
		position: fixed;
		top: 0;
		right: 0;
		box-shadow: var(--shadow-3);
		padding: 2rem 4rem 2rem 2rem;
		background-color: var(--teal);
		border-radius: 0 0 0 1rem;
	}
	#nav-check:checked ~ nav {
		animation: slide 0.3s linear;
	}
	@keyframes slide {
		from {
			opacity: 0;
			right: -200px;
		}
		to {
			opacity: 1;
			right: 0;
		}
	}
	ul {
		display: grid;
		justify-content: center;
		gap: var(--size-4);
		font-size: var(--font-size-2);
		font-family: var(--font-heading);
		font-weight: 700;
	}

	a {
		text-decoration: none;
		color: var(--white);
		border-bottom: none;

		&.active {
			color: var(--blue);
			background: repeat url('/images/underline.svg') center;
		}
	}

	a:hover:not(.active) {
		color: var(--blue);
		border-bottom: 1px solid var(--blue);
	}

	@media (min-width: 1024px) {
		nav:not(.checked) {
			display: flex;
		}
		// nav {
		// 	position: absolute;
		// 	left: 50%;
		// 	transform: translate(-50%, 0);
		// 	align-items: center;
		// 	height: auto;
		// 	box-shadow: none;
		// 	background-color: transparent;
		// }
		ul {
			display: flex;
		}
		.hamburger-wrapper {
			display: none;
		}
	} */
</style>
