import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(301, 'https://bubble-pop-svelte.netlify.app/');
}
