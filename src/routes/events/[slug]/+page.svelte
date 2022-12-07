<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<h1>{data.title}</h1>

	<div class="video-wrapper">
		<iframe
			src={data.embed}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</div>
</section>

<section>
	<h2>Speakers</h2>

	<div class="speakers">
		{#each data.speakers as { picture, name, handleUrl, handle, slug }}
			<div class="speaker-container">
				<img src={picture} alt={name} class="speaker" />

				<p class="speaker-name">
					<a href={`/speakers/${slug}`}>{name}</a>
				</p>

				<div class="lg">
					<a href={handleUrl} rel="noopener noreferrer" target="_blank">
						<span>{handle}</span>
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		display: grid;
		gap: var(--size-4);
		grid-template-columns: minmax(0, 1fr);
		h1 {
			font-size: var(--font-size-fluid-2);
			margin-bottom: var(--size-6);
		}
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
	}

	.speakers {
		display: flex;
		margin: 0 auto;

		.speaker-container {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
	}
</style>
