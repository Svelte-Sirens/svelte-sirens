import type { Event } from './data';
import { speakers } from './speakers';

export const events: Event[] = [
	{
		slug: 'learn-svelte',
		title: 'Learn Svelte',
		date: new Date('2022-10-19T13:00:00.000Z').getTime(),
		id: 'RusJPhEe_xs',
		embed: 'https://www.youtube.com/embed/RusJPhEe_xs',
		eventUrl: 'https://www.youtube.com/watch?v=RusJPhEe_xs',
		thumbnail: 'https://img.youtube.com/vi/RusJPhEe_xs/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']]
	},
	{
		slug: 'sveltekit-for-enterprise',
		title: 'SvelteKit for Enterprise',
		date: new Date('2022-12-06T17:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/_0ijqV0DmNQ',
		eventUrl: 'https://www.youtube.com/watch?v=_0ijqV0DmNQ',
		thumbnail: 'https://img.youtube.com/vi/_0ijqV0DmNQ/maxresdefault.jpg',
		speakers: [speakers['lacey-pevey']]
	},
	{
		slug: 'upgrading-sveltekit',
		title: 'Upgrading SvelteKit',
		date: new Date('2022-09-27T13:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/vzeZskhjoeQ',
		eventUrl: 'https://www.youtube.com/watch?v=vzeZskhjoeQ',
		thumbnail: 'https://img.youtube.com/vi/vzeZskhjoeQ/maxresdefault.jpg',
		speakers: [speakers['kev-a-k']]
	},
	{
		slug: 'storyblok-with-sveltekit',
		title: 'Storyblok with SvelteKit',
		date: new Date('2022-08-17T17:30:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/xXHFRzqUxoE',
		eventUrl: 'https://www.youtube.com/watch?v=xXHFRzqUxoE',
		thumbnail: 'https://img.youtube.com/vi/xXHFRzqUxoE/maxresdefault.jpg',
		speakers: [speakers['josefine-schaefer']]
	},
	{
		slug: 'testing-in-svelte',
		title: 'Testing in Svelte',
		date: new Date('2022-07-20T17:00:00.000Z').getTime(),
		embed: 'https://www.youtube.com/embed/-GKRH0KQ_j0',
		eventUrl: 'https://www.youtube.com/watch?v=-GKRH0KQ_j0',
		thumbnail: 'https://img.youtube.com/vi/-GKRH0KQ_j0/maxresdefault.jpg',
		speakers: [speakers['jess-sachs']]
	},
	{
		slug: 'the-story-behind-the-unofficial-svelte-newsletter',
		title: 'The story behind the (unofficial) Svelte newsletter',
		date: 1653674400000,
		embed: 'https://www.youtube.com/embed/aK0xXm3hPxk',
		eventUrl: 'https://www.youtube.com/watch?v=aK0xXm3hPxk',
		thumbnail: 'https://img.youtube.com/vi/aK0xXm3hPxk/maxresdefault.jpg',
		speakers: [speakers['dani-sandoval']]
	},
	{
		slug: 'sveltekit-sanityio-a-match-made-in-heaven',
		title: 'SvelteKit + Sanity.io; a match made in heaven',
		embed: 'https://www.youtube.com/embed/j0_1hfiEVWA',
		eventUrl: 'https://www.youtube.com/watch?v=j0_1hfiEVWA',
		thumbnail: 'https://img.youtube.com/vi/j0_1hfiEVWA/maxresdefault.jpg',
		speakers: [speakers['jacob-stordahl']],
		date: 1652461200000
	},
	{
		slug: 'building-advanced-landing-pages',
		title: 'Building Advanced Landing Pages',
		embed: 'https://www.youtube.com/embed/D8oo5dwXMQ4',
		eventUrl: 'https://www.youtube.com/watch?v=D8oo5dwXMQ4',
		thumbnail: 'https://img.youtube.com/vi/D8oo5dwXMQ4/maxresdefault.jpg',
		speakers: [speakers['amy-dutton']],
		date: 1650042000000
	},
	{
		slug: 'build-in-3d-with-svelte',
		title: 'Build in 3D with Svelte',
		embed: 'https://www.youtube.com/embed/7PJ_28fgLp8',
		eventUrl: 'https://www.youtube.com/watch?v=7PJ_28fgLp8',
		thumbnail: 'https://img.youtube.com/vi/7PJ_28fgLp8/maxresdefault.jpg',
		speakers: [speakers['scott-tolinski']],
		date: 1646337600000
	},
	{
		slug: 'all-about-adapters-deploying-in-sveltekit',
		title: 'All about Adapters - Deploying in SvelteKit',
		embed: 'https://www.youtube.com/embed/SUrFDhhsJNo',
		eventUrl: 'https://www.youtube.com/watch?v=SUrFDhhsJNo',
		thumbnail: 'https://img.youtube.com/vi/SUrFDhhsJNo/maxresdefault.jpg',
		speakers: [speakers['steph-dietz']],
		date: 1642528800000
	},
	{
		slug: 'routes-for-svelte-with-routify',
		title: 'Exploring Routify in Svelte Kit',
		embed: 'https://www.youtube.com/embed/epVRgjhjI7M',
		eventUrl: 'https://www.youtube.com/watch?v=epVRgjhjI7M',
		thumbnail: 'https://img.youtube.com/vi/epVRgjhjI7M/maxresdefault.jpg',
		speakers: [speakers['ghost']],
		date: 1639764000000
	},
	{
		slug: 'building-design-systems-in-sveltekit',
		title: 'Building Design Systems in SvelteKit',
		embed: 'https://www.youtube.com/embed/3bjVQJwF6O8',
		eventUrl: 'https://www.youtube.com/watch?v=3bjVQJwF6O8',
		thumbnail: 'https://img.youtube.com/vi/3bjVQJwF6O8/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		date: 1638208800000
	},
	{
		slug: 'storybook-with-sveltekit',
		title: 'Integrating Storybook with SvelteKit',
		embed: 'https://www.youtube.com/embed/Kc1ULlfyUcw',
		eventUrl: 'https://www.youtube.com/watch?v=Kc1ULlfyUcw',
		thumbnail: 'https://img.youtube.com/vi/Kc1ULlfyUcw/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		date: 1641535200000
	},
	{
		slug: 'faunadb',
		title: 'Integrating FaunaDB with Svelte',
		embed: 'https://www.youtube.com/embed/zaoLZc76uZM',
		eventUrl: 'https://www.youtube.com/watch?v=zaoLZc76uZM',
		thumbnail: 'https://img.youtube.com/vi/zaoLZc76uZM/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['shadid-haque']],
		date: 1642608000000
	},
	{
		slug: 'backlight',
		title: 'Backlight.dev with SvelteKit',
		embed: 'https://www.youtube.com/embed/S9BxYHBwYvo',
		eventUrl: 'https://www.youtube.com/watch?v=S9BxYHBwYvo',
		thumbnail: 'https://img.youtube.com/vi/S9BxYHBwYvo/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['m4dz']],
		date: 1643990400000
	},
	{
		slug: 'planetscale',
		title: 'Planetscale with SvelteKit',
		embed: 'https://www.youtube.com/embed/iFhDwmI6OL0',
		eventUrl: 'https://www.youtube.com/watch?v=iFhDwmI6OL0',
		thumbnail: 'https://img.youtube.com/vi/iFhDwmI6OL0/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['jamesqquick']],
		date: 1645027200000
	},
	{
		slug: 'headless-wordpress-with-sveltekit',
		title: 'Headless WordPress with SvelteKit',
		embed: 'https://www.youtube.com/embed/3DbRHeEll3A',
		eventUrl: 'https://www.youtube.com/watch?v=3DbRHeEll3A',
		thumbnail: 'https://img.youtube.com/vi/3DbRHeEll3A/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['kellen-mace']],
		date: 1647442800000
	},
	{
		slug: 'sveltekit-on-cloudflare',
		title: 'SvelteKit on Cloudflare',
		embed: 'https://www.youtube.com/embed/rZaHTFjggCU',
		eventUrl: 'https://www.youtube.com/watch?v=rZaHTFjggCU',
		thumbnail: 'https://img.youtube.com/vi/rZaHTFjggCU/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['luke-edwards']],
		date: 1648652400000
	},
	{
		slug: 'empowering-your-images-with-cloudinary',
		title: 'Empowering your images with Cloudinary',
		embed: 'https://www.youtube.com/embed/DGi7FtBr2DE',
		eventUrl: 'https://www.youtube.com/watch?v=DGi7FtBr2DE',
		thumbnail: 'https://img.youtube.com/vi/DGi7FtBr2DE/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['tamas-piros']],
		date: 1652454000000
	},
	{
		slug: 'slicing-up-your-svelte-site-with-prismic',
		title: 'Slicing up your Svelte Site with Prismic',
		embed: 'https://www.youtube.com/embed/FUbHwwMALkk',
		eventUrl: 'https://www.youtube.com/watch?v=FUbHwwMALkk',
		thumbnail: 'https://img.youtube.com/vi/FUbHwwMALkk/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['sam-littlefair']],
		date: 1653062400000
	},
	{
		slug: 'rendering-your-svelte-app-on-render',
		title: 'Rendering your Svelte app on Render',
		embed: 'https://www.youtube.com/embed/SnV_hMLVyqs',
		eventUrl: 'https://www.youtube.com/watch?v=SnV_hMLVyqs',
		thumbnail: 'https://img.youtube.com/vi/SnV_hMLVyqs/maxresdefault.jpg',
		speakers: [speakers['brittney-postma']],
		guests: [speakers['eric-liu']],
		date: 1653411600000
	},
	{
		slug: 'astro',
		title: 'Astro and Svelte',
		embed: 'https://www.youtube.com/embed/iYKKg-50Gm4',
		eventUrl: 'https://www.youtube.com/watch?v=iYKKg-50Gm4',
		thumbnail: 'https://img.youtube.com/vi/iYKKg-50Gm4/maxresdefault.jpg',
		speakers: [speakers['ghost']],
		guests: [speakers['fred-k-schott']],
		date: 1660676400000
	},
	{
		slug: 'threlte',
		title: 'Threlte: Declarative Threejs for Svelte',
		embed: 'https://www.youtube.com/embed/dnclxsoRO_E',
		eventUrl: 'https://www.youtube.com/watch?v=dnclxsoRO_E',
		thumbnail: 'https://img.youtube.com/vi/dnclxsoRO_E/maxresdefault.jpg',
		speakers: [speakers['alex-warnes']],
		date: 1668456000000
	},
	{
		slug: 'sveltekit-form-actions',
		title: 'Form Actions',
		embed: 'https://www.youtube.com/embed/2OISk5-EHek',
		eventUrl: 'https://www.youtube.com/watch?v=2OISk5-EHek',
		thumbnail: 'https://img.youtube.com/vi/2OISk5-EHek/maxresdefault.jpg',
		speakers: [speakers['kev-a-k']],
		date: 1669822200000
	},
	{
		slug: 'skeleton-ui',
		title: 'Skeleton - A fully featured UI Toolkit',
		embed: 'https://www.youtube.com/embed/2OnJYCXJPK4',
		eventUrl: 'https://www.youtube.com/watch?v=2OnJYCXJPK4',
		thumbnail: 'https://img.youtube.com/vi/2OnJYCXJPK4/maxresdefault.jpg',
		speakers: [speakers['chris-simmons']],
		date: 1671127200000
	}
];
