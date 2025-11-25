<script lang="ts">
	import { bubbles } from '$lib/components/bubbles/Bubbles.svelte';
	import { Switch } from '@skeletonlabs/skeleton-svelte';
</script>

<Switch
	name="Toggle Bubbles"
	checked={bubbles.current}
	onCheckedChange={(event) => (bubbles.current = event.checked)}
>
	<Switch.Label class="text-secondary-700 dark:text-primary-200">Bubbles</Switch.Label>
	<Switch.Control>
		<Switch.Thumb />
	</Switch.Control>
	<Switch.HiddenInput />
</Switch>
