<article>
	<section class="title">
		<h1>About Svelte Sirens</h1>
		<img src="images/favicon.png" alt="logo" />
	</section>
	<section class="glass grid content">
		<p>
			The Svelte Sirens are a Svelte Society that focuses on supporting the women and non-binary
			people in the <a href="https://svelte.dev/">Svelte</a> community. However, we welcome anyone
			who follows the
			<a href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md">
				code of conduct
			</a>
			and is an <strong>ally</strong> to those people to attend our events and be active participants.
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
<article class="glass founders">
	<h2>Founders</h2>
	<section class="grid content">
		<p>
			The original idea for the Svelte Sirens came from
			<a rel="noopener noreffer" target="_blank" href="https://www.swyx.io/">
				Shawn Wang (aka Swyx)
			</a>
			realizing there was a need to support the women and non-binary people inside the Svelte community
			akin groups like the Vue Vixens, Frontend Foxes, and React Robins.
			<a href="/speakers/brittney-postma">Brittney Postma</a> stepped up to found the Svelte Sirens
			in September of 2021, designing and working on the site while reaching out to others to join.
			<a href="/speakers/willow-ghost">Willow</a>, who also does open source with
			<a rel="noopener noreffer" target="_blank" href="https://www.routify.dev/">Routify</a>, came
			on to help soon after the group was formed.
			<a href="/speakers/steph-dietz">Steph Dietz</a>
			is a dev rel at Vercel for Svelte and wants to be more involved with the Svelte community.
			<a href="/speakers/gen-ashley">Gen Ashley</a>
			expressed interest in joining the Sirens and with tons of previous experience running women and
			non-binary groups in tech, we thought it was a great fit. The 4 of us organize all of the
			<a href="/events">Events</a>, help out in the
			<a rel="noopener noreffer" target="_blank" href="https://discord.gg/4TVdc4RRps">Discord</a>,
			and support all of the women and non-binary people in the Svelte community. Please reach out
			to any of us directly or email
			<a href="mailto:sveltesirens@gmail.com">SvelteSirens@gmail.com</a> if you ever encounter a
			problem or issue against the
			<a href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md">
				code of conduct
			</a>
			in our community. Welcome!
		</p>
	</section>
</article>

<style lang="scss">
	.title {
		display: grid;
		place-items: center;
	}

	img {
		width: 150px;
		margin-bottom: var(--gap-8);
	}
	article {
		max-width: 55ch;
		display: grid;
		align-content: flex-start;
		justify-content: center;
		justify-items: center;
		text-align: left;
		margin: 0 auto;
		gap: var(--gap-2);
	}

	.content {
		padding: var(--gap-6);
		display: grid;
	}

	.btn-primary {
		text-align: center;
	}

	.founders {
		padding-top: var(--gap-6);
	}
</style>
