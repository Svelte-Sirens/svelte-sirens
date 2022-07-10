<script>
	import Nav from './nav.svelte';

	let scrollY;
</script>

<svelte:window bind:scrollY />

<header class:scrolled={scrollY > 0}>
	<section>
		<a href="/">
			<img src="/images/favicon.png" alt="logo" class="logo" />
			<span>Svelte Sirens</span>
		</a>
		<a href="https://crisisrelief.un.org/ukraine-crisis">
			<img class="flag" src="/images/stopwar.png" alt="stop war - Ukranian flag" />
		</a>
	</section>
	<Nav />
</header>

<style lang="scss">
	a {
		display: flex;
		border-bottom: none;
		align-items: center;
		color: var(--white);
		&:hover {
			border-bottom: none;
		}
	}

	section {
		display: flex;
		align-items: center;
	}

	header {
		position: sticky;
		top: 0;
		/* Just above bubbles */
		z-index: 100;
		margin-bottom: var(--size-8);
		display: flex;
		gap: var(--size-2);
		align-items: center;
		justify-content: space-between;
		height: var(--header-height);
		width: 100%;
		padding: 0 var(--size-4);

		transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

		border-radius: 0 0 var(--size-4) var(--size-4);

		border: 2px solid rgba(0, 0, 0, 0);
		border-top: none;

		&.scrolled {
			background-color: var(--teal);
			border-color: var(--white);
		}
	}

	@media (max-width: 2000px) {
		header {
			border-left: none;
			border-right: none;
			border-radius: 0;
		}
	}

	.logo {
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}

	.flag {
		position: relative;
		z-index: -1;
		top: -3px;
		left: -60%;
		width: 80px;
	}

	span {
		display: none;
	}

	@media (min-width: 600px) {
		span {
			display: inline-block;
			font-family: var(--font-heading);
			font-weight: 700;
			font-size: var(--font-size-2);
		}
	}
</style>
