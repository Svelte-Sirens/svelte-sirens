import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';
import { join } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			$data: join(import.meta.dirname, './src/data'),
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

	vitePlugin: {
		inspector: {},
	},
};

export default config;
