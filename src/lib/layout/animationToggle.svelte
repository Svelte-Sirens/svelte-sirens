<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let checked = true;
	let color = 'var(--blue)';
	let label = null;

	$: handleCheck = () => {
		const bubbles = document.getElementById('bubbles');
		if (!checked) {
			bubbles.style.display = 'none';
		} else {
			bubbles.style.display = 'block';
		}
	};

	$: dispatch('check', checked);
	export { checked, color, label };
</script>

<div class="grid">
	<label class="switch">
		<input type="checkbox" bind:checked on:change={handleCheck} {color} />
		<span class="slider" />
		<span class="text">{label}</span>
	</label>
</div>

<style>
	div {
		position: relative;
		gap: var(--gap-2);
		place-items: center;
		margin-right: var(--gap-10);
	}
	.switch {
		position: absolute;
		display: inline-block;
		top: -20px;
		width: 50px;
		height: 20px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.text {
		position: absolute;
		left: -35px;
		top: 20px;
		width: 150px;
	}

	.slider {
		box-shadow: 0px -2px 20px rgba(33, 50, 84, 0.5) inset;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--teal);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		box-shadow: 0 4px 8px rgba(33, 50, 84, 0.3);
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 4px;
		bottom: 4px;
		background-color: var(--silver);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--navy);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
		background-color: var(--blue);
	}
</style>
