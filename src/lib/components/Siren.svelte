<script lang="ts">
	export let classes: string;
	export let width: number = 512;
	export let height: number = 512;
	import Siren from '$lib/images/siren.svg';
</script>

<img
	class={classes}
	{width}
	{height}
	alt="Svelte Sirens logo, gradient cyan to dark teal siren head with the Svelte S logo in the middle."
	src={Siren}
/>
