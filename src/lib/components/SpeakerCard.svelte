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

<style>
	@reference '$lib/app.css';

	.speaker-card {
		@apply bg-surface-50/10 w-max min-w-[280px] transform rounded-xl shadow-xl transition-transform hover:scale-[100.05%];
	}

	.speakerPage {
		@apply h-full w-full;
	}
	.speakerPage img {
		@apply max-h-full;
	}
	.speakerPage .speaker-wrapper {
		@apply relative top-2 max-w-full;
	}

	img {
		@apply max-h-64 w-full rounded-t-xl object-cover;
	}

	.speaker-wrapper {
		@apply grid max-w-xs gap-2 p-2 pb-4 text-center;
	}

	.name {
		@apply mt-2 px-2 text-lg whitespace-normal;
	}

	.handle {
		@apply border-none text-center text-base;
	}
</style>
