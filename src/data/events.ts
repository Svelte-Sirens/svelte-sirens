import type { Event } from './data.d';
import { speakers } from './speakers';

export const events: Event[] = [
	{
		slug: 'the-story-behind-the-unofficial-svelte-newsletter',
		title: 'The story behind the (unofficial) Svelte newsletter',
		date: 1653674400000,
		eventUrl: 'https://www.youtube.com/watch?v=aK0xXm3hPxk',
		speakers: [
			speakers['dani-sandoval']
		]
	},
	{
		slug: 'sveltekit-sanityio-a-match-made-in-heaven',
		title: 'SvelteKit + Sanity.io; a match made in heaven',
		eventUrl: 'https://www.youtube.com/watch?v=DGi7FtBr2DE',
		speakers: [
			speakers['jacob-stordahl'],
		],
		date: 1652461200000
	},
	{
		slug: 'testing-in-svelte',
		title: 'Building Advanced Landing Pages',
		eventUrl: 'https://www.youtube.com/watch?v=D8oo5dwXMQ4',
		speakers: [
			speakers['amy-dutton']
		],
		date: 1650042000000
	},
	{
		slug: 'build-in-3d-with-svelte',
		title: 'Build in 3D with Svelte',
		eventUrl: 'https://www.youtube.com/watch?v=7PJ_28fgLp8',
		speakers: [
			speakers['scott-tolinski']
		],
		date: 1646337600000
	},
	{
		slug: 'all-about-adapters-deploying-in-sveltekit',
		title: 'All about Adapters - Deploying in SvelteKit',
		eventUrl: 'https://www.youtube.com/embed/SUrFDhhsJN',
		speakers: [
			speakers['steph-dietz']
		],
		date: 1642528800000
	},
	{
		slug: 'routes-for-svelte-with-routify',
		title: 'Exploring Routify in Svelte Kit',
		eventUrl: 'https://www.youtube.com/embed/epVRgjhjI7M',
		speakers: [
			speakers['ghost']
		],
		date: 1639764000000
	},
	{
		slug: 'building-design-systems-in-sveltekit',
		title: 'Building Design Systems in SvelteKit',
		eventUrl: 'https://www.youtube.com/embed/3bjVQJwF6O8',
		speakers: [
			speakers['brittney-postma']
		],
		date: 1638208800000
	}
];