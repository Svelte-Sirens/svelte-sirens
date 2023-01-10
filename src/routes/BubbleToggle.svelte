<script>
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	import { bubbles } from '$lib/stores';
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import ToggleLabel from './ToggleLabel.svelte';
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

<SlideToggle
	size="sm"
	bind:checked={toggle}
	on:click={toggleBubbles}
	class="relative top-4 right-2"
>
	{#if $bubbles}
		<ToggleLabel label="BUBBLES" />
	{:else}
		<ToggleLabel long label="BUBBLES OFF" />
	{/if}
</SlideToggle>
