<script lang="ts">
	import { SunMoon, Sun, Moon } from '@lucide/svelte';
	import { theme } from '$lib/theme.svelte';

	const nextTheme = $derived.by(() => {
		switch (theme.theme) {
			case 'system':
				return 'light';
			case 'light':
				return 'dark';
			case 'dark':
				return 'system';
		}
	});
</script>

<button
	class="btn-icon hover:preset-tonal text-secondary-700 dark:text-primary-200"
	title="Switch to {nextTheme} theme"
	onclick={() => (theme.theme = nextTheme)}
>
	{#if theme.theme === 'light'}
		<Moon />
	{:else if theme.theme === 'dark'}
		<Sun />
	{:else if theme.theme === 'system'}
		<SunMoon />
	{/if}
</button>
