import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		301,
		'https://calendar.google.com/calendar/u/3?cid=c3ZlbHRlc2lyZW5zQGdtYWlsLmNvbQ'
	);
}
