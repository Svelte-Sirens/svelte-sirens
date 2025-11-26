<script lang="ts">
	import type { Picture } from '$data/assets/assets';

	interface Props {
		picture: Picture;
		name: string;
		slug?: string | null;
		handle: string;
		speakerPage?: boolean;
	}

	const { picture, name, slug = null, handle, speakerPage = false }: Props = $props();
</script>

<div class={['bg-surface-50/10 flex flex-col rounded-xl shadow-xl', speakerPage ? 'w-96' : 'w-72']}>
	<enhanced:img
		src={picture}
		alt={name}
		class="aspect-square h-auto w-full rounded-t-xl object-cover"
	></enhanced:img>

	<div class="p-2 pb-4 text-center">
		{#if !speakerPage}
			<h3 class="mt-2 px-2 text-lg whitespace-normal">
				<a href="/speakers/{slug}">{name}</a>
			</h3>
		{/if}

		<a href="https://x.com/{handle}">{handle}</a>
	</div>
</div>
