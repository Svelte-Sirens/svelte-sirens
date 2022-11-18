import type { Speaker } from './data';

const typeSpeakers = <T extends Record<string, Speaker>>(data: T): Record<keyof T, Speaker> =>
	Object.freeze(data);

export const speakers = typeSpeakers({
	'lacey-pevey': {
		name: 'Lacey Pevey',
		slug: 'lacey-pevey',
		handle: '@LaceyPevey',
		handleUrl: 'https://twitter.com/LaceyPevey',
		picture: 'https://www.falconriskservices.com/hubfs/Lacey%20Pevey%20Headshot%20(2)-1.jpg',
		biography: `Lacey joined Falcon Risk Services as Head of Technology and Operations. She has over 20 years of insurance experience and has held a variety of positions in the industry including Chief Underwriting Officer of Financial Institutions at AIG, and her most recent position, VP of Underwriting Analytics at Friss. Lacey received her Bachelor in Science from Tulane University, as well as her MBA from Columbia University. She is a CFA charterholder and holds several additional certifications.
    <br/><br/>
      During her free time, Lacey enjoys reading, gardening, and spending time with her two underwriters in training, who are aged 2 and 6.
    <br/><br/>
      Fun Fact: Lacey enjoys coffee so much that she owns her own coffee roasting business in her hometown Shreveport, Louisiana, where she relocated from NYC a few years ago.`
	},
	'kev-a-k': {
		name: 'Kevin A. K.',
		slug: 'kev-a-k',
		handle: '@kevmodrome',
		handleUrl: 'https://twitter.com/kevmodrome',
		picture: 'https://pbs.twimg.com/profile_images/1534604667790970881/oq51WaOM_400x400.jpg',
		biography:
			'Kev is the Technical Community Builder for Svelte Society and the main organizer for Svelte Summit.'
	},
	'jess-sachs': {
		name: 'Jess Sachs',
		slug: 'jess-sachs',
		handle: '@_jessicasachs',
		handleUrl: 'https://twitter.com/_jessicasachs',
		picture: '/images/speakers/jess-sachs.jpeg',
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
	'fred-k-schott': {
		name: 'Fred K Schott',
		slug: 'fred-k-schott',
		handle: '@fredkschott',
		handleUrl: 'https://twitter.com/fredkschott',
		picture: '/images/speakers/fredkschott.jpg'
	},

	'alex-warnes': {
		name: 'Alex Warnes',
		slug: 'alex-warnes',
		handle: '@a_warnes',
		handleUrl: 'https://twitter.com/a_warnes',
		picture: '/images/speakers/awarnes.jpeg'
	}
});
