import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(307, 'https://calendar.google.com/calendar/u/3?cid=c3ZlbHRlc2lyZW5zQGdtYWlsLmNvbQ');
}
