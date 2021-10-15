<article>
	<span>Welcome</span>
	<img src="images/favicon.png" alt="logo" />
	<section>
		<h1>Svelte Sirens</h1>
		<h2>A Svelte Society for women & non-binary</h2>
		<a href="https://discord.gg/NwKTzASz">Join the community</a>
	</section>
</article>

<style lang="scss">
	span {
		z-index: 1;
		font-family: var(--font-heading);
		font-size: var(--text-baf);
		font-weight: 600;
		display: inline-block;
		position: relative;
		text-align: center;
		text-shadow: var(--shadow-text);
		margin-inline: auto;
		animation: fadeIn 1s cubic-bezier(0, 1, 0.5, 1);
	}
	
	article {
		display: grid;
		place-items: center;
		place-content: center;
		gap: var(--gap-2);
		height: calc(100vh - 100px);
		max-width: 50ch;
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
	}

	img {
		width: 60%;
		max-width: 400px;
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

		&:hover {
		box-shadow: var(--shadow-btn-hover);
		background-color: var(--silver);
		color: var(--navy);
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
