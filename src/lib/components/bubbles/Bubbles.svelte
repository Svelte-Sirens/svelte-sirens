<script>
	import { ran } from '@utils/random.js';
	import Bubble from './Bubble.svelte';
</script>

<div>
	{#each Array(10) as _, i (i)}
		<Bubble
			--scale={ran(2, 3.5) / 10}
			--offset="{i * ran(8, 10)}%"
			--delay="{ran(i, Math.min(i + 4, 5)) * ran(100, 3000)}ms"
			--speed="{ran(12, 22)}s"
		/>
	{/each}
</div>
