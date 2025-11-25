<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="mx-auto text-center">
	<h1>{page.status}: {page.error?.message || 'Unknown error'}</h1>
	<p>It looks like this page doesn't exist.</p>
	<a href="/" class="btn preset-filled mt-4">Go Home</a>
</div>

<style>
	h1 {
		margin: 0;
	}
</style>
