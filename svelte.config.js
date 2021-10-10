/** @type {import('@sveltejs/kit').Config} */
import path from 'path';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@components': path.resolve('./src/lib/components'),
					'@layouts': path.resolve('./src/lib/layouts'),
					'@lib': path.resolve('./src/lib'),
					'@utils': path.resolve('./src/lib/utils'),
					'@styles': path.resolve('./src/lib/styles'),
					'@stores': path.resolve('./src/lib/stores')
				}
			}
		}
	}
};

export default config;
