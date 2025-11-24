<script lang="ts">
	import { clickOutside } from '$lib/utils/clickOutside';
	import BubbleToggle from './BubbleToggle.svelte';
	import LightSwitch from './LightSwitch.svelte';
	import { fly } from 'svelte/transition';
	import Links from './Links.svelte';

	$: checked = false;

	let innerWidth: number;

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') checked = !checked;
	}

	function toggleNav() {
		checked = !checked;
	}
</script>

<svelte:window on:keydown={handleKeydown} bind:innerWidth />

<!-- Checkbox for mobile nav -->
<input class="hidden" type="checkbox" id="nav-check" bind:checked on:click={toggleNav} />

<div class="absolute z-50 right-4 top-6 lg:hidden">
	<label for="nav-check">
		<img src="/images/hamburger.svg" alt="nav menu" class="hamburger" width="50px" height="50px" />
	</label>
</div>
<!-- End checkbox -->
<!-- Mobile Nav -->
{#if innerWidth < 1024}
	{#if checked}
		<nav
			use:clickOutside
			on:outclick={toggleNav}
			transition:fly={{ y: '-500', duration: 500 }}
			class="grid gap-2 bg-secondary-300 dark:bg-primary-900 fixed overflow-y-auto min-h-[368px] right-0 top-0 rounded-bl-xl p-8 pr-16 transform transition-transform ease-out z-40"
		>
			<div class="grid gap-2">
				<Links {toggleNav} />
			</div>
			<div class="toggle">
				<BubbleToggle />
			</div>
			<div class="toggle">
				<LightSwitch />
			</div>
		</nav>
	{/if}
	<!-- Large window Nav -->
{:else if innerWidth >= 1024}
	<nav class="flex gap-4 bg-transparent dark:bg-transparent">
		<div class="absolute flex items-center gap-8 left-1/2 -translate-x-1/2">
			<Links {toggleNav} />
		</div>
		<LightSwitch />
		<BubbleToggle />
	</nav>
{/if}

<style lang="postcss">
	/*.checked {
		@apply translate-y-[500px];
	}*/

	.toggle {
		@apply grid gap-1 grid-rows-2 relative top-3 left-3  lg:place-items-center;
	}
</style>
