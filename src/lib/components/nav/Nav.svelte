<script lang="ts">
	import { AppBar, Popover, Portal } from '@skeletonlabs/skeleton-svelte';
	import { scrollY, innerWidth } from 'svelte/reactivity/window';
	import Hamburger from '$lib/images/Hamburger.svelte';
	import BubbleToggle from './BubbleToggle.svelte';
	import LightSwitch from './LightSwitch.svelte';
	import { page } from '$app/state';

	const desktop = $derived(innerWidth.current ? innerWidth.current > 1024 : false);
	const scrolled = $derived(scrollY.current ? scrollY.current > 0 : false);

	const LINKS = [
		{ href: `/`, name: `Home` },
		{ href: `/about`, name: `About` },
		{ href: `/events`, name: `Events` },
		{ href: `/speakers`, name: `Speakers` },
		{ href: `/contact`, name: `Contact` },
		{ href: `/bubble-pop`, name: `Game` }
	];
</script>

{#snippet links()}
	{#each LINKS as { href, name }}
		<a
			{href}
			data-sveltekit-preload-code
			class={[
				'font-heading font-bold decoration-wavy hover:underline!',
				'decoration-primary-700 dark:decoration-primary-400',
				'text-primary-700 dark:text-primary-200',
				page.url.pathname === href && 'underline!'
			]}
		>
			{name}
		</a>
	{/each}
{/snippet}

<AppBar
	class={[
		scrolled && 'shadow-lg transition-shadow',
		'sticky top-0 z-30 bg-transparent backdrop-blur-lg'
	]}
>
	<AppBar.Toolbar class="flex items-center justify-between">
		<AppBar.Lead>
			<a
				href="/"
				class="flex gap-2 items-center decoration-wavy decoration-primary-400 hover:underline after:content-none"
			>
				<img src="/images/favicon.png" alt="logo" class="w-12" />
				<span class="hidden sm:block font-heading font-bold">Svelte Sirens</span>
			</a>
		</AppBar.Lead>

		{#if desktop}
			<AppBar.Headline class="flex gap-4">
				{@render links()}
			</AppBar.Headline>
		{/if}

		<AppBar.Trail class="">
			{#if desktop}
				<BubbleToggle />
				<LightSwitch />
			{:else}
				<Popover>
					<Popover.Trigger class="btn p-0">
						<Hamburger />
					</Popover.Trigger>
					<Portal>
						<Popover.Positioner>
							<Popover.Content
								class={[
									'card p-4 bg-secondary-300 dark:bg-primary-900 shadow-xl',
									'flex flex-col items-end text-right gap-4 z-50'
								]}
							>
								{@render links()}
								<LightSwitch />
								<BubbleToggle />
							</Popover.Content>
						</Popover.Positioner>
					</Portal>
				</Popover>
			{/if}
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
