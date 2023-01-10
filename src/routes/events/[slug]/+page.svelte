<script lang="ts">
	import type { PageData } from './$types';
	import SpeakerCard from '$components/SpeakerCard.svelte';

	export let data: PageData;
</script>

<section class="p-4 lg:p-0">
	<h1 class="text-3xl mb-6">{data.title}</h1>

	<div class="video-wrapper w-[80vw] xl:w-[1024px] mx-auto">
		<iframe
			width="100%"
			src={data.embed}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</section>

<section class="grid gap-4 place-items-center">
	<h2 class="text-2xl">Guest</h2>

	{#each data.speakers as { picture, name, handle, slug }}
		<SpeakerCard img={picture} {name} {handle} speaker={slug} />
	{/each}
</section>

<style lang="postcss">
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
