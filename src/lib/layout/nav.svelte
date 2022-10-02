<script>
	import { page } from '$app/stores';
	import AnimationToggle from './animationToggle.svelte';

	let bubbles = true;

	$: label = bubbles ? 'Bubbles: ON' : 'Bubbles: OFF';

	let checked = false;

	const handleKeydown = (e) => {
		if (e.key === 'Escape') checked = false;
	};

	const handleNavClose = () => (checked = false);
</script>

<svelte:window on:keydown={handleKeydown} />

<input type="checkbox" id="nav-check" bind:checked on:click={() => (checked = !checked)} />

<div class="hamburger-wrapper">
	<label for="nav-check">
		<img src="/images/hamburger.svg" alt="nav menu" class="hamburger" width="50px" height="50px" />
	</label>
</div>

<nav class:checked>
	<ul>
		<li>
			<a
				class:active={$page.url.pathname == '/'}
				data-sveltekit-prefetch
				href="/"
				on:click={handleNavClose}>Home</a
			>
		</li>
		<li>
			<a
				class:active={$page.url.pathname.startsWith('/about')}
				data-sveltekit-prefetch
				href="/about"
				on:click={handleNavClose}>About</a
			>
		</li>
		<li>
			<a
				class:active={$page.url.pathname.startsWith('/upcoming')}
				data-sveltekit-prefetch
				href="/upcoming"
				on:click={handleNavClose}>Upcoming</a
			>
		</li>
		<li>
			<a
				class:active={$page.url.pathname.startsWith('/latest')}
				data-sveltekit-prefetch
				href="/latest"
				on:click={handleNavClose}
			>
				Latest
			</a>
		</li>
		<li>
			<a
				class:active={$page.url.pathname.startsWith('/speakers')}
				data-sveltekit-prefetch
				href="/speakers"
				on:click={handleNavClose}
			>
				Speakers
			</a>
		</li>
		<li>
			<a
				class:active={$page.url.pathname.startsWith('/streams')}
				data-sveltekit-prefetch
				href="/streams"
				on:click={handleNavClose}>Streams</a
			>
		</li>
	</ul>
</nav>
<AnimationToggle {label} on:check={() => (bubbles = !bubbles)} />

<style lang="scss">
	input[type='checkbox'] {
		display: none;
	}
	.hamburger-wrapper {
		position: absolute;
		z-index: 100;
		right: 1rem;
		top: 1.5rem;
	}
	nav:not(.checked) {
		display: none;
	}
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
		nav {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			align-items: center;
			height: auto;
			box-shadow: none;
			background-color: transparent;
		}
		ul {
			display: flex;
		}
		.hamburger-wrapper {
			display: none;
		}
	}
</style>
