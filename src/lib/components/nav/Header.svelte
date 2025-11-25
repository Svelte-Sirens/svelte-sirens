<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import Nav from './Nav.svelte';
</script>

<div class={{ 'shadow-lg transition-shadow': scrollY.current ? scrollY.current > 0 : false }}>
	<AppBar class="bg-transparent">
		<AppBar.Lead>
			<a
				href="/"
				class="decoration-primary-400 flex items-center gap-2 decoration-wavy after:content-none hover:underline"
			>
				<img src="/images/favicon.png" alt="logo" class="w-12" />
				<span class="font-heading hidden font-bold sm:block">Svelte Sirens</span>
			</a>
		</AppBar.Lead>

		<AppBar.Trail>
			<Nav />
		</AppBar.Trail>
	</AppBar>
</div>
