import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';
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

		experimental: {
			remoteFunctions: true
		}
	},

	compilerOptions: {
		experimental: {
			async: true
		}
	},

	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: {}
	}
};

export default config;
