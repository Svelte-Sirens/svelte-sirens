<script>
	const ran = (min, max) =>
		Math.floor(Math.random() * (max - min + 1) + min)
</script>

<div class="bubbles">
	{#each Array(10) as _, i}
		<div
			class="bubble"
			style="--scale: {ran(2, 4) / 10}; --offset: {i * ran(8, 10)}%; --delay: {i * ran(1000, 5000)}ms;"
			/>
	{/each}
</div>

<style>
	@keyframes bubble {
		from {
			bottom: calc(var(--size) * -2);
		}

		to {
			bottom: calc(var(--size) + 100vh);
		}
	}

	@keyframes wobble {
		from {
			margin-left: 0;
		}

		to {
			margin-left: 52px;
		}
	}

	.bubbles {
		position: fixed;
		height: 100vh;
		width: 100%;

		top: 0;
		left: 0;

		z-index: -1;
	}

	.bubble {
		--size: 200px;

		width: var(--size);
		height: var(--size);

		border-radius: 100%;
		box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

		animation: bubble 14s linear infinite, wobble 2s ease-in-out alternate infinite;
		animation-delay: var(--delay, 0);

		position: absolute;

		bottom: calc(var(--size) * -2);
		left: var(--offset);

		transform: scale(var(--scale));

		/* background: radial-gradient(
			ellipse at center,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0) 70%
		); */
	}
</style>
