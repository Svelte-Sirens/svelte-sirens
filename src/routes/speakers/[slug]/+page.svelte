<script lang="ts">
	import type { PageData } from './$types';
	import SpeakerCard from '$components/SpeakerCard.svelte';
	export let data: PageData;

	const { picture, handle, name, biography } = data.speaker;
</script>

<article class="max-w-lg mx-auto grid gap-6">
	<h1>{name}</h1>

	<section class="grid gap-2 justify-items-center">
		<SpeakerCard speakerPage img={picture} {name} {handle} />
		{#if data.biography}
			<!-- TODO sanitise -->
			<p>
				{@html biography}
			</p>
		{/if}
	</section>
</article>
