import type { Speaker } from './data';

export const speakers: Record<string, Speaker> = {
	'dani-sandoval': {
		name: 'Dani Sandoval',
		handle: '@d3sandoval',
		handleUrl: 'https://twitter.com/d3sandoval',
		picture: '/images/speakers/d3sandoval.jpg',
		biography:
			"Since graduating from University of Washington with a degree in Human Centered Design and Engineering, Dani has helped build a resilient product development process at Discuss.io, trained Fortune 500 product teams at VMware Pivotal Labs, and am grown a team as the Director of Design at Chipper Cash. Keep an eye out on Dani's Twitter for an announcement of their next adventure!"
	},

	'jacob-stordahl': {
		name: 'Jacob Størdahl',
		handle: '@stordahl_',
		handleUrl: 'https://twitter.com/stordahl_',
		picture: '/images/speakers/jacob-stordahl.jpg',
		biography:
			'surfing the net 🏄 | browser monkey 🐒 | SWE @stylitics\n | UI/UX, design systems, a11y, javascript, & svelte | he/they | thoughts are mine, not my employers'
	},

	'amy-dutton': {
		name: 'Amy Dutton',
		handle: 'selfteachme',
		handleUrl: 'https://twitter.com/selfteachme',
		picture: '/images/speakers/amy-dutton.jpg',
		biography:
			'I love teaching designers how to code and developers how to design. I am currently the Director of Design at [ZEAL](https://www.codingzeal.com/) and co-host the [CompressedFM Podcast](https://www.compressed.fm/).'
	},

	'scott-tolinski': {
		name: 'Scott Tolinski',
		handle: '@stolinski',
		handleUrl: 'https://twitter.com/stolinski',
		picture: '/images/speakers/scott-tolinski.jpg',
		biography:
			"I own and make video tutorials teaching web development for Level Up Tutorials, releasing a new premium series every month.\n\nI also co-host Syntax.fm with Wes Bos. Syntax is a popular, light hearted web development podcast that teaches full stack topics while staying fun.\n\nI enjoy bboying also known as breakdancing, and have been dancing for over 15 years doing shows for professional NFL and NBA teams. I'm inspired by a hot cup of green tea, excellent music, and Shaw Bros. kung fu movies."
	},

	'steph-dietz': {
		name: 'Steph Dietz',
		handle: '@steph_dietz_',
		handleUrl: 'https://twitter.com/steph_dietz_',
		picture: '/images/speakers/steph.jpg',
		biography:
			"Hey 👋, I'm Steph, a developer advocate at Vercel. I am a self-taught developer based out of Dallas, Tx.\nI'm a Baylor grad with a BS in Biochem, but my interest in solving problems and creating lead me to become a software developer. I started at Vercel with the intent to create Vue content, but quickly found myself becoming part of the Svelte community. I now spend most of my time creating Svelte content."
	},

	ghost: {
		name: 'Willow (GHOST)',
		handle: '@onlyspaceghost',
		handleUrl: 'https://twitter.com/onlyspaceghost',
		picture: '/images/speakers/ghost.jpg',
		biography:
			"# Willow (GHOST)\n\nI'm Willow, also known as GHOST online! I am a self-taught fullstack developer working in opensource and freelance development. I work on a bunch of svelte related packages such as Routify or svelte-hamburgers, I love the svelte community and am so happy to be involved with Svelte Sirens "
	},

	'brittney-postma': {
		name: 'Brittney Postma',
		handle: '@brittneypostma',
		handleUrl: 'https://twitter.com/BrittneyPostma',
		picture: '/images/speakers/brittney.jpg',
		biography:
			"# Brittney Postma\n\nI am the frontend designer & developer at CodingCat.dev and the co-host of the Purrfect.dev podcast. I'm a self-taught developer with a background in Graphic Design. I am passionate about CSS and responsive design principles and love to work with new technologies, especially on the Jamstack. My day job is building components for a design system in SvelteKit at Grainger. I also volunteer as a mentor in several discord communities and love helping others achieve their goals."
	},

	'amelia-wattenberger': {
		name: 'Amelia Wattenberger',
		biography:
			'I write code, think about data, and create digital experiences. Currently Staff Research Engineer doing R&D on developer experience on the Github Office of the CTO team.',
		picture: '/images/speakers/amelia-wattenberger.jpg',
		handle: '@Wattenberger',
		handleUrl: 'https://twitter.com/Wattenberger'
	},

	'jessica-sachs': {
		name: 'Jessica Sachs',
		biography:
			'Jess is a Staff Engineer at Cypress where she’s building a new generation of frontend testing tools. She’s been coding for more than 10 years and now works professionally within the Open Source community. She is a Core Team Member of both Cypress and Faker and a contributor to Vue and Vitest. She’s also an educator at Vue Mastery.',
		picture: '/images/speakers/jessica-sachs.jpg',
		handle: '@_jessicasachs',
		handleUrl: 'https://twitter.com/_jessicasachs'
	},

	'josefine-schaefer': {
		name: 'Josefine Schaefer',
		biography: 'DevRel Engineer @storyblok\n 🎈 @GirlCodeRec\n ambassador | she/her',
		picture: '/images/speakers/josefine-schaefer.jpg',
		handle: '@JsfnSchfr',
		handleUrl: 'https://twitter.com/JsfnSchfr'
	}
} as const;