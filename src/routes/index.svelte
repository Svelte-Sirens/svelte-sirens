<article>
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" />
	<section>
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women & non-binary</h2>
		<a rel="noopener noreffer" target="_blank" href="https://discord.gg/NwKTzASz"
			>Join the community</a
		>
	</section>
</article>

<style lang="scss">
	span {
		font-size: var(--text-4xl);
		z-index: 1;
		font-family: var(--font-heading);
		font-weight: 600;
		display: inline-block;
		position: relative;
		text-align: center;
		text-shadow: var(--shadow-text);
		margin-inline: auto;
		animation: var(--fade-in);
	}

	article {
		display: grid;
		place-items: center;
		place-content: center;
		gap: var(--gap-2);
		height: calc(100vh - 100px);
		margin-inline: auto;
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

	h1 {
		font-size: var(--text-4xl);
	}
	h2 {
		font-size: var(--text-2xl);
		max-width: 400px;
	}

	img {
		width: 60%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin-top: var(--gap-4);
		padding: var(--gap-5) var(--gap-9);
		background-color: var(--blue);
		border-radius: var(--gap-1);
		color: var(--navy);
		font-weight: 700;
		cursor: pointer;
		transition: var(--transition-all);
		box-shadow: var(--shadow-btn);

		&:hover {
			box-shadow: var(--shadow-btn-hover);
			filter: brightness(1.1);
			color: var(--navy);
		}
	}

	@media (min-width: 1024px) {
		h2 {
			max-width: 100%;
			word-break: none;
		}
	}
</style>
