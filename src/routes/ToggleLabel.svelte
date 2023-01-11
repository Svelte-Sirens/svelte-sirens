<script>
	export let label;
	export let long = null;
</script>

<span
	class={long
		? 'min-w-[100px] left-1/2 -translate-x-1/2'
		: 'left-0 lg:left-1/4 lg:-translate-x-1/4'}
>
	{label}
</span>

<style>
	span {
		@apply absolute -top-[26px] transform text-xs;
	}
</style>
