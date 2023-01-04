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

<div class="grid gap-1 grid-rows-2 place-items-start min-w-[82px] lg:place-items-center">
	<span>
		{#if $bubbles}
			Bubbles
		{:else}
			No Bubbles
		{/if}
	</span>
	<SlideToggle size="sm" bind:checked={toggle} on:click={toggleBubbles} />
</div>
