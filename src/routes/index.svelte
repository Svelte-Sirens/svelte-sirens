<article class="grid">
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" />
	<section class="grid">
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women, non-binary people, & allies</h2>
		<a
			class="btn-primary"
			rel="noopener noreffer"
			target="_blank"
			href="https://discord.gg/4TVdc4RRps"
		>
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
		justify-content: center;
		justify-items: center;
		text-align: center;
		gap: var(--gap-2);
		max-width: 55ch;
		animation: var(--fade-in);
	}

	h1 {
		font-size: var(--text-5xl);
		margin-bottom: 0;
		animation: none;
	}

	h2 {
		font-size: var(--text-2xl);
	}

	img {
		width: 60%;
		max-width: 400px;
		filter: drop-shadow(0px 10px 20px #213253);
	}

	a {
		margin: var(--gap-4) auto;
	}

	@media (min-width: 1024px) {
		h2 {
			font-size: var(--text-3xl);
			max-width: 100%;
			word-break: none;
		}
	}
</style>
