<script lang="ts">
	export let img: string;
	export let name: string;
	export let slug: string | null = null;
	export let handle: string;
	export let speakerPage = false;
</script>

<div class="speaker-card" class:speakerPage>
	<div class="card card-glass h-full">
		<img src={img} alt={name} />
		<div class="speaker-wrapper">
			{#if !speakerPage}
				<h3 class="name">
					<a href={`/speakers/${slug}`}>{name}</a>
				</h3>
			{/if}
			<a href={`https://twitter.com/${handle}`} class="handle">{handle}</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.speaker-card {
		@apply bg-surface-50/10 w-max rounded-xl min-w-[280px]  transform transition-transform hover:scale-[100.05%] shadow-xl;
	}

	.speakerPage {
		@apply w-full h-full;
	}
	.speakerPage img {
		@apply max-h-full;
	}
	.speakerPage .speaker-wrapper {
		@apply max-w-full relative top-2;
	}

	img {
		@apply max-h-64 w-full object-cover rounded-t-xl;
	}

	.speaker-wrapper {
		@apply max-w-xs text-center p-2 pb-4 grid gap-2;
	}

	.name {
		@apply mt-2 text-lg px-2 whitespace-normal;
	}

	.handle {
		@apply text-base text-center border-none;
	}
</style>
