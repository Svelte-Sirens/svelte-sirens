<script lang="ts" module>
	import { PersistedState } from 'runed';

	export const bubbles = new PersistedState('bubbles', true);
</script>

<script lang="ts">
	import Bubble from './Bubble.svelte';

	function random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
</script>

{#if bubbles.current}
	<div>
		{#each Array(10) as _, i (i)}
			<Bubble
				--scale={random(2, 3.5) / 10}
				--offset="{i * random(8, 10)}%"
				--delay="{random(i, Math.min(i + 4, 5)) * random(100, 3000)}ms"
				--speed="{random(12, 22)}s"
			/>
		{/each}
	</div>
{/if}
