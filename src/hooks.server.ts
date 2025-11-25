import type { Handle } from '@sveltejs/kit';

type Theme = 'dark' | 'light';

function isValidTheme(theme?: string): theme is Theme {
	return theme === 'light' || theme === 'dark';
}

function sanitiseTheme(theme?: string): Theme {
	return isValidTheme(theme) ? theme : 'dark';
}

export const handle: Handle = ({ event, resolve }) => {
	const theme = sanitiseTheme(event.cookies.get('theme'));

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replaceAll('%theme%', theme);
		},
	});
};
