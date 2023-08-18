<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import { bubbles } from '$lib/stores';
</script>

<SlideToggle size="sm" name="Toggle Bubbles" bind:checked={$bubbles} class="relative top-4 right-2">
	<p class="text-xs text-slate-700 dark:text-slate-200 absolute top-[-24px] left-[-8px]">BUBBLES</p>
</SlideToggle>
