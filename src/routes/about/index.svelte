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
<article class="glass founders">
	<h2>Founders</h2>
	<section class="grid content">
		<p>
			Svelte Sirens was founded by <a href="/speakers/brittney-postma">Brittney Postma</a> in
			September of 2021. <a href="/speakers/willow-ghost">Willow</a>, who also does open source with
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
			<a href="mailto:sveltesirens@gmail.com">SvelteSirens@gmail.com</a> if you ever encounter a problem
			in our community. Welcome!
		</p>
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
