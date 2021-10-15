<article>
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" />
	<section>
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women & non-binary</h2>
		<a href="https://discord.gg/NwKTzASz">Join the community</a>
	</section>
</article>

<style>
	span {
		z-index: 1;
		font-family: var(--font-heading);
		font-size: var(--text-baf);
		font-weight: 600;
		display: inline-block;
		position: absolute;
		height: 100%;
		min-height: 0vw;
		width: 100%;
		text-align: center;
		text-shadow: var(--shadow-text);
		margin-inline: auto;
		animation: slideUp 1s cubic-bezier(0, 1, 0.5, 1);
	}
	article {
		display: grid;
		place-items: center;
		place-content: center;
		gap: var(--gap-2);
		height: calc(100vh - 100px);
	}

	section {
		position: relative;
		z-index: 2;
		display: grid;
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--gap-2);
	}

	img {
		max-width: 90%;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin-top: var(--gap-4);
		padding: 10px 20px;
		background-color: var(--light-blue);
		border-radius: var(--gap-1);
		color: var(--navy);
		font-weight: 700;
		cursor: pointer;
		transition: var(--transition);
		box-shadow: var(--shadow-btn);
	}

	a:hover {
		box-shadow: var(--shadow-btn-hover);
		background-color: var(--silver);
		color: var(--navy);
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

	@media (min-width: 1024px) {
		img {
			max-width: 100%;
		}
	}
</style>
