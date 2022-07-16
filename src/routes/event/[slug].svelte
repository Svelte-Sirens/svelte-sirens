<script lang="ts">
	export let title: string;
	export let embed: string;
</script>

<section>
	<h1>{title}</h1>

	<div class="video-wrapper">
		<iframe
			src={embed}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
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
</style>
