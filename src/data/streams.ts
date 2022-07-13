import { speakers } from './speakers';
import type { Stream } from './data';

export const streams: Stream[] = [
	{
		slug: 'storybook-with-sveltekit',
		title: 'Intergrating Storybook with SvelteKit',
		streamUrl: 'https://www.youtube.com/embed/Kc1ULlfyUcw',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [],
		date: 1641535200000
	},
	{
		slug: 'faunadb',
		title: 'Intergrating FaunaDB with Svelte',
		streamUrl: 'https://www.youtube.com/embed/zaoLZc76uZM',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			{
				name: 'Shadid Haque',
				handle: 'HaqueShadid',
				handleUrl: 'https://twitter.com/HaqueShadid',
				picture: '/images/speakers/shadid-haque.jpg'
			}
		],
		date: 1642608000000
	},
	{
		slug: 'backlight',
		title: 'Backlight.dev with SvelteKit',
		streamUrl: 'https://www.youtube.com/embed/S9BxYHBwYvo',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			{
				name: 'm4dz',
				handle: 'm4d_z',
				handleUrl: 'https://twitter.com/m4d_z',
				picture: '/images/speakers/m4dz.jpg'
			}
		],
		date: 1643990400000
	},
	{
		slug: 'planetscale',
		title: 'Planetscale with SvelteKit',
		streamUrl: 'https://www.youtube.com/embed/iFhDwmI6OL0',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			{
				name: 'James Q. Quick',
				handle: 'jamesqquick',
				handleUrl: 'https://twitter.com/jamesqquick',
				picture: '/images/speakers/jamesqquick.jpg'
			}
		],
		date: 1645027200000
	},
	{
		slug: 'headless-wordpress-with-sveltekit',
		title: 'Headless WordPress with SvelteKit',
		streamUrl: 'https://www.youtube.com/watch?v=3DbRHeEll3A',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			{
				name: 'Kellen Mace',
				handle: 'KellenMace',
				handleUrl: 'https://twitter.com/KellenMace',
				picture: '/images/speakers/kellen-mace.jpg'
			}
		],
		date: 1647442800000
	},
	{
		slug: 'sveltekit-on-cloudflare',
		title: 'SvelteKit on Cloudflare',
		streamUrl: 'https://www.youtube.com/watch?v=rZaHTFjggCU',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			{
				name: 'Luke Edwards',
				handle: 'lukeed05',
				handleUrl: 'https://twitter.com/lukeed05',
				picture: '/images/speakers/luke-edwards.jpg'
			}
		],
		date: 1648652400000
	},
	{
		slug: 'empowering-your-images-with-cloudinary',
		title: 'Empowering your images with Cloudinary',
		streamUrl: 'https://www.youtube.com/watch?v=DGi7FtBr2DE',
		speakers: [],
		guests: [
			{
				name: 'Tamas Piros',
				handle: '@tpiros',
				handleUrl: 'https://twitter.com/tpiros',
				picture: '/images/speakers/tamas-piros.jpg'
			}
		],
		date: 1652454000000
	},
	{
		slug: 'slicing-up-your-svelte-site-with-prismic',
		title: 'Slicing up your Svelte Site with Prismic',
		streamUrl:
			'https://www.youtube.com/watch?v=FUbHwwMALkkhttps://www.youtube.com/watch?v=FUbHwwMALkk',
		speakers: [],
		guests: [
			{
				name: 'Sam Littlefair',
				handle: 'samlfair',
				handleUrl: 'https://twitter.com/samlfair/photo',
				picture: '/images/speakers/sam-littlefair.jpg'
			}
		],
		date: 1653062400000
	},
	{
		slug: 'rendering-your-svelte-app-on-render',
		title: 'Rendering your Svelte app on Render',
		streamUrl: 'https://www.youtube.com/watch?v=SnV_hMLVyqs',
		speakers: [],
		guests: [
			{
				name: 'Eric Liu',
				handle: '@ericliuus',
				handleUrl: 'https://twitter.com/ericliuus',
				picture: '/images/speakers/eric-liu.jpg'
			}
		],
		date: 1653411600000
	}
];
