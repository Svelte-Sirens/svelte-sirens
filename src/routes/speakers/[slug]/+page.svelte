<script lang="ts">
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const { picture, handle, name, biography } = data.speaker;
</script>

<article class="mx-auto grid max-w-lg gap-6">
	<h1>{name}</h1>

	<section class="grid justify-items-center gap-2">
		<SpeakerCard speakerPage img={picture} {name} {handle} />
		{#if data.biography}
			<!-- TODO sanitise -->
			<p>
				{@html biography}
			</p>
		{/if}
	</section>
</article>
