<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="max-w-lg mx-auto grid gap-6">
	<h1>{data.speaker.name}</h1>

	<div class="bg-surface-50/10 rounded-xl h-auto self-start">
		<figure class="card card-glass rounded-xl">
			<img src={data.speaker.picture} alt={data.speaker.name} class="rounded-t-xl" />
			<figcaption class="text-center py-4 lg:text-lg">
				<span class="font-bold">{data.speaker.name} - </span>
				<a href={data.speaker.handleUrl} rel="noopener noreferrer" target="_blank">
					<span>{data.speaker.handle}</span>
				</a>
			</figcaption>
		</figure>
	</div>
	<section class="grid gap-2">
		{#if data.biography}
			<!-- TODO sanitise -->
			<p>
				{@html data.speaker.biography}
			</p>
		{/if}
	</section>
</article>
