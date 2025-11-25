<script lang="ts">
	import CardFooter from '$components/CardFooter.svelte';
	import type { Event } from '$data/data';

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
	class={[
		'px-4 lg:p-0 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto rounded-xl',
		limit && 'justify-center max-w-2xl'
	]}
>
	{#each events as { speakers, guests, title, date, thumbnail, slug }}
		<li
			class="bg-surface-50/10 min-w-fit transform transition-transform shadow-xl hover:shadow-xs rounded-xl overflow-clip"
		>
			<div class="card card-glass grid content-between h-full grid-rows-[1fr_auto] max-w-xl">
				<a data-sveltekit-preload-code href="/events/{slug}" class=" grid grid-rows-[auto_1fr]">
					<img src={thumbnail} alt={title} class="w-full object-cover max-w-xs" />

					{#if upcoming}
						<h4 class="px-4 py-2 max-w-xs">{title}</h4>
						<time class="px-4 pb-4" datetime={new Date(date).toISOString()}>
							<span>{new Date(date).toLocaleDateString('en-US', dateFormat)}</span>
							<span>{new Date(date).toLocaleTimeString('en-GB', timeFormat)} GMT </span>
						</time>
					{:else}
						<h4 class="px-4 py-2 justify-self-start text-left">{title}</h4>
					{/if}
				</a>

				<footer
					class="border-t border-primary-400 flex gap-4 p-4 dark:drop-shadow-[2px_2px_2px_rgba(15,23,42,0.7)]"
				>
					{#if guests}
						{#each guests as { picture, name, handle, handleUrl, slug }}
							<CardFooter {picture} {name} {slug} {handleUrl} {handle} />
						{/each}
					{:else}
						{#each speakers as { picture, name, handleUrl, handle, slug }}
							<CardFooter {picture} {name} {slug} {handleUrl} {handle} />
						{/each}
					{/if}
				</footer>
			</div>
		</li>
	{/each}
</ul>
