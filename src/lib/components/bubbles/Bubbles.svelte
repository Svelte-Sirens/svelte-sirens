<script>
	import { random } from '$lib/utils/random';
	import Bubble from './Bubble.svelte';
</script>

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
