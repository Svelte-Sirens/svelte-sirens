<script>
	import { page } from '$app/stores';
	let clicked = false;
	let mobile = false;

	function openNav() {
		mobile = true;
		clicked = !clicked;
	}
</script>

<nav>
	<ul>
		<li><a class={$page.path === '/' ? 'active' : ''} sveltekit:prefetch href="/">Home</a></li>
		<li>
			<a class={$page.path === '/talks' ? 'active' : ''} sveltekit:prefetch href="/talks">Talks</a>
		</li>
		<li>
			<a class={$page.path === '/events' ? 'active' : ''} sveltekit:prefetch href="/events">
				Events
			</a>
		</li>
		<li>
			<a class={$page.path === '/speakers' ? 'active' : ''} sveltekit:prefetch href="/speakers">
				Speakers
			</a>
		</li>
	</ul>
</nav>

<style lang="scss">
	/* backdrop-filter: blur(40px); */
	nav {
		height: 100%;
		display: flex;
		align-items: center;
		margin-left: auto;
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
