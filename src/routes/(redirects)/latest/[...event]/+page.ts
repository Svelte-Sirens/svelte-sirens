import { redirect } from '@sveltejs/kit';

export const prerender = false;

export function load({ params }) {
	redirect(307, `/events/${params.event}`);
}
