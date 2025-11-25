import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';
import { join } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$data: join(import.meta.dirname, './src/data'),
		},

		csrf: {
			checkOrigin: import.meta?.env?.MODE == 'dev',
		},

		experimental: {
			remoteFunctions: true,
		},
	},

	compilerOptions: {
		experimental: {
			async: true,
		},
	},

	preprocess: vitePreprocess(),

	vitePlugin: {
		inspector: {},
	},
};

export default config;
