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
			<a class={$page.path === '/calendar' ? 'active' : ''} sveltekit:prefetch href="/calendar">
				Calendar
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
		justify-content: center;
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
			background-image: url('/images/underline.svg');
		}
	}

	a:hover {
		color: var(--blue);
		border-bottom: 1px solid var(--blue);
	}

	@media (min-width: 1024px) {
		nav {
			justify-content: flex-start;
		}
	}
</style>
