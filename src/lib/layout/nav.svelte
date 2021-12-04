<script>
	import AnimationToggle from './animationToggle.svelte';
	import { page } from '$app/stores';
	let clicked = false;
	let mobile = false;
	let bubbles = true;
	$: label = bubbles ? 'Bubbles: ON' : 'Bubbles: OFF';

	function openNav() {
		mobile = true;
		clicked = !clicked;
	}
</script>

<nav>
	<AnimationToggle {label} on:check={() => (bubbles = !bubbles)} />
	<ul>
		<li><a class:active={$page.path == '/'} sveltekit:prefetch href="/">Home</a></li>
		<li />
		<li>
			<a class:active={$page.path == '/about'} sveltekit:prefetch href="/about">About</a>
		</li>
		<li>
			<a class:active={$page.path == '/talks'} sveltekit:prefetch href="/talks">Talks</a>
		</li>
		<li>
			<a class:active={$page.path == '/events'} sveltekit:prefetch href="/events"> Events </a>
		</li>
		<li>
			<a class:active={$page.path == '/speakers'} sveltekit:prefetch href="/speakers"> Speakers </a>
		</li>
	</ul>
</nav>

<style lang="scss">
	/* backdrop-filter: blur(40px); */
	nav {
		height: 100%;
		display: flex;
		align-items: center;
	}
	ul {
		display: flex;
		justify-content: center;
		gap: var(--gap-4);
		font-size: var(--text-lg);
		font-family: var(--font-heading);
		font-weight: 700;
	}

	a {
		color: var(--white);
		border-bottom: none;

		&.active {
			color: var(--blue);
			background-image: url('/images/underline.svg');
		}
	}

	a:hover:not(.active) {
		color: var(--blue);
		border-bottom: 1px solid var(--blue);
	}
</style>
