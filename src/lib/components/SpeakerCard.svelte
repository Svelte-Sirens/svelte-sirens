<script>
	export let img,
		name,
		speaker,
		handle,
		speakerPage = false;
</script>

<div class="speaker-card">
	<img src={img} alt={name} />
	<div class="speaker-wrapper card card-glass">
		<h3 class="name">
			{#if !speakerPage}
				<a href={`/speakers/${speaker}`}>{name}</a>
			{:else}
				{name}
			{/if}
		</h3>
		<a href={`https://twitter.com/${handle}`} class="handle">{handle}</a>
	</div>
</div>

<style>
	.speaker-card {
		@apply bg-surface-50/10 w-max rounded-xl min-w-[280px]  transform transition-transform hover:scale-[100.05%] shadow-xl;
	}

	img {
		@apply max-h-64 w-full object-cover rounded-t-xl;
	}

	.speaker-wrapper {
		@apply max-w-xs text-center p-2 pb-4 rounded-t-xl grid gap-2;
	}

	.name {
		@apply mt-2 text-lg px-2 whitespace-normal;
	}

	.handle {
		@apply text-base;
	}
</style>
