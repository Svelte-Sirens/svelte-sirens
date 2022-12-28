<script lang="ts">
	import type { Event } from '$data/data';

	export let events: Event[];

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

<ul class="flex flex-wrap justify-center gap-4 max-w-7xl">
	{#each events as { speakers, guests, title, date, eventUrl, slug }}
		<li class="bg-surface-50/10  rounded-2xl max-w-xs">
			<div class="card card-glass grid rounded-2xl h-full">
				<section>
					<h2>
						<a data-sveltekit-preload-code href={`/events/${slug}`}>
							<h4>{title}</h4>
						</a>
					</h2>
				</section>
				{#if guests}
					<footer class="card-footer">
						{#each guests as { picture, name, handle, handleUrl, slug }}
							<img src={picture} alt={name} class="speaker" />
							<div class="grid">
								<a href="/speakers/{slug}">{name}</a>
								<a href={handleUrl} rel="noopener noreferrer" target="_blank">
									<span>{handle}</span>
								</a>
							</div>
						{/each}
					</footer>
				{:else}
					<footer class="card-footer">
						{#each speakers as { picture, name, handleUrl, handle, slug }}
							<img src={picture} alt={name} class="w-48" />
							<div class="grid">
								<a href="/speakers/{slug}">{name}</a>
								<a href={handleUrl} rel="noopener noreferrer" target="_blank">
									<span>{handle}</span>
								</a>
							</div>
						{/each}
					</footer>
				{/if}
			</div>
		</li>
	{/each}
</ul>
