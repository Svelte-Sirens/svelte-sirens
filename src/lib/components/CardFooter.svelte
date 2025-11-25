<script>
	export let picture, name, handle, handleUrl, slug;
</script>

<img src={picture} alt={name || ''} class="object-cover rounded-full border-2 border-primary-200" />

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
