<script>
	import Nav from './Nav.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	let scrollY;
</script>

<svelte:window bind:scrollY />

<AppBar background="transparent">
	<div class:scrolled={scrollY > 0} slot="lead">
		<a
			href="/"
			class="flex gap-2 items-center decoration-wavy decoration-primary-400 hover:underline after:content-none"
		>
			<img src="/images/favicon.png" alt="logo" class="w-12" />
			<span class="font-heading font-bold">Svelte Sirens</span>
		</a>
	</div>

	<svelte:fragment slot="trail">
		<Nav />
	</svelte:fragment>
</AppBar>

<style lang="postcss">
	/* a {
		display: flex;
		border-bottom: none;
		align-items: center;
		color: var(--white);
		&:hover {
			color: inherit;
		}
	}

	section {
		display: flex;
		align-items: center;
	}

	header {
		position: sticky;
		top: 0;
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
	} */
</style>
