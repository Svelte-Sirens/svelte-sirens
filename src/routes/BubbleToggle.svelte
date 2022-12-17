<script>
	import { SlideToggle } from '@skeletonlabs/skeleton';
	let checked = true;
	function toggleBubbles() {
		checked = !checked;

		const bubbles = document.getElementById('bubbles');
		if (!checked) {
			bubbles.style.display = 'none';
			bubblesToggle.set('off');
		} else {
			bubbles.style.display = 'block';
			bubblesToggle.set('on');
		}
	}
</script>

<SlideToggle
	class="min-w-[130px] grid gap-1 place-items-start lg:place-items-center"
	bind:checked
	on:click={toggleBubbles}
>
	<span class="relative right-[5px] badge badge-filled-accent rounded-full">
		{#if checked}
			Bubbles
		{:else}
			No Bubbles
		{/if}
	</span>
</SlideToggle>
