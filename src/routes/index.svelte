<script>
	import { fade } from 'svelte/transition';
</script>

<h1 transition:fade>Welcome</h1>

<style>
	h1 {
		font-size: clamp(50px, calc(3.125rem + ((1vw - 2.8px) * 6.7204)), 100px);
		min-height: 0vw;
		height: 100vh;
		text-align: center;
		width: 100%;
		margin-inline: auto;
		/* position: absolute;
		left: 0;
		bottom: 2.5%; */
	}
</style>
