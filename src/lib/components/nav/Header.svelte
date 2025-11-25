<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import Nav from './Nav.svelte';
</script>

<div class={{ 'shadow-lg transition-shadow': scrollY.current > 0 }}>
	<AppBar class="bg-transparent">
		<AppBar.Lead>
			<a
				href="/"
				class="flex gap-2 items-center decoration-wavy decoration-primary-400 hover:underline after:content-none"
			>
				<img src="/images/favicon.png" alt="logo" class="w-12" />
				<span class="hidden sm:block font-heading font-bold">Svelte Sirens</span>
			</a>
		</AppBar.Lead>

		<AppBar.Trail>
			<Nav />
		</AppBar.Trail>
	</AppBar>
</div>
