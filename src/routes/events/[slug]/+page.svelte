<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1 class="text-3xl mb-6">{data.title}</h1>

	<div class="video-wrapper w-[80vw] xl:w-[1024px]">
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

	{#each data.speakers as { picture, name, handleUrl, handle, slug }}
		<div class="speaker-card">
			<div class="speaker-wrapper card card-glass">
				<img src={picture} alt={name} class="speaker" />

				<h3 class="name">
					<a href={`/speakers/${slug}`}>{name}</a>
				</h3>

				<a href={handleUrl} rel="noopener noreferrer" target="_blank" class="handle">
					{handle}
				</a>
			</div>
		</div>
	{/each}
</section>

<style lang="scss">
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
