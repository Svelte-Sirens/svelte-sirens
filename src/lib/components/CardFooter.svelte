<script lang="ts">
	interface Props {
		picture: string;
		name: string;
		handle: string;
		handleUrl: string;
		slug: string;
	}

	let { picture, name, handle, handleUrl, slug }: Props = $props();
</script>

<img src={picture} alt={name || ''} class="border-primary-200 rounded-full border-2 object-cover" />

<div class="flex flex-col items-start">
	<a href="/speakers/{slug}">{name}</a>
	<a href={handleUrl} rel="noopener noreferrer" target="_blank">
		<span>{handle}</span>
	</a>
</div>

<style>
	img {
		width: 50px;
		height: 50px;
	}
</style>
