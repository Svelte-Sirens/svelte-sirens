<script>
	import { quintIn } from 'svelte/easing';
	import { onDestroy } from 'svelte';

	let timeout,
		popped = false;

	onDestroy(() => clearTimeout(timeout));

	const popTransition = (node, options) => {
		const opacity = getComputedStyle(node).opacity;

		return {
			easing: quintIn,
			duration: options.duration || 200,
			delay: options.delay || 0,

			css: (t, u) => `transform: scale3d(${u + 1}, ${u + 1}, ${u + 1}); opacity: ${t * opacity}`
		};
	};

	function pop() {
		popped = true;

		if (!timeout)
			timeout = setTimeout(() => {
				popped = false;
				timeout = null;
			}, 12000);
	}
</script>

<div class="positioner">
	<div class="positioner-inner">
		{#if !popped}
			<div class="bubble" on:click={pop} transition:popTransition|local />
		{/if}
	</div>
</div>

<style lang="scss">
	.positioner {
		--bubble-size: calc(200px * var(--scale));

		animation: position var(--speed) linear infinite forwards;

		animation-delay: var(--delay);

		position: fixed;
		z-index: var(--zindex, 99);

		bottom: calc(var(--bubble-size) * -2);
		left: var(--offset);

		.positioner-inner {
			animation: wobble 2s ease-in-out alternate infinite;
			animation-delay: inherit;
		}

		.bubble {
			width: var(--bubble-size);
			height: var(--bubble-size);

			border-radius: 100%;
			box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2), inset 0px 5px 15px 2px rgba(255, 255, 255, 1);

			backdrop-filter: blur(1px);
			filter: blur(2px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.positioner {
			animation: none;
		}
	}

	@keyframes position {
		from {
			transform: translate3d(0, 0, 0);
		}

		to {
			transform: translate3d(0, calc((-2.5 * var(--bubble-size)) - 100vh), 0);
		}
	}

	@keyframes wobble {
		from {
			transform: translate3d(0, 0, 0);
		}

		to {
			transform: translate3d(42px, 0, 0);
		}
	}
</style>
