<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { bubbles } from '$lib/stores';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	let bubblesElement;
	let toggle;

	function checkBubbles() {
		if (!get(bubbles)) {
			toggle = false;
			bubblesElement.style.display = 'none';
		} else {
			toggle = true;
			bubblesElement.style.display = 'block';
		}
	}
	onMount(() => {
		bubblesElement = document.getElementById('bubbles');
		checkBubbles();
	});

	function toggleBubbles() {
		bubbles.set(!get(bubbles));
		checkBubbles();
	}
</script>

<div class="grid gap-1 grid-rows-2 place-items-start  lg:place-items-center">
	<SlideToggle
		size="sm"
		bind:checked={toggle}
		on:click={toggleBubbles}
		class="relative top-4 right-2"
	>
		{#if $bubbles}
			<span class="absolute -top-[26px] left-1/4 transform -translate-x-1/4 text-xs min-w-[100px]">
				BUBBLES
			</span>
		{:else}
			<span class="absolute -top-[26px] left-1/2 transform -translate-x-1/2 text-xs min-w-[100px]">
				BUBBLES OFF
			</span>
		{/if}
	</SlideToggle>
</div>
