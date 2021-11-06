const date = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};

export const events = [
	{
		id: 1,
		title: 'Building Design Systems in SvelteKit',
		speaker: 'Brittney Postma',
		img: '/images/speakers/brittney.jpg',
		twitter: '@brittneypostma',
		date: new Intl.DateTimeFormat('en-US', date).format(
			new Date('November 22, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)')
		),
		time: new Date('November 22, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)'),
		slug: 'building-design-systems-in-sveltekit'
	},
	{
		id: 2,
		title: 'Routes for Svelte with Routify',
		speaker: 'Willow',
		img: '/images/speakers/ghost.jpg',
		twitter: '@onlyspaceghost',
		date: new Intl.DateTimeFormat('en-US', date).format(
			new Date('December 17, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)')
		),
		time: new Date('December 17, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)'),
		slug: 'routes-for-svelte-with-routify'
	},
	{
		id: 3,
		title: 'All about Adapters - Deploying in SvelteKit',
		speaker: 'Steph Dietz',
		img: '/images/speakers/steph.jpg',
		twitter: '@steph_dietz_',
		date: new Intl.DateTimeFormat('en-US', date).format(
			new Date('January 14, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)')
		),
		time: new Date('January 14, 2021, 13:00:00 GMT-0500 (Eastern Standard Time)'),
		slug: 'all-about-adapters'
	}
];
