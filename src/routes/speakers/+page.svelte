<script>
	import { speakers } from '$data/speakers';
	import SpeakerCard from '$components/SpeakerCard.svelte';
</script>

<h1>Speakers</h1>
<p class="text-center">
	Join our other speakers, by submitting your own <a href="/"> talk </a>.
</p>
<section class="w-[80vw] flex flex-wrap gap-6 lg:gap-10 justify-center">
	{#each Object.entries(speakers) as [slug, { handle, name, picture }]}
		<a href="/speakers/{slug}" class="grid glass">
			<SpeakerCard speakerPage img={picture} {name} speaker={name} {handle} />
		</a>
	{/each}
</section>
