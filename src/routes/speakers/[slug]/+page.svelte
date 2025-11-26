<script lang="ts">
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';

	const { data } = $props();
	const { picture, handle, name, biography } = $derived(data.speaker);
</script>

<article class="mx-auto grid max-w-lg gap-6">
	<h1>{name}</h1>

	<section class="grid justify-items-center gap-2">
		<SpeakerCard speakerPage {picture} {name} {handle} />
		{#if data.biography}
			<!-- TODO sanitise -->
			<p>{@html biography}</p>
		{/if}
	</section>
</article>
