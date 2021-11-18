<script>
	import Bubble from './Bubble.svelte';

	const ran = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
</script>

<div class="bubbles">
	{#each Array(10) as _, i}
		<Bubble
			--scale={ran(2, 4) / 10}
			--offset="{i * ran(8, 10)}%"
			--delay="{i * ran(1000, 5000)}ms"
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
	}
</style>
