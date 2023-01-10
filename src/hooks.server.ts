import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const theme = event.cookies.get('theme');

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replaceAll('%theme%', theme || '');
		}
	});
};
