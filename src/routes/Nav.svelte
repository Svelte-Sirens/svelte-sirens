<script>
	import BubbleToggle from './BubbleToggle.svelte';
	import Links from './Links.svelte';
	import LightSwitch from '$components/LightSwitch.svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	let checked = false;
	let innerWidth;

	const handleKeydown = (e) => {
		if (e.key === 'Escape') checked = !checked;
	};

	const toggleNav = () => (checked = !checked);
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
	<nav
		use:clickOutside
		on:outclick={toggleNav}
		class="grid gap-2 bg-secondary-100 dark:bg-primary-900 absolute right-0 -top-[500px] rounded-bl-xl p-8 pr-16 transform transition-transform ease-out"
		class:checked
	>
		<div class="grid gap-2">
			<Links {toggleNav} />
		</div>
		<BubbleToggle />
		<div class="grid gap-1 grid-rows-2 place-items-start">
			<LightSwitch />
		</div>
	</nav>
	<!-- Large window Nav -->
{:else if innerWidth >= 1024}
	<nav class="flex gap-4 bg-transparent dark:bg-transparent">
		<div class="grid gap-1 grid-rows-2 place-items-center">
			<LightSwitch />
		</div>
		<div class="absolute h-12 flex items-center gap-8 left-1/2 -translate-x-1/2">
			<Links {toggleNav} />
		</div>
		<BubbleToggle />
	</nav>
{/if}

<style lang="postcss">
	.checked {
		@apply translate-y-[500px];
	}
</style>
