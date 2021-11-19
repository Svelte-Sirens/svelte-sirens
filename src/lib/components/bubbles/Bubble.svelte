<div class="bubble" />

<style lang="scss">
	.bubble {
		--size: 200px;

		width: var(--size);
		height: var(--size);

		border-radius: 100%;
		box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

		animation: bubble var(--speed) linear infinite, wobble 2s ease-in-out alternate infinite;
		animation-delay: var(--delay, 0ms);

		position: absolute;

		bottom: calc(var(--size) * -2);
		left: var(--offset);

		transform: scale(var(--scale));

		backdrop-filter: blur(1rem);
		filter: blur(2px);
	}

	@keyframes bubble {
		from {
			bottom: calc(-1 * var(--size));
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
</style>
