<script lang="ts">
	import type { Event } from '$data/data';
	import CardFooter from '$components/CardFooter.svelte';

	export let events: Event[];
	export let limit = false;
	export let upcoming = false;

	const dateFormat: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const timeFormat: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'UTC'
	};
</script>

<ul
	class:limit
	class="px-4 lg:p-0 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto rounded-xl"
>
	{#each events as { speakers, guests, title, date, thumbnail, eventUrl, slug }}
		<li
			class="bg-surface-50/10 min-w-fit transform transition-transform hover:scale-[100.05%] shadow-xl hover:shadow-sm rounded-xl overflow-clip"
		>
			<div class="card card-glass grid content-between h-full grid-rows-[1fr_auto]">
				<a
					data-sveltekit-preload-code
					href={`/events/${slug}`}
					class="unstyled grid grid-rows-[auto_1fr]"
				>
					<img src={thumbnail} alt={title} class="w-full object-cover max-w-xs" />

					{#if upcoming}
						<h4 class="px-4 py-2 max-w-xs">{title}</h4>
						<time class="px-4 pb-4" datetime={new Date(date).toISOString()}>
							<span>{new Date(date).toLocaleDateString('en-US', dateFormat)}</span>
							<span>{new Date(date).toLocaleTimeString('en-GB', timeFormat)} GMT </span>
						</time>
					{:else}
						<h4 class="max-w-xs grid px-4 py-2">{title}</h4>
					{/if}
				</a>
				{#if guests}
					<footer>
						{#each guests as { picture, name, handle, handleUrl, slug }}
							<CardFooter {picture} {name} {slug} {handleUrl} {handle} />
						{/each}
					</footer>
				{:else}
					<footer>
						{#each speakers as { picture, name, handleUrl, handle, slug }}
							<CardFooter {picture} {name} {slug} {handleUrl} {handle} />
						{/each}
					</footer>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style lang="postcss">
	footer {
		@apply dark:drop-shadow-[2px_2px_2px_rgba(15,_23,_42,_0.7)] border-t-1 border-primary-400 flex gap-4 p-4;
	}

	.limit {
		@apply justify-center max-w-2xl;
	}
</style>
