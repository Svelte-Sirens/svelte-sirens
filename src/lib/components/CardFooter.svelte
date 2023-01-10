<script>
	export let picture, name, handle, handleUrl, slug;
</script>

<img
	src={picture}
	alt={name || ''}
	class="w-[50px] h-[50px] object-cover rounded-full border-2 border-primary-200"
/>
<div class="grid">
	<a href="/speakers/{slug}">{name}</a>
	<a href={handleUrl} rel="noopener noreferrer" target="_blank">
		<span>{handle}</span>
	</a>
</div>
