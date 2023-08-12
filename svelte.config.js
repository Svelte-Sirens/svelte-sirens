import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$components: path.resolve('./src/lib/components'),
			$layout: path.resolve('./src/lib/layout'),
			$lib: path.resolve('./src/lib'),
			$utils: path.resolve('./src/lib/utils'),
			$styles: path.resolve('./src/lib/styles'),
			$stores: path.resolve('./src/lib/stores'),
			$data: './src/data'
		},

		csrf: {
			checkOrigin: import.meta?.env?.MODE == 'dev'
		},

		prerender: {
			crawl: true
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]

	// vitePlugin: {
	//   experimental: {
	//     inspector: {
	//       toggleKeyCombo: 'shift',
	//       holdMode: false,
	//       showToggleButton: 'always',
	//       toggleButtonPos: 'bottom-right',
	//     }
	//   }
	// },
};

export default config;
