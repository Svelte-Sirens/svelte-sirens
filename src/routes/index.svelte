<article>
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" />
	<section>
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women, non-binary, & allies</h2>
		<a rel="noopener noreffer" target="_blank" href="https://discord.gg/4TVdc4RRps">
			Join the community
		</a>
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
		margin: 0 auto;
		animation: var(--fade-in);
	}

	article {
		display: grid;
		align-content: flex-start;
		justify-content: center;
		justify-items: center;
		text-align: center;
		margin: 0 auto;
		gap: var(--gap-2);
	}

	section {
		position: relative;
		z-index: 2;
		display: grid;
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--gap-2);
		animation: var(--fade-in);
	}

	h1 {
		font-size: var(--text-5xl);
	}

	img {
		width: 60%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin-top: var(--gap-4);
		padding: var(--gap-4) var(--gap-8);
		background-color: var(--blue);
		border-radius: var(--gap-1);
		color: var(--navy);
		font-size: var(--text-lg);
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
