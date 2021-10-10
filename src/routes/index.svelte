<article><h1>Welcome</h1></article>

<style>
	h1 {
		font-size: clamp(50px, calc(3.125rem + ((1vw - 2.8px) * 6.7204)), 100px);
		min-height: 0vw;
		height: 100%;
		width: 100%;
		text-align: center;
		margin-inline: auto;
		animation: slideUp 1s cubic-bezier(0, 1, 0.5, 1);
	}
	article {
		height: 100vh;
		overflow-y: hidden;
	}
	@keyframes slideUp {
		0% {
			opacity: 0;
			transform: translateY(100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
