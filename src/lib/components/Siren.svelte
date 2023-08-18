<script lang="ts">
	import Siren from '$lib/images/siren.svg';

	export let classes: string;
	export let width: number = 512;
	export let height: number = 512;
</script>

<img
	class={classes}
	{width}
	{height}
	alt="Svelte Sirens logo, gradient cyan to dark teal siren head with the Svelte S logo in the middle."
	src={Siren}
/>
