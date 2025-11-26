<script lang="ts">
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
	import { speakers } from '$data/speakers';
</script>

<section>
	<h1>Speakers</h1>
	<p class="text-center">
		Join our other speakers, by submitting your own <a href="/"> talk </a>.
	</p>
	<section class="mx-auto flex max-w-[80vw] flex-wrap justify-center gap-6 lg:gap-10">
		{#each Object.entries(speakers) as [slug, { handle, name, picture }]}
			<a href="/speakers/{slug}" class="glass grid">
				<SpeakerCard {picture} {name} {slug} {handle} />
			</a>
		{/each}
	</section>
</section>
