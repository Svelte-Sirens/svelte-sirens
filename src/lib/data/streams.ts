import { speakers } from './speakers';
import type { Stream } from './data';

export const streams: Stream[] = [
	{
		slug: 'storybook-with-sveltekit',
		title: 'Integrating Storybook with SvelteKit',
		embed: 'https://www.youtube.com/embed/Kc1ULlfyUcw',
    streamUrl: 'https://www.youtube.com/watch?v=Kc1ULlfyUcw',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [],
		date: 1641535200000
	},
	{
		slug: 'faunadb',
		title: 'Integrating FaunaDB with Svelte',
		embed: 'https://www.youtube.com/embed/zaoLZc76uZM',
    streamUrl: 'https://www.youtube.com/watch?v=zaoLZc76uZM',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			speakers['shadid-haque']
		],
		date: 1642608000000
	},
	{
		slug: 'backlight',
		title: 'Backlight.dev with SvelteKit',
		embed: 'https://www.youtube.com/embed/S9BxYHBwYvo',
    streamUrl: 'https://www.youtube.com/watch?v=S9BxYHBwYvo',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			speakers['m4dz']
		],
		date: 1643990400000
	},
	{
		slug: 'planetscale',
		title: 'Planetscale with SvelteKit',
		embed: 'https://www.youtube.com/embed/iFhDwmI6OL0',
    streamUrl: 'https://www.youtube.com/watch?v=iFhDwmI6OL0',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			speakers['jamesqquick']
		],
		date: 1645027200000
	},
	{
		slug: 'headless-wordpress-with-sveltekit',
		title: 'Headless WordPress with SvelteKit',
		embed: 'https://www.youtube.com/embed/3DbRHeEll3A',
    streamUrl: 'https://www.youtube.com/watch?v=3DbRHeEll3A',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			speakers['kellen-mace']
		],
		date: 1647442800000
	},
	{
		slug: 'sveltekit-on-cloudflare',
		title: 'SvelteKit on Cloudflare',
		embed: 'https://www.youtube.com/embed/rZaHTFjggCU',
    streamUrl: 'https://www.youtube.com/watch?v=rZaHTFjggCU',
		speakers: [
			speakers['brittney-postma']
		],
		guests: [
			speakers['luke-edwards']
		],
		date: 1648652400000
	},
	{
		slug: 'empowering-your-images-with-cloudinary',
		title: 'Empowering your images with Cloudinary',
		embed: 'https://www.youtube.com/embed/DGi7FtBr2DE',
    streamUrl: 'https://www.youtube.com/watch?v=DGi7FtBr2DE',
		speakers: [],
		guests: [
			speakers['tamas-piros']
		],
		date: 1652454000000
	},
	{
		slug: 'slicing-up-your-svelte-site-with-prismic',
		title: 'Slicing up your Svelte Site with Prismic',
		embed: 'https://www.youtube.com/embed/FUbHwwMALkk',
    streamUrl: 'https://www.youtube.com/watch?v=FUbHwwMALkk',
		speakers: [],
		guests: [
			speakers['sam-littlefair']
		],
		date: 1653062400000
	},
	{
		slug: 'rendering-your-svelte-app-on-render',
		title: 'Rendering your Svelte app on Render',
		embed: 'https://www.youtube.com/embed/SnV_hMLVyqs',
    streamUrl: 'https://www.youtube.com/watch?v=SnV_hMLVyqs',
		speakers: [],
		guests: [
			speakers['eric-liu']
		],
		date: 1653411600000
	}
];
