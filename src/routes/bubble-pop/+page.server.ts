import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	throw redirect(301, 'https://bubble-pop-svelte.netlify.app/');
};
