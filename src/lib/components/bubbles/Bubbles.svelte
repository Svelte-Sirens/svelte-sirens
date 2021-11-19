<script>
	import Bubble from './Bubble.svelte';

	const ran = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
</script>

<div class="bubbles">
	{#each Array(12) as _, i (i)}
		<Bubble
			--scale={ran(2, 4) / 10}
			--offset="{i * ran(8, 10)}%"
			--delay="{ran(i, Math.min(i + 4, 5)) * ran(100, 3000)}ms"
			--speed="{ran(12, 22)}s"
		/>
	{/each}
</div>

<style lang="scss">
	.bubbles {
		position: fixed;
		height: 100vh;
		width: 100%;

		top: 0;
		left: 0;

		z-index: -1;
		pointer-events: none;
	}
</style>
