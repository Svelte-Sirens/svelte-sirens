<script>
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	import { bubblesToggle } from '$lib/stores';
	import { SlideToggle } from '@skeletonlabs/skeleton';

	let checked = false;
	let bubbles;
	// BUBBLES OFF BY DEFAULT IN DEV
	onMount(() => {
		bubbles = document.getElementById('bubbles');
		if (dev) {
			checked = false;
			bubbles.style.display = 'none';
			bubblesToggle.set('off');
		} else checked = true;
	});

	function toggleBubbles() {
		checked = !checked;
		if (!checked) {
			bubbles.style.display = 'none';
			bubblesToggle.set('off');
		} else {
			bubbles.style.display = 'block';
			bubblesToggle.set('on');
		}
	}
</script>

<div class="grid gap-1 grid-rows-2 place-items-start lg:place-items-center">
	<span>
		{#if checked}
			Bubbles
		{:else}
			No Bubbles
		{/if}
	</span>
	<SlideToggle size="sm" bind:checked on:click={toggleBubbles} />
</div>
