<script lang="ts">
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

<ul class:limit class="px-4 lg:p-0 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
	{#each events as { speakers, guests, title, date, thumbnail, eventUrl, slug }}
		<li
			class="bg-surface-50/10 min-w-fit transform transition-transform hover:scale-[100.05%] shadow-xl hover:shadow-sm"
		>
			<div class="card card-glass grid content-between h-full grid-rows-[1fr_auto]">
				<a data-sveltekit-preload-code href={`/events/${slug}`} class="unstyled grid">
					<img src={thumbnail} alt={title} class="w-full object-cover max-w-xs" />
					{#if upcoming}
						<h4 class="px-4 py-2 max-w-xs">{title}</h4>
						<time class="px-4 pb-4" datetime={new Date(date).toISOString()}>
							<span>{new Date(date).toLocaleDateString('en-US', dateFormat)}</span>
							<span>{new Date(date).toLocaleTimeString('en-GB', timeFormat)} GMT </span>
						</time>
					{:else}
						<h4 class="max-w-xs grid p-4 self-end">{title}</h4>
					{/if}
				</a>
				{#if guests}
					<footer>
						{#each guests as { picture, name, handle, handleUrl, slug }}
							<div>
								<img src={picture} alt={name} class="speaker" />
								<div class="grid">
									<a href="/speakers/{slug}">{name}</a>
									<a href={handleUrl} rel="noopener noreferrer" target="_blank">
										<span>{handle}</span>
									</a>
								</div>
							</div>
						{/each}
					</footer>
				{:else}
					<footer>
						{#each speakers as { picture, name, handleUrl, handle, slug }}
							<div>
								<img src={picture} alt={name} class="speaker" />
								<div class="grid">
									<a href="/speakers/{slug}">{name}</a>
									<a href={handleUrl} rel="noopener noreferrer" target="_blank">
										<span>{handle}</span>
									</a>
								</div>
							</div>
						{/each}
					</footer>
				{/if}
			</div>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.limit {
		@apply lg:flex-nowrap lg:overflow-x-auto lg:justify-start;
	}

	.card-glass footer {
		@apply dark:drop-shadow-[2px_2px_2px_rgba(15,_23,_42,_0.7)] border-t-1 border-primary-400;
	}

	.card-glass footer > div {
		@apply flex gap-4 p-4;
	}

	.card-glass .speaker {
		@apply w-[50px] h-[50px] object-cover rounded-full border-2 border-primary-200;
	}
</style>
