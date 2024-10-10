import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://bubble-pop-svelte.netlify.app');
}
