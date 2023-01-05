<script>
	import Nav from './Nav.svelte';
	import { AppBar } from '@skeletonlabs/skeleton';
	export let yScroll;
</script>

<div class:scrolled={yScroll > 0}>
	<AppBar background="transparent" shadow="shadow-none">
		<div slot="lead">
			<a
				href="/"
				class="flex gap-2 items-center decoration-wavy decoration-primary-400 hover:underline after:content-none"
			>
				<img src="/images/favicon.png" alt="logo" class="w-12" />
				<span class="hidden sm:block font-heading font-bold">Svelte Sirens</span>
			</a>
		</div>

		<svelte:fragment slot="trail">
			<Nav />
		</svelte:fragment>
	</AppBar>
</div>

<style>
	.scrolled {
		@apply shadow-lg;
	}
</style>
