<script>
	import { speakers } from '$data/speakers';
	import SpeakerCard from '$components/SpeakerCard.svelte';
</script>

<section>
	<h1>Speakers</h1>
	<p class="text-center">
		Join our other speakers, by submitting your own <a href="/"> talk </a>.
	</p>
	<section class="max-w-[80vw] flex flex-wrap gap-6 lg:gap-10 justify-center mx-auto">
		{#each Object.entries(speakers) as [slug, { handle, name, picture }]}
			<a href="/speakers/{slug}" class="grid glass">
				<SpeakerCard img={picture} {name} {slug} {handle} />
			</a>
		{/each}
	</section>
</section>
