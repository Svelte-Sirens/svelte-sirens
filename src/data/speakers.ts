import type { Speaker } from './data';

const typeSpeakers = <T extends Record<string, Speaker>>(data: T): Record<keyof T, Speaker> =>
	Object.freeze(data);

export const speakers = typeSpeakers({
	'jess-sachs': {
		name: 'Jess Sachs',
		slug: 'jess-sachs',
		handle: '@_jessicasachs',
		handleUrl: 'https://twitter.com/_jessicasachs',
		picture: 'https://pbs.twimg.com/profile_images/1546530621534658560/2k1pAZlw_400x400.jpg',
		biography:
			'Jess is a Staff Software Engineer at Path AI. She’s been coding for more than 11 years and now works professionally within the Open Source community. She is a Core Team Member of both Cypress and Faker and a contributor to Vue and Vitest. She’s also an educator at Vue Mastery.'
	},
	'dani-sandoval': {
		name: 'Dani Sandoval',
		slug: 'dani-sandoval',
		handle: '@d3sandoval',
		handleUrl: 'https://twitter.com/d3sandoval',
		picture: '/images/speakers/d3sandoval.jpg',
		biography:
			"Since graduating from University of Washington with a degree in Human Centered Design and Engineering, Dani has helped build a resilient product development process at Discuss.io, trained Fortune 500 product teams at VMware Pivotal Labs, and am grown a team as the Director of Design at Chipper Cash. Keep an eye out on Dani's Twitter for an announcement of their next adventure!"
	},

	'jacob-stordahl': {
		name: 'Jacob Størdahl',
		slug: 'jacob-stordahl',
		handle: '@stordahl_',
		handleUrl: 'https://twitter.com/stordahl_',
		picture: '/images/speakers/jacob-stordahl.jpg',
		biography:
			'surfing the net 🏄 | browser monkey 🐒 | SWE @stylitics\n | UI/UX, design systems, a11y, javascript, & svelte | he/they | thoughts are mine, not my employers'
	},

	'amy-dutton': {
		name: 'Amy Dutton',
		slug: 'amy-dutton',
		handle: '@selfteachme',
		handleUrl: 'https://twitter.com/selfteachme',
		picture: '/images/speakers/amy-dutton.jpg',
		biography:
			'I love teaching designers how to code and developers how to design. I am currently the Director of Design at [ZEAL](https://www.codingzeal.com/) and co-host the [CompressedFM Podcast](https://www.compressed.fm/).'
	},

	'scott-tolinski': {
		name: 'Scott Tolinski',
		slug: 'scott-tolinski',
		handle: '@stolinski',
		handleUrl: 'https://twitter.com/stolinski',
		picture: '/images/speakers/scott-tolinski.jpg',
		biography:
			"I own and make video tutorials teaching web development for Level Up Tutorials, releasing a new premium series every month.\n\nI also co-host Syntax.fm with Wes Bos. Syntax is a popular, light hearted web development podcast that teaches full stack topics while staying fun.\n\nI enjoy bboying also known as breakdancing, and have been dancing for over 15 years doing shows for professional NFL and NBA teams. I'm inspired by a hot cup of green tea, excellent music, and Shaw Bros. kung fu movies."
	},

	'steph-dietz': {
		name: 'Steph Dietz',
		slug: 'steph-dietz',
		handle: '@steph_dietz_',
		handleUrl: 'https://twitter.com/steph_dietz_',
		picture: '/images/speakers/steph.jpg',
		biography:
			"Hey 👋, I'm Steph, a developer advocate at Vercel. I am a self-taught developer based out of Dallas, Tx.\nI'm a Baylor grad with a BS in Biochem, but my interest in solving problems and creating lead me to become a software developer. I started at Vercel with the intent to create Vue content, but quickly found myself becoming part of the Svelte community. I now spend most of my time creating Svelte content."
	},

	ghost: {
		name: 'Willow (GHOST)',
		slug: 'ghost',
		handle: '@onlyspaceghost',
		handleUrl: 'https://twitter.com/onlyspaceghost',
		picture: '/images/speakers/ghost.jpg',
		biography:
			"I'm Willow, also known as GHOST online! I am a self-taught fullstack developer working in opensource and freelance development. I work on a bunch of svelte related packages such as Routify or svelte-hamburgers, I love the svelte community and am so happy to be involved with Svelte Sirens "
	},

	'brittney-postma': {
		name: 'Brittney Postma',
		slug: 'brittney-postma',
		handle: '@brittneypostma',
		handleUrl: 'https://twitter.com/BrittneyPostma',
		picture: '/images/speakers/brittney.jpg',
		biography:
			'I am a self-taught developer and mom of three. I work for Netlify as a Developer Experience Engineer which basically that I create a lot of content. I am the co-founder of the Svelte Sirens. I also co-host the Svelte Radio, Remotely Interesting, and Purrfect.Dev podcasts. I work closely with CodingCat.Dev to create content on and around the Jamstack. I love helping people in the community and empowering people with the learn, build, and teach philosophy to make their dreams happen.'
	},

	// 'amelia-wattenberger': {
	// 	name: 'Amelia Wattenberger',
	//   slug: 'amelia-wattenberger',
	// 	biography:
	// 		'I write code, think about data, and create digital experiences. Currently Staff Research Engineer doing R&D on developer experience on the Github Office of the CTO team.',
	// 	picture: '/images/speakers/amelia-wattenberger.jpg',
	// 	handle: '@Wattenberger',
	// 	handleUrl: 'https://twitter.com/Wattenberger'
	// },

	'josefine-schaefer': {
		name: 'Josefine Schaefer',
		slug: 'josefine-schaefer',
		biography: 'DevRel Engineer @storyblok\n 🎈 @GirlCodeRec\n ambassador | she/her',
		picture: '/images/speakers/josefine-schaefer.jpg',
		handle: '@JsfnSchfr',
		handleUrl: 'https://twitter.com/JsfnSchfr'
	},

	'shadid-haque': {
		name: 'Shadid Haque',
		slug: 'shadid-haque',
		handle: '@HaqueShadid',
		handleUrl: 'https://twitter.com/HaqueShadid',
		picture: '/images/speakers/shadid-haque.jpg'
	},

	m4dz: {
		name: 'm4dz',
		slug: 'm4dz',
		handle: '@m4d_z',
		handleUrl: 'https://twitter.com/m4d_z',
		picture: '/images/speakers/m4dz.jpg'
	},

	jamesqquick: {
		name: 'James Q. Quick',
		slug: 'jamesqquick',
		handle: '@jamesqquick',
		handleUrl: 'https://twitter.com/jamesqquick',
		picture: '/images/speakers/jamesqquick.jpg'
	},

	'kellen-mace': {
		name: 'Kellen Mace',
		slug: 'kellen-mace',
		handle: '@KellenMace',
		handleUrl: 'https://twitter.com/KellenMace',
		picture: '/images/speakers/kellen-mace.png'
	},

	'luke-edwards': {
		name: 'Luke Edwards',
		slug: 'luke-edwards',
		handle: '@lukeed05',
		handleUrl: 'https://twitter.com/lukeed05',
		picture: '/images/speakers/luke-edwards.png'
	},

	'tamas-piros': {
		name: 'Tamas Piros',
		slug: 'tamas-piros',
		handle: '@tpiros',
		handleUrl: 'https://twitter.com/tpiros',
		picture: '/images/speakers/tamas-piros.png'
	},

	'sam-littlefair': {
		name: 'Sam Littlefair',
		slug: 'sam-littlefair',
		handle: '@samlfair',
		handleUrl: 'https://twitter.com/samlfair/photo',
		picture: '/images/speakers/sam-littlefair.jpg'
	},

	'eric-liu': {
		name: 'Eric Liu',
		slug: 'eric-liu',
		handle: '@ericliuus',
		handleUrl: 'https://twitter.com/ericliuus',
		picture: '/images/speakers/eric-liu.jpg'
	},

	'gen-ashley': {
		name: 'Gen Ashley',
		slug: 'gen-ashley',
		handle: '@coderinheels',
		handleUrl: 'https://twitter.com/coderinheels',
		biography:
			'Gen is the Founder of TECH(K)NOW Day - a conference focused on Women in Technology.  She is a very active leader in the Tech community in London and is an Ambassador for Google Women Techmakers.  She is also a lead for NASA Space Apps Challenge London, Twitter Developer Community, Google Developer Groups London and Huawei Developer Group UK.  She is also part of the leadership committee for Ada’s List (a network for women in technology). She is co-organiser of COED:CODE, OpenTechSchool London and London Game Developers.\n\nShe was the Head of Developer Outreach at Skills Matter and a former VP / Business Development Manager / Project Manager at Citigroup. Gen helped lead Anita Borg Institute London and was actively instrumental in delivering the very first 1-Day Grace Hopper Conference in Europe (GHC/1 which is now called HopperX1) which was held in London. As Director of Women Who Code London for 5 years, she built up a community of around 6000 women in tech.',
		picture: '/images/speakers/gen.jpg'
	}
});
