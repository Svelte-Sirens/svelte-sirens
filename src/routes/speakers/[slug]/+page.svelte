<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="max-w-lg mx-auto grid gap-6">
	<h1>{data.speaker.name}</h1>
	<figure class="card card-glass">
		<img src={data.speaker.picture} alt={data.speaker.name} />
		<figcaption class="text-center py-2">
			<span class="font-bold">{data.speaker.name} - </span>
			<a href={data.speaker.handleUrl} rel="noopener noreferrer" target="_blank">
				<span>{data.speaker.handle}</span>
			</a>
		</figcaption>
	</figure>
	<section class="grid gap-2">
		{#if data.biography}
			<!-- TODO sanitise -->
			<p>
				{@html data.speaker.biography}
			</p>
		{/if}
	</section>
</article>
