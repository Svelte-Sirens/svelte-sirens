<script lang="ts">
	import type { Picture } from '$data/assets/assets';

	interface Props {
		picture: Picture;
		name: string;
		handle: string;
		handleUrl: string;
		slug: string;
	}

	let { picture, name, handle, handleUrl, slug }: Props = $props();
</script>

<enhanced:img
	src={picture}
	alt={name}
	class="border-primary-200 h-[50px] w-[50px] rounded-full border-2 object-cover"
></enhanced:img>

<div class="flex flex-col items-start">
	<a href="/speakers/{slug}">{name}</a>
	<a href={handleUrl} rel="noopener noreferrer" target="_blank">
		<span>{handle}</span>
	</a>
</div>
