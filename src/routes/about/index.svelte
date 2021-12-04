<article>
	<section class="title">
		<h1>About Svelte Sirens</h1>
		<img src="images/favicon.png" alt="logo" />
	</section>
	<section class="glass grid content">
		<p>
			The Svelte Sirens are a Svelte Society that focuses on supporting the women and non-binary
			people in the <a href="https://svelte.dev/">Svelte</a> community. However, we welcome anyone
			who is an <strong>ally</strong> to those people to attend our events and be active participants.
			Being an ally means that you are kind and respectful to the community. Every day, in every country
			in the world, women and non-binary are confronted by discrimination and inequality. It can be tough
			for women and nonbinary people to constantly educate or be subjected to questions, so one of the
			best ways to be an ally is to educate yourself on the basics of gender identity, expression, and
			inequality, so that you can better support others.
		</p>
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
	.title {
		display: grid;
		place-items: center;
		& h1 {
			margin-bottom: 0;
		}
	}

	img {
		width: 150px;
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

	.content {
		max-width: 66ch;
		padding: var(--gap-8);
		display: grid;
	}
</style>
