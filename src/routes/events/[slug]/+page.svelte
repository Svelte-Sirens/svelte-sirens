<script lang="ts">
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="p-4 lg:p-0">
	<h1 class="mb-6 text-3xl">{data.title}</h1>

	<div class="video-wrapper mx-auto w-[80vw] xl:w-[1200px]">
		<iframe
			width="100%"
			src={data.embed}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</section>

<section class="grid place-items-center gap-4">
	<h2 class="text-2xl">Guest</h2>

	{#each data.speakers as { picture, name, handle, slug }}
		<SpeakerCard img={picture} {name} {handle} {slug} />
	{/each}
</section>

<style>
	@reference '$lib/app.css';

	.video-wrapper {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
