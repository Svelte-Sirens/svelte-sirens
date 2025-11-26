<script lang="ts">
	import CardFooter from '$lib/components/CardFooter.svelte';
	import type { Event } from '$data/data';

	interface Props {
		events: Event[];
		limit?: boolean;
		upcoming?: boolean;
	}

	let { events, limit = false, upcoming = false }: Props = $props();

	const dateFormat: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const timeFormat: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'UTC',
	};
</script>

<ul
	class={[
		'mx-auto flex max-w-6xl flex-wrap justify-center gap-8 rounded-xl px-4 lg:p-0',
		limit && 'max-w-2xl justify-center',
	]}
>
	{#each events as { speakers, guests, title, date, thumbnail, slug }}
		<li
			class="bg-surface-50/10 min-w-fit transform overflow-clip rounded-xl shadow-xl transition-transform hover:shadow-xs"
		>
			<div class="card card-glass grid h-full max-w-xl grid-rows-[1fr_auto] content-between">
				<a
					data-sveltekit-preload-code
					href="/events/{slug}"
					class="grid grid-rows-[auto_1fr]"
				>
					<enhanced:img src={thumbnail} alt={title} class="w-full max-w-xs object-cover"
					></enhanced:img>

					{#if upcoming}
						<h4 class="max-w-xs px-4 py-2">{title}</h4>
						<time class="px-4 pb-4" datetime={new Date(date).toISOString()}>
							<span>{new Date(date).toLocaleDateString('en-US', dateFormat)}</span>
							<span
								>{new Date(date).toLocaleTimeString('en-GB', timeFormat)} GMT
							</span>
						</time>
					{:else}
						<h4 class="justify-self-start px-4 py-2 text-left">{title}</h4>
					{/if}
				</a>

				<footer
					class="border-primary-400 flex gap-4 border-t p-4 dark:drop-shadow-[2px_2px_2px_rgba(15,23,42,0.7)]"
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
