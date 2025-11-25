<script lang="ts">
	import SpeakerCard from '$lib/components/SpeakerCard.svelte';
	import Siren from '$lib/images/Siren.svelte';

	const founders = [
		{
			name: 'Brittney Postma',
			handle: '@brittneypostma',
			slug: 'brittney-postma',
			img: '/images/speakers/brittney.jpg',
		},
		{
			name: 'Willow AKA Ghost',
			handle: '@onlyspaceghost',
			slug: 'ghost',
			img: '/images/speakers/ghost.jpg',
		},
		{
			name: 'Steph Dietz',
			handle: '@steph_dietz_',
			slug: 'steph-dietz',
			img: '/images/speakers/steph.jpg',
		},
	];
</script>

<section>
	<h1>About Svelte Sirens</h1>
	<Siren class="mx-auto max-w-[400px]" />

	<p>
		The Svelte Sirens are a Svelte Society that focuses on supporting the women and non-binary
		people in the <a href="https://svelte.dev/">Svelte</a> community. However, we welcome anyone
		who follows the
		<a href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md">
			code of conduct
		</a>
		and is an <strong>ally</strong> to those people to attend our events and be active participants.
		Being an ally means that you are kind and respectful to the community. Every day, in every country
		in the world, women and non-binary people are confronted by discrimination and inequality. It
		can be tough for women and nonbinary people to constantly educate or be subjected to questions,
		so one of the best ways to be an ally is to educate yourself on the basics of gender identity,
		expression, and inequality, so that you can better support others.
	</p>

	<a
		class="btn preset-filled"
		rel="noopener noreferrer"
		target="_blank"
		href="https://discord.gg/4TVdc4RRps"
	>
		Join the community
	</a>
</section>

<section>
	<h2>Founders</h2>
	<div class="glass content grid">
		<p>
			The original idea for the Svelte Sirens came from
			<a rel="noopener noreferrer" target="_blank" href="https://www.swyx.io/">
				Shawn Wang (aka Swyx)
			</a>
			realizing there was a need to support the women and non-binary people inside the Svelte community
			akin groups like the Vue Vixens, Frontend Foxes, and React Robins.
			<a href="/speakers/brittney-postma">Brittney Postma</a> stepped up to found the Svelte
			Sirens in September of 2021, designing and working on the site while reaching out to
			others to join.
			<a href="/speakers/ghost">Willow</a>, who does open source and works at Gitpod, came on
			to help soon after the group was formed.
			<a href="/speakers/steph-dietz">Steph Dietz</a>
			is a dev rel at Vercel for Svelte and wants to be more involved with the Svelte community.
			The 3 of us organize all of the
			<a href="/events">Events</a>, help out in the
			<a rel="noopener noreferrer" target="_blank" href="https://discord.gg/4TVdc4RRps"
				>Discord</a
			>, and support all of the women and non-binary people in the Svelte community. Please
			reach out to any of us directly or email
			<a href="mailto:sveltesirens@gmail.com">SvelteSirens@gmail.com</a> if you ever encounter
			a problem or issue against the
			<a href="https://github.com/sveltejs/community/blob/main/CODE_OF_CONDUCT.md">
				code of conduct
			</a>
			in our community. Welcome!
		</p>
	</div>

	<div class="flex flex-wrap items-start justify-around gap-20">
		{#each founders as { name, handle, img, slug }}
			<SpeakerCard {img} {name} {slug} {handle} />
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc(var(--spacing) * 8);

		max-width: var(--container-2xl);
		text-align: center;
		margin: 0 auto;
	}
</style>
