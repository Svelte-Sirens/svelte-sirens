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
