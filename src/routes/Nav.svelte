<script>
	import { slide } from 'svelte/transition';
	import BubbleToggle from './BubbleToggle.svelte';
	import Links from './Links.svelte';
	import { LightSwitch, storeLightSwitch } from '@skeletonlabs/skeleton';
	import { clickOutside } from '$lib/utils/clickOutside';

	let checked = false;
	let innerWidth;

	const handleKeydown = (e) => {
		if (e.key === 'Escape') checked = !checked;
	};

	const toggleNav = () => (checked = !checked);

	function fadeSlide(node, options) {
		const slideTrans = slide(node, options);
		return {
			duration: options.duration,
			css: (t) => `
				${slideTrans.css(t)}
				opacity: ${t};
			`
		};
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
{#if checked && innerWidth < 1024}
	<nav
		use:clickOutside
		on:outclick={toggleNav}
		transition:fadeSlide={{ duration: 300 }}
		class:checked
		class="grid gap-2 bg-secondary-100 dark:bg-primary-900 "
	>
		<div class="grid gap-2 ">
			<Links {toggleNav} />
		</div>
		<BubbleToggle />
		<div class="grid gap-1 grid-rows-2 place-items-start">
			<span>
				{#if $storeLightSwitch}
					Dark
				{:else}
					Light
				{/if}
			</span>
			<LightSwitch />
		</div>
	</nav>
	<!-- Large window Nav -->
{:else if innerWidth >= 1024}
	<nav class="flex gap-4 bg-transparent dark:bg-transparent">
		<div class="absolute h-12 flex items-center gap-8 left-1/2 -translate-x-1/2">
			<Links {toggleNav} />
		</div>
		<BubbleToggle />
		<div class="grid gap-1 grid-rows-2 place-items-center">
			<span>
				{#if $storeLightSwitch}
					Dark
				{:else}
					Light
				{/if}
			</span>
			<LightSwitch />
		</div>
	</nav>
{/if}

<style lang="postcss">
	.checked {
		@apply grid fixed top-0 right-0 shadow-lg p-8 pr-16 rounded-bl-xl;
	}
</style>
